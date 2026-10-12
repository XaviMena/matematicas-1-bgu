// Lógica principal de la aplicación: Navegación, Carga Dinámica y Renderizado
let curriculumData = null;
let currentTrimesterId = 'trimestre-1';
let currentTopicId = 't1-u1-tema1';
const trimesterSelections = {};
const groupSelections = {};
let topicLoadVersion = 0;

function topicContext(id) {
  for (const trimester of curriculumData.trimestres) {
    for (const group of trimester.unidades) {
      const topic = group.temas.find(t => t.id === id);
      if (topic) return {trimester, group, topic};
    }
  }
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  const compactMenu = window.matchMedia('(max-width: 900px)');
  const updateMenu = () => { document.getElementById('course-menu').open = !compactMenu.matches; };
  updateMenu();
  compactMenu.addEventListener('change', updateMenu);
  await loadCurriculum();
  setupSearch();
  document.getElementById('topics-list').addEventListener('click', event => {
    const groupSummary = event.target.closest('summary[data-open-topic]');
    if (groupSummary?.dataset.openTopic && !groupSummary.parentElement.open) {
      event.preventDefault();
      loadTopic(groupSummary.dataset.openTopic);
      if (compactMenu.matches) document.getElementById('course-menu').open = false;
      return;
    }
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    event.preventDefault();
    loadTopic(link.getAttribute('href').slice(1));
    if (compactMenu.matches) document.getElementById('course-menu').open = false;
  });
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (!id) loadTopic('t1-u1-tema1');
    else if (topicContext(id) && id !== currentTopicId) loadTopic(id);
    else if (curriculumData.trimestres.some(t => t.id === id) && id !== currentTrimesterId) selectTrimester(id);
  });
});

// Inicialización de Modo Oscuro / Claro
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('math-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('math-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Carga del currículo
async function loadCurriculum() {
  try {
    if (window.CURRICULUM_DATA) {
      curriculumData = window.CURRICULUM_DATA;
    } else {
      const res = await fetch('data/curriculum.json');
      curriculumData = await res.json();
    }
    const requested = location.hash.slice(1);
    const context = topicContext(requested);
    if (context) await loadTopic(requested);
    else if (curriculumData.trimestres.some(t => t.id === requested)) selectTrimester(requested);
    else await loadTopic(currentTopicId);
  } catch (e) {
    console.error("Error al cargar curriculum.json:", e);
  }
}

// Renderizar Pestañas de Trimestres
function renderTrimesterTabs() {
  const container = document.getElementById('trimester-tabs');
  if (!container || !curriculumData) return;

  container.innerHTML = curriculumData.trimestres.map(t => `
    <button aria-current="${t.id === currentTrimesterId ? 'page' : 'false'}" class="trim-tab ${t.id === currentTrimesterId ? 'active' : ''}" onclick="selectTrimester('${t.id}')">
      ${t.nombre}
      <span class="trim-badge">${t.activo ? 'Disponible' : 'Próximamente'}</span>
    </button>
  `).join('');
}

function selectTrimester(trimId) {
  const trim = curriculumData.trimestres.find(t => t.id === trimId);
  if (!trim) return;
  const first = trim.unidades.flatMap(u => u.temas)[0];
  currentTrimesterId = trimId;
  if (first) loadTopic(trimesterSelections[trimId] || first.id);
  else {
    topicLoadVersion++;
    currentTopicId = null;
    history.pushState(null, '', '#' + trimId);
    renderTrimesterTabs();
    renderEmptyTrimester(trim);
    renderCourseLocation();
  }
}

function renderCourseLocation() {
  const el = document.getElementById('course-location');
  const context = topicContext(currentTopicId);
  const trim = curriculumData.trimestres.find(t => t.id === currentTrimesterId);
  if (!el) return;
  el.innerHTML = context ? `<span>${context.trimester.nombre}</span><span aria-hidden="true"> / </span><span>Tema ${context.group.numero}</span><span aria-hidden="true"> / </span><strong>Subtema ${context.topic.numero} · ${context.topic.titulo}</strong>` : `<strong>${trim.nombre}</strong>`;
  const download = document.getElementById('topic-download');
  const pdf = context && window.PDF_CATALOG?.[context.group.id];
  download.hidden = !pdf;
  if (pdf) {
    download.href = pdf.url;
    download.download = pdf.filename;
    download.textContent = `↓ Descargar tema ${context.group.numero} en PDF`;
    download.setAttribute('aria-label', `Descargar tema ${context.group.numero} completo en PDF: ${context.group.titulo}. Incluye todos sus subtemas y soluciones.`);
  } else {
    download.removeAttribute('href');
    download.removeAttribute('download');
  }
}

function renderEmptyTrimester(trim) {
  const sidebar = document.getElementById('topics-list');
  const main = document.getElementById('main-content');
  if (sidebar) sidebar.innerHTML = `<li style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No hay temas cargados aún en este trimestre.</li>`;
  if (main) {
    main.innerHTML = `
      <div class="edu-card" style="text-align: center; padding: 4rem 2rem;">
        <span style="font-size: 3rem;">📚</span>
        <h2 style="margin: 1rem 0; color: var(--primary);">${trim.nombre} - En Construcción</h2>
        <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
          ${trim.descripcion}
        </p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem;">
          Los contenidos de este trimestre se habilitarán cuando estén preparados. Puedes continuar practicando en el primer trimestre.
        </p>
      </div>
    `;
  }
}

// Renderizar Lista de Temas en la Barra Lateral
function renderSidebarTopics() {
  const list = document.getElementById('topics-list');
  if (!list || !curriculumData) return;

  const trim = curriculumData.trimestres.find(t => t.id === currentTrimesterId);
  if (!trim) return;

  list.innerHTML = trim.unidades.map(u => `<li><details class="topic-group" ${u.temas.some(t=>t.id===currentTopicId)?'open':''}>
    <summary data-open-topic="${groupSelections[u.id] || u.temas[0]?.id || ''}" title="Abrir tema y mostrar sus subtemas"><span class="group-number">Tema ${u.numero}</span><strong>${u.titulo}</strong><small>${u.temas.length} subtemas</small></summary>
    <ul class="subtopics-list">${u.temas.map(t => `<li><a href="#${t.id}" class="topic-link ${t.id===currentTopicId?'active':''}" ${t.id===currentTopicId?'aria-current="page"':''}><span class="topic-link-num">Subtema ${t.numero}</span><span class="topic-link-title">${t.titulo}</span></a></li>`).join('') || '<li class="study-note">En preparación</li>'}</ul>
  </details></li>`).join('');
}

// Cada subtema conserva su sesión y puede abrirse mediante un enlace directo.
async function loadTopic(topicId) {
  const context = topicContext(topicId);
  if (!context) return;
  const request = ++topicLoadVersion;
  const search = document.getElementById('search-input');
  if (search) search.value = '';
  currentTrimesterId = context.trimester.id;
  currentTopicId = topicId;
  trimesterSelections[currentTrimesterId] = topicId;
  groupSelections[context.group.id] = topicId;
  if (location.hash !== '#' + topicId) history.pushState(null, '', '#' + topicId);
  renderTrimesterTabs();
  renderSidebarTopics();
  renderCourseLocation();
  try {
    let data = window.MODULES_DATA?.[context.topic.archivo];
    if (!data) {
      const res = await fetch(context.topic.archivo);
      if (!res.ok) throw new Error('No se pudo cargar el subtema.');
      data = await res.json();
    }
    if (request !== topicLoadVersion) return;
    renderTopicContent(data, context.topic);
    // Las rutas se renderizan sin recargar: mostrar su comienzo al cambiar de subtema.
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (e) {
    if (request !== topicLoadVersion) return;
    document.getElementById('main-content').innerHTML = '<div class="edu-card"><h2>No se pudo abrir este subtema</h2><p>Vuelve a seleccionarlo en el menú para intentarlo otra vez.</p></div>';
    console.error('Error al cargar módulo:', e);
  }
}

// Renderizado del Contenido del Tema
function renderTopicContent(data, meta) {
  const main = document.getElementById('main-content');
  if (!main) return;

  if (data.lecciones) { LearningPath.render(data, main); return; }

  // Si es módulo de evaluación formativa
  if (meta.tipo === 'evaluacion' || data.secciones) {
    main.innerHTML = `<div id="eval-container"></div>`;
    QuizEngine.renderEvaluation(data, 'eval-container');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  let html = `
    <!-- Banner de Unidad -->
    <div class="unit-banner">
      <span class="unit-tag">${data.unidadTitulo}</span>
      <h2 class="unit-title">${data.titulo}</h2>
      <p style="font-size: 0.95rem; opacity: 0.95;">
        📖 Contenido alineado al Texto Oficial de Matemáticas 1.º BGU (Pág. ${data.paginasLibro})
      </p>
    </div>

  `;

  // Si tiene formato pedagógico didáctico tipo Baldor
  if (data.etapa1_saberesPrevios) {
    html += `
      <!-- ETAPA 1: SABERES PREVIOS -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🧠</span> ${data.etapa1_saberesPrevios.titulo}
          </div>
          <span class="edu-badge">Paso 1: Fundamentos</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          ${data.etapa1_saberesPrevios.introduccion}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
          ${data.etapa1_saberesPrevios.niveles.map(n => `
            <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 1.35rem; font-weight: 800; color: var(--primary);">$${n.simbolo}$</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${n.nombre}</span>
              </div>
              <p style="font-size: 0.85rem; margin-bottom: 0.5rem;">${n.historia}</p>
              <div style="background: var(--bg-card); padding: 0.5rem 0.75rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color);">
                $${n.ejemplos}$
              </div>
              <p style="font-size: 0.8rem; color: #dc2626;"><strong>⚠️ Límite:</strong> ${n.ojo}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ETAPA 2: EL MISTERIO DE LOS IRRACIONALES -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🔍</span> ${data.etapa2_conflictoCognitivo.titulo}
          </div>
          <span class="edu-badge">Paso 2: Conflicto Cognitivo</span>
        </div>
        <div class="pedagogic-box box-cognitive">
          <div class="pedagogic-icon">⚡</div>
          <div class="pedagogic-content">
            <h4>El problema histórico que desconcertó a los matemáticos:</h4>
            <p>${data.etapa2_conflictoCognitivo.historia}</p>
          </div>
        </div>
        <div class="math-formula-box">
          <span class="math-formula-tag">Teorema de Pitágoras</span>
          <div style="font-size: 1.35rem;">$$${data.etapa2_conflictoCognitivo.demostracionVisual}$$</div>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.7; margin: 0.75rem 0;">
          ${data.etapa2_conflictoCognitivo.explicacion}
        </p>
        <div class="theorem-card">
          <div class="theorem-title">💡 Conclusión Fundamental:</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">${data.etapa2_conflictoCognitivo.conclusion}</p>
        </div>
      </div>

      <!-- ETAPA 3: LA GRAN FAMILIA DE LOS REALES -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🌐</span> ${data.etapa3_conceptoCentral.titulo}
          </div>
          <span class="edu-badge">Paso 3: Definición Clara</span>
        </div>
        <p style="font-size: 1rem; line-height: 1.6;">
          <strong>Regla Didáctica:</strong> ${data.etapa3_conceptoCentral.reglaBaldor}
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
          <div class="math-formula-box">
            <span class="math-formula-tag">Unión de Conjuntos</span>
            <div style="font-size: 1.35rem;">$$${data.etapa3_conceptoCentral.formulaConjunto}$$</div>
          </div>
          <div class="math-formula-box">
            <span class="math-formula-tag">Inclusión Progresiva</span>
            <div style="font-size: 1.35rem;">$$${data.etapa3_conceptoCentral.inclusionExplicada}$$</div>
          </div>
        </div>
        <p style="background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; border-left: 3px solid var(--secondary);">
          <strong>Cómo leerlo fácilmente:</strong> ${data.etapa3_conceptoCentral.lecturaFacil}
        </p>
      </div>

      <!-- ETAPA 4: REGLAS DEL JUEGO CON SENTIDO COMÚN -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>⚙️</span> ${data.etapa4_reglasDelJuego.titulo}
          </div>
          <span class="edu-badge">Paso 4: Propiedades</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${data.etapa4_reglasDelJuego.propiedades.map(prop => `
            <div class="theorem-card">
              <div class="theorem-title">
                <span>📌</span> ${prop.nombre}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0.25rem 0;">${prop.significado}</p>
              <div class="math-formula-box" style="margin: 0.5rem 0; padding: 0.75rem;">
                <div style="font-size: 1.15rem;">$$${prop.formula}$$</div>
              </div>
              ${prop.ejemploSuma ? `<p style="font-size: 0.85rem;"><strong>Suma:</strong> $${prop.ejemploSuma}$</p>` : ''}
              ${prop.ejemploMult ? `<p style="font-size: 0.85rem;"><strong>Multiplicación:</strong> $${prop.ejemploMult}$</p>` : ''}
              ${prop.ejemplo ? `<p style="font-size: 0.85rem;"><strong>Ejemplo práctico:</strong> $${prop.ejemplo}$</p>` : ''}
              ${prop.trucoBaldor ? `<p style="font-size: 0.85rem; color: #1e40af; margin-top: 0.35rem; background: #eff6ff; padding: 0.5rem; border-radius: 4px;"><strong>💡 Truco didáctico:</strong> ${prop.trucoBaldor}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ETAPA 5: EJEMPLOS PROGRESIVOS -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>✍️</span> Ejemplos Resueltos Progresivos (De fácil a avanzado)
          </div>
          <span class="edu-badge">Paso 5: Dominio</span>
        </div>
        ${data.etapa5_ejemplosProgresivos.map((ej, idx) => `
          <div class="step-accordion open" id="ej-prog-${idx}">
            <div class="step-header" onclick="toggleAccordion('ej-prog-${idx}')">
              <span><strong>${ej.nivel}:</strong> ${ej.problema}</span>
              <span>▼</span>
            </div>
            <div class="step-body">
              <ol style="margin-left: 1.25rem; font-size: 0.9rem; line-height: 1.7;">
                ${ej.solucion.map(s => `<li>${s}</li>`).join('')}
              </ol>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (data.apertura) {
    html += `
    <!-- Apertura Pedagógica: Saberes Previos & Desequilibrio -->
    <div class="edu-card">
      <div class="edu-card-header">
        <div class="edu-card-title">
          <span>💡</span> Apertura y Contextualización
        </div>
        <span class="edu-badge">Ciclo de Aprendizaje ERCA</span>
      </div>

      <div class="pedagogic-box box-prior">
        <div class="pedagogic-icon">🧠</div>
        <div class="pedagogic-content">
          <h4>Saberes Previos</h4>
          <p>${data.apertura.saberesPrevios}</p>
        </div>
      </div>

      <div class="pedagogic-box box-cognitive">
        <div class="pedagogic-icon">⚡</div>
        <div class="pedagogic-content">
          <h4>Desequilibrio Cognitivo</h4>
          <p>${data.apertura.desequilibrioCognitivo}</p>
        </div>
      </div>

      <div class="pedagogic-box box-interdisciplinary">
        <div class="pedagogic-icon">🌐</div>
        <div class="pedagogic-content">
          <h4>Conexión con el Entorno y la Realidad</h4>
          <p>${data.apertura.contextoVidaReal}</p>
        </div>
      </div>
    </div>
  `;
  }

  // Render para Tema 1.1 clásico si existiera
  if (data.pilaresMatematicos) {
    html += `
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🏛️</span> Los Cuatro Pilares de la Matemática
          </div>
          <span class="edu-badge">Fundamento Estructural</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          ${data.pilaresMatematicos.map(p => `
            <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <h4 style="color: var(--primary); margin-bottom: 0.35rem;">${p.nombre}</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${p.descripcion}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🔢</span> Sistema de Números Reales y Cadena de Inclusión
          </div>
        </div>
        <div class="math-formula-box">
          <span class="math-formula-tag">Inclusión de Conjuntos</span>
          <div style="font-size: 1.35rem;">$$${data.conjuntosNumericos.cadenaInclusion}$$</div>
        </div>
        <div class="table-responsive">
          <table class="math-table">
            <thead>
              <tr>
                <th>Conjunto</th>
                <th>Nombre</th>
                <th>Elementos Notables</th>
                <th>Aplicación Cotidiana</th>
              </tr>
            </thead>
            <tbody>
              ${data.conjuntosNumericos.definiciones.map(c => `
                <tr>
                  <td><strong>$${c.simbolo}$</strong></td>
                  <td>${c.nombre}</td>
                  <td>$${c.elementos}$</td>
                  <td>${c.uso}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Propiedades Algebraicas de Campo -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>⚙️</span> ${data.estructuraAlgebraica.titulo}
          </div>
        </div>
        <h3 style="font-size: 1.05rem; color: var(--primary); margin-top: 0.5rem;">Propiedades de la Adición ($+$)</h3>
        <div class="table-responsive">
          <table class="math-table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Expresión Formal</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              ${data.estructuraAlgebraica.adicion.map(a => `
                <tr>
                  <td><strong>${a.propiedad}</strong></td>
                  <td>$${a.formula}$</td>
                  <td>${a.detalle}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <h3 style="font-size: 1.05rem; color: var(--primary); margin-top: 1.5rem;">Propiedades de la Multiplicación ($\\cdot$)</h3>
        <div class="table-responsive">
          <table class="math-table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Expresión Formal</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              ${data.estructuraAlgebraica.multiplicacion.map(m => `
                <tr>
                  <td><strong>${m.propiedad}</strong></td>
                  <td>$${m.formula}$</td>
                  <td>${m.detalle}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Aplicaciones Interdisciplinares -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🔬</span> Aplicaciones en Ingeniería y Ciencias
          </div>
          <span class="edu-badge">Texto Oficial MINEDUC Pág. 13</span>
        </div>
        ${data.aplicacionesInterdisciplinares.map(app => `
          <div class="theorem-card">
            <div class="theorem-title">
              <span>📐</span> ${app.area}: ${app.tema}
            </div>
            <div class="math-formula-box" style="margin: 0.5rem 0;">
              <div style="font-size: 1.15rem;">$$${app.formula}$$</div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted);">${app.descripcion}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Render para Tema 1.2 (Productos Notables & Gráficos Geométricos)
  if (data.productosNotables) {
    html += `
      <!-- Laboratorio Geométrico Dinámico -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>📐</span> Laboratorio Visual: Descomposición Geométrica de $(a+b)^2$
          </div>
          <span class="edu-badge">Modelo Interactivo</span>
        </div>
        <div class="geo-lab">
          <p style="font-size: 0.9rem; color: var(--text-muted);">
            Ajusta los deslizadores de los lados $a$ y $b$ para observar en tiempo real cómo el área total $(a+b)^2$ se subdivide rigurosamente en $a^2 + 2ab + b^2$:
          </p>
          <div class="geo-controls">
            <div class="slider-group">
              <label for="slider-a">Lado a: <span id="val-a">6</span></label>
              <input type="range" id="slider-a" min="2" max="9" value="6" step="0.5" oninput="updateGeoSquare()">
            </div>
            <div class="slider-group">
              <label for="slider-b">Lado b: <span id="val-b">3</span></label>
              <input type="range" id="slider-b" min="1" max="6" value="3" step="0.5" oninput="updateGeoSquare()">
            </div>
          </div>
          <div class="geo-svg-wrapper" id="geo-square-container"></div>
          <div class="geo-explanation" id="geo-square-calc">
            Calculando área...
          </div>
        </div>
      </div>

      <!-- Desglose de Productos Notables -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>🧩</span> Catálogo de Productos Notables y Factorización
          </div>
        </div>
        ${data.productosNotables.map((pn, idx) => `
          <div class="step-accordion open" id="pn-${idx}">
            <div class="step-header" onclick="toggleAccordion('pn-${idx}')">
              <span><strong>${pn.nombre}:</strong> $${pn.formula}$</span>
              <span>▼</span>
            </div>
            <div class="step-body">
              <div class="math-formula-box">
                <span class="math-formula-tag">Expansión Algebraica</span>
                <div style="font-size: 1.15rem;">$$${pn.demostracionAlgebraica}$$</div>
              </div>
              <p style="font-size: 0.9rem; line-height: 1.6;">
                <strong>Interpretación Geométrica:</strong> ${pn.interpretacionGeometrica}
              </p>
              ${pn.tipoVisual === 'cubo-binomio' ? `
                <div style="margin-top: 1rem; text-align: center;">
                  <h5 style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Visualización de los 8 cuerpos paralelepípedos en el cubo $(a+b)^3$:</h5>
                  <div class="geo-svg-wrapper" id="geo-cube-container"></div>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Ejemplos del Libro -->
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>✍️</span> Ejercicios Resueltos del Texto Oficial (Pág. 16-17)
          </div>
        </div>
        ${data.ejemplosLibro.map(ej => `
          <div class="theorem-card">
            <div class="theorem-title">${ej.titulo}</div>
            <p style="margin: 0.5rem 0; font-weight: 600;">${ej.problema}</p>
            <ul style="margin-left: 1.25rem; font-size: 0.9rem; line-height: 1.6;">
              ${ej.desarrollo.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
  }

  main.innerHTML = html;

  // Renderizar KaTeX
  if (window.MathRenderer) {
    window.MathRenderer.render(main);
  }

  // Si tiene gráfico interactivo de binomio al cuadrado
  if (document.getElementById('geo-square-container')) {
    updateGeoSquare();
  }
  // Si tiene gráfico de cubo
  if (document.getElementById('geo-cube-container')) {
    InteractiveGeometry.renderCubeIsometric('geo-cube-container');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateGeoSquare() {
  const a = parseFloat(document.getElementById('slider-a')?.value || 6);
  const b = parseFloat(document.getElementById('slider-b')?.value || 3);
  document.getElementById('val-a').textContent = a;
  document.getElementById('val-b').textContent = b;

  InteractiveGeometry.renderBinomialSquare('geo-square-container', a, b);

  const calcEl = document.getElementById('geo-square-calc');
  if (calcEl) {
    const a2 = (a * a).toFixed(2);
    const ab2 = (2 * a * b).toFixed(2);
    const b2 = (b * b).toFixed(2);
    const total = Math.pow(a + b, 2).toFixed(2);
    calcEl.innerHTML = `
      <strong>Comprobación del Área Total:</strong><br>
      $(a+b)^2 = (${a} + ${b})^2 = (${(a+b).toFixed(1)})^2 = \\mathbf{${total}}$<br>
      Suma de las 4 regiones: $a^2 + 2ab + b^2 = ${a2} + ${ab2} + ${b2} = \\mathbf{${total}}$ (Igualdad exacta)
    `;
    if (window.MathRenderer) window.MathRenderer.render(calcEl);
  }
}

function toggleAccordion(id) {
  const el = document.getElementById(id);
  el?.classList.toggle('open');
}

// Búsqueda por trimestre, tema, subtema y lección; todos los resultados son enlaces.
function setupSearch() {
  const input = document.getElementById('search-input');
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  input?.addEventListener('input', () => {
    const q = normalize(input.value.trim());
    if (!q) { renderSidebarTopics(); return; }
    document.getElementById('course-menu').open = true;
    const matches = [];
    curriculumData.trimestres.forEach(trim => trim.unidades.forEach(group => group.temas.forEach(topic => {
      const data = window.MODULES_DATA?.[topic.archivo];
      const text = [trim.nombre, group.titulo, topic.numero, topic.titulo, topic.descripcion, ...(data?.lecciones || []).map(l => l.titulo)].join(' ');
      if (normalize(text).includes(q)) matches.push({trim, group, topic});
    })));
    document.getElementById('topics-list').innerHTML = matches.length ? matches.map(({trim, group, topic}) => `<li><a href="#${topic.id}" class="topic-link"><span class="topic-link-num">${trim.nombre} · Tema ${group.numero} · ${topic.numero}</span><span class="topic-link-title">${topic.titulo}</span></a></li>`).join('') : `<li class="study-note">No se encontraron resultados para «${escapeText(input.value.trim())}».</li>`;
  });
}
