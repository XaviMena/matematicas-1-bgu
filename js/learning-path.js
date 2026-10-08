// Rutas de aprendizaje. Los resultados viven solo durante esta sesión de estudio.
const LearningPath = {
  data: null, main: null, current: 'inicio', answers: {}, selections: {}, revealed: new Set(), sessions: {},
  render(data, main) {
    if (this.data) this.sessions[this.data.id] = {current:this.current, answers:this.answers, selections:this.selections, revealed:this.revealed};
    const state=this.sessions[data.id] || {current:'inicio',answers:{},selections:{},revealed:new Set()};
    Object.assign(this,state);
    this.data = data; this.main = main;
    this.show(this.current);
  },
  show(id) {
    this.current = id;
    const data = this.data;
    const done = data.lecciones.filter(l => this.mastered(l.id)).length;
    this.main.innerHTML = `<div class="unit-banner"><span class="unit-tag">Tema ${data.temaNumero || 1} · Aprende a tu ritmo</span><h2 class="unit-title">${data.titulo}</h2><p>${data.introduccion}</p></div>
      ${this.route(id, done)}
      <div id="lesson-content"></div>`;
    const container = this.main.querySelector('#lesson-content');
    if (id === 'inicio') this.home(container);
    else if (id === 'cierre') this.final(container);
    else this.lesson(container, data.lecciones.find(l=>l.id===id) || data.lecciones[0]);
    this.main.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{this.show(b.dataset.go);this.main.querySelector('#lesson-content').scrollIntoView({behavior:'smooth',block:'start'});}));
    const bridge=this.main.querySelector('[data-bridge]');
    if(bridge)bridge.addEventListener('click',async()=>{
      const b=this.data.puenteAnterior;
      await loadTopic(b.tema);
      this.show(b.leccion);
      this.main.querySelector('#lesson-content').scrollIntoView({behavior:'smooth',block:'start'});
    });
    this.bindQuestions();
    if (window.MathRenderer) MathRenderer.render(this.main);
    if (id==='inicio') this.diagnosticSummary();
    if (id==='cierre') this.finalSummary();
  },
  route(id, done) {
    const labels=[['Operar con sentido','Signos y orden de las operaciones'],['Fracciones y decimales','Dos maneras de expresar una cantidad'],['Familias de números','Naturales, enteros y racionales'],['Raíces y números reales','Valores exactos y aproximaciones'],['Comparar en la recta','Ubicar, ordenar y comparar'],['Propiedades','Cambiar el orden y la agrupación'],['Opuesto e inverso','Deshacer sumas y productos'],['La distributiva','Un producto, varias partes']];
    return `<section class="path-shell" aria-label="Ruta de aprendizaje">
      <div class="route-heading"><div><span class="route-eyebrow">TU RUTA DE APRENDIZAJE</span><h3>Un paso a la vez</h3><p>Repasa tus bases y elige dónde continuar.</p></div><div class="route-counter"><strong id="route-percent">${Math.round(done/this.data.lecciones.length*100)}%</strong><span id="path-progress" aria-live="polite">${done} de ${this.data.lecciones.length} lecciones</span></div></div>
      <progress id="route-meter" max="${this.data.lecciones.length}" value="${done}" aria-label="Lecciones practicadas sin consultar soluciones"></progress>
      <nav class="path-nav" aria-label="Lecciones">
        <button class="route-bookend route-start" data-go="inicio" ${id==='inicio'?'aria-current="step"':''}><span class="bookend-icon" aria-hidden="true">◎</span><span><strong>Empieza aquí</strong><small>Descubre qué necesitas repasar</small></span><span class="route-arrow" aria-hidden="true">→</span></button>
        <div class="lesson-grid">${this.data.lecciones.map((l,i)=>`<button class="lesson-tile ${this.mastered(l.id)?'is-complete':''}" data-go="${l.id}" aria-label="${i+1}. ${l.titulo}" ${id===l.id?'aria-current="step"':''}>
          <span class="tile-number" aria-hidden="true">${this.mastered(l.id)?'✓':String(i+1).padStart(2,'0')}</span><span class="tile-copy"><span class="tile-phase">${l.fase || (i<2?'01 · PREPARA TUS BASES':i<5?'02 · COMPRENDE LOS NÚMEROS':'03 · APLICA LO APRENDIDO')}</span><strong>${l.tituloRuta || labels[i]?.[0] || l.titulo}</strong><small>${l.descripcionRuta || labels[i]?.[1] || l.meta}</small></span><span class="tile-status">${this.mastered(l.id)?'Practicada':id===l.id?'En esta lección':'Explorar'}</span><span class="tile-arrow" aria-hidden="true">↗</span></button>`).join('')}</div>
        <button class="route-bookend route-finish" data-go="cierre" ${id==='cierre'?'aria-current="step"':''}><span class="bookend-icon" aria-hidden="true">✓</span><span><strong>Comprueba lo aprendido</strong><small>Une las ideas con ${this.data.cierre.length} ejercicios de cierre</small></span><span class="route-arrow" aria-hidden="true">→</span></button>
      </nav><details class="route-explainer"><summary>¿Cómo se calcula mi progreso?</summary><p>Una lección cuenta cuando compruebas sus tres ejercicios correctamente sin abrir las soluciones. Practicar con apoyo también ayuda a aprender; después resuelve un ejemplo nuevo por tu cuenta. El progreso se reinicia al recargar la página.</p></details></section>`;
  },
  bridge() {
    const b=this.data.puenteAnterior;
    if(!b)return '';
    return `<div class="prerequisite"><strong>${b.titulo}</strong><p>${b.descripcion}</p><button class="btn btn-outline" data-bridge>Repasar el tema anterior →</button></div>`;
  },
  home(container) {
    container.innerHTML = `<section class="edu-card"><h3>Antes de empezar</h3><p>${this.data.objetivo || 'La meta es clasificar y comparar números reales, explicar las propiedades de las operaciones y usarlas en cálculos sencillos.'}</p><p>Prueba estas ${this.data.diagnostico.length} preguntas. No tienen nota ni tiempo límite. Una dificultad indica qué conviene repasar; puedes abrir cualquier lección cuando lo necesites.</p><p class="study-note">Tus respuestas se conservan mientras esta página siga abierta. Al recargar se inicia una sesión nueva. No necesitas registrar tu nombre.</p>${this.bridge()}<div class="question-list">${this.data.diagnostico.map((q,i)=>this.question(q,'diag',i)).join('')}</div><div id="diagnostic-summary" class="route-feedback" aria-live="polite"></div><button class="btn btn-primary" data-go="${this.data.lecciones[0].id}">Comenzar la primera lección →</button></section>`;
  },
  lesson(container,l) {
    const i=this.data.lecciones.indexOf(l);
    container.innerHTML = `<section class="edu-card"><div class="lesson-kicker">Lección ${i+1} de ${this.data.lecciones.length}</div><h3>${l.titulo}</h3><p><strong>Aprenderás a:</strong> ${l.meta}</p><p><strong>Te sirve para:</strong> ${l.paraQue}</p><div class="prerequisite"><strong>Antes necesitas:</strong><p>${l.bases.join(' ')}</p>${l.refuerzos.length?l.refuerzos.map(id=>`<button class="btn btn-outline" data-go="${id}">Repasar: ${this.data.lecciones.find(base=>base.id===id).titulo}</button>`).join(' '):'<p>Si una base todavía te cuesta, revisa la explicación y prueba los ejemplos de esta lección antes de avanzar.</p>'}</div>
      <h4>Vamos paso a paso</h4>${l.explicacion.map(p=>`<p>${p}</p>`).join('')}
      ${(l.bloques || []).map(b=>`<section class="learning-block"><h4>${b.titulo}</h4><p>${b.descripcion}</p><div class="worked-example"><p><strong>${b.problema}</strong></p><ol>${b.pasos.map(p=>`<li>${p}</li>`).join('')}</ol><p class="block-conclusion">${b.conclusion}</p></div></section>`).join('')}
      ${l.visual==='recta'?this.numberLine():''}${l.visual==='area'?this.area():''}
      ${l.id==='raices'?this.proof():''}
      ${l.ejemplo?`<div class="worked-example"><h4>Un ejemplo acompañado</h4><p>${l.ejemplo}</p><ol>${l.pasos.map(p=>`<li>${p}</li>`).join('')}</ol></div>`:''}
      ${(l.ejemplosExtra || []).map(e=>`<div class="worked-example"><h4>Otro ejemplo, un paso más</h4><p>${e.problema}</p><ol>${e.pasos.map(p=>`<li>${p}</li>`).join('')}</ol></div>`).join('')}
      <h4>Ahora te toca</h4><p>Elige una respuesta y compruébala. Si necesitas ayuda, abre la pista; puedes volver a intentarlo.</p><div class="question-list">${l.preguntas.map((q,j)=>this.question(q,l.id,j)).join('')}</div><div class="route-feedback" id="lesson-summary" aria-live="polite"></div>

      <div class="lesson-actions"><button class="btn btn-outline" data-go="${i===0?'inicio':this.data.lecciones[i-1].id}">← Volver</button><button class="btn btn-primary" data-go="${i===this.data.lecciones.length-1?'cierre':this.data.lecciones[i+1].id}">Continuar →</button></div></section>`;
    this.lessonSummary();
    const slider=container.querySelector('#number-point');
    if(slider) slider.addEventListener('input',()=>this.updateLine());
    container.querySelectorAll('[data-area]').forEach(el=>el.addEventListener('input',()=>this.updateArea()));
  },
  question(q,scope,i) {
    const key=`${scope}-${i}`, a=this.answers[key], selected=this.selections[key] ?? a?.selection;
    return `<fieldset class="practice-question" data-key="${key}" ${a?`data-result="${a.correct?'correct':'incorrect'}"`: ''} data-scope="${scope}" data-index="${i}"><legend>${i+1}. ${q.pregunta}</legend><div class="answer-options">${q.opciones.map((o,j)=>`<label><input type="radio" name="${key}" value="${j}" ${selected===j?'checked':''}> <span>${o}</span></label>`).join('')}</div><div class="question-actions"><button class="btn btn-primary" data-check>Comprobar</button><details><summary>Necesito una pista</summary><p>${q.pista}</p></details></div><p class="answer-feedback" role="status">${a?this.feedback(q,a):selected!==undefined?'Respuesta pendiente. Pulsa Comprobar para verificarla.':''}</p><details class="solution" ${this.revealed.has(key)?'open':''}><summary>Ver explicación completa</summary><p>${q.explicacion}</p><p class="study-note">Después de consultar la respuesta, practica también con otro ejemplo. Esta pregunta queda registrada como práctica con apoyo.</p></details></fieldset>`;
  },
  getQuestion(scope,i) {return scope==='diag'?this.data.diagnostico[i]:scope==='final'?this.data.cierre[i]:this.data.lecciones.find(l=>l.id===scope).preguntas[i];},
  feedback(q,a) {return a.correct?`${a.support?'Correcto con apoyo.':'Correcto.'} ${q.explicacion}`:`Revisa este paso: ${q.errores[a.selection]} Inténtalo de nuevo o consulta la pista.`;},
  bindQuestions() {
    this.main.querySelectorAll('.practice-question').forEach(el=>{
      const key=el.dataset.key, scope=el.dataset.scope, i=Number(el.dataset.index),q=this.getQuestion(scope,i);
      el.querySelector('[data-check]').addEventListener('click',()=>{
        const checked=el.querySelector('input:checked');
        if(!checked){el.querySelector('.answer-feedback').textContent='Elige una respuesta antes de comprobar.';return;}
        const selection=Number(checked.value);
        this.answers[key]={selection,correct:selection===q.correcta,support:this.revealed.has(key)};
        el.dataset.result=this.answers[key].correct?'correct':'incorrect';
        el.querySelector('.answer-feedback').innerHTML=this.feedback(q,this.answers[key]);
        MathRenderer.render(el.querySelector('.answer-feedback'));
        this.updateSummaries();
      });
      el.querySelectorAll('input').forEach(input=>input.addEventListener('change',()=>{
        const previous=this.selections[key] ?? this.answers[key]?.selection;
        this.selections[key]=Number(input.value);
        delete this.answers[key];
        delete el.dataset.result;
        el.querySelector('.answer-feedback').textContent=previous===undefined
          ? 'Respuesta seleccionada. Pulsa Comprobar para verificarla.'
          : 'Respuesta cambiada. Pulsa Comprobar para verificarla.';
        this.updateSummaries();
      }));
      const solution=el.querySelector('.solution');
      const recordSupport=()=>{
        this.revealed.add(key);
        if(this.answers[key]){
          this.answers[key].support=true;
          el.querySelector('.answer-feedback').innerHTML=this.feedback(q,this.answers[key]);
          MathRenderer.render(el.querySelector('.answer-feedback'));
        }
        this.updateSummaries();
      };
      solution.querySelector('summary').addEventListener('click',()=>{if(!solution.open)recordSupport();});
      solution.addEventListener('toggle',()=>{if(solution.open)recordSupport();});
    });
  },
  mastered(scope) {const l=this.data.lecciones.find(l=>l.id===scope);return l.preguntas.every((_,i)=>this.answers[`${scope}-${i}`]?.correct&&!this.answers[`${scope}-${i}`]?.support);},
  updateSummaries(){
    this.diagnosticSummary();this.lessonSummary();this.finalSummary();
    const done=this.data.lecciones.filter(l=>this.mastered(l.id)).length;
    this.main.querySelector('#path-progress').textContent=`${done} de ${this.data.lecciones.length} lecciones`;
    const bar=this.main.querySelector('#route-meter');
    bar.value=done;
    this.main.querySelector('#route-percent').textContent=`${Math.round(done/this.data.lecciones.length*100)}%`;
    this.main.querySelectorAll('.lesson-tile').forEach(b=>{
      const completed=this.mastered(b.dataset.go);
      b.classList.toggle('is-complete',completed);
      b.querySelector('.tile-status').textContent=completed?'Practicada':b.dataset.go===this.current?'En esta lección':'Explorar';
      b.querySelector('.tile-number').textContent=completed?'✓':String(this.data.lecciones.findIndex(l=>l.id===b.dataset.go)+1).padStart(2,'0');
    });
  },
  diagnosticSummary(){
    const el=this.main.querySelector('#diagnostic-summary');if(!el)return;
    const qs=this.data.diagnostico,answered=qs.filter((_,i)=>this.answers[`diag-${i}`]).length;
    const needs=[...new Set(qs.filter((_,i)=>this.answers[`diag-${i}`]&&(!this.answers[`diag-${i}`].correct||this.answers[`diag-${i}`].support)).map(q=>q.leccion))];
    el.innerHTML=`<strong>${answered} de ${qs.length} respuestas comprobadas.</strong> ${needs.length?'Te recomendamos reforzar: '+needs.map(id=>{const l=this.data.lecciones.find(l=>l.id===id);return `<button class="btn btn-outline" data-review="${id}">${l.titulo}</button>`;}).join(' '):answered===qs.length?'Estas bases están encaminadas. Continúa y explica tus procedimientos en la práctica.':'Completa las preguntas para obtener recomendaciones de repaso.'}`;
    el.querySelectorAll('[data-review]').forEach(b=>b.addEventListener('click',()=>this.show(b.dataset.review)));
  },
  lessonSummary(){
    const el=this.main.querySelector('#lesson-summary');if(!el)return;
    const l=this.data.lecciones.find(l=>l.id===this.current);if(!l)return;
    const correct=l.preguntas.filter((_,i)=>this.answers[`${l.id}-${i}`]?.correct).length;
    el.textContent=this.mastered(l.id)?'Has comprobado los ejercicios sin consultar sus respuestas. Explica con tus palabras cómo los resolviste antes de continuar.':`${correct} de ${l.preguntas.length} ejercicios con respuesta correcta. Puedes repasar y volver a intentarlo. Las respuestas consultadas cuentan como práctica con apoyo.`;
  },
  final(container){
    container.innerHTML=`<section class="edu-card"><h3>Comprueba lo aprendido</h3><p>${this.data.cierreIntroduccion || 'Estos seis ejercicios combinan las ideas del primer tema. Resuélvelos antes de abrir las explicaciones.'}</p><div class="question-list">${this.data.cierre.map((q,i)=>this.question(q,'final',i)).join('')}</div><div id="final-summary" class="route-feedback" aria-live="polite"></div><div class="worked-example"><h4>Explica tu razonamiento</h4>${(this.data.retosCierre || ['Escribe un número que sea entero, racional y real; explica cada pertenencia.','Inventa una suma y un producto donde convenga cambiar el orden. Explica por qué no puedes hacerlo libremente con una resta.','Dibuja un rectángulo dividido y escribe la distributiva que representa. Comprueba la igualdad con números.']).map((p,i)=>`<p>${i+1}. ${p}</p>`).join('')}</div><button class="btn btn-outline" data-go="inicio">Volver al diagnóstico</button></section>`;
  },
  finalSummary(){
    const el=this.main.querySelector('#final-summary');if(!el)return;
    const qs=this.data.cierre, n=qs.filter((_,i)=>this.answers[`final-${i}`]).length, correct=qs.filter((_,i)=>this.answers[`final-${i}`]?.correct).length;
    const needs=[...new Set(qs.filter((_,i)=>this.answers[`final-${i}`]&&(!this.answers[`final-${i}`].correct||this.answers[`final-${i}`].support)).map(q=>q.leccion))];
    el.innerHTML=`<strong>${n} de ${qs.length} comprobados; ${correct} correctos.</strong><p>${n<qs.length?'Quedan ejercicios pendientes.':needs.length?'Refuerza las ideas señaladas y resuelve un ejemplo nuevo.':'Ahora justifica tus respuestas con los retos de explicación.'}</p>${needs.map(id=>`<button class="btn btn-outline" data-review="${id}">Repasar: ${this.data.lecciones.find(l=>l.id===id).titulo}</button>`).join(' ')}`;
    el.querySelectorAll('[data-review]').forEach(b=>b.addEventListener('click',()=>this.show(b.dataset.review)));
  },
  numberLine(){return `<div class="visual-lab"><h4>Explora la recta</h4><p>Mueve el punto. A la derecha los valores aumentan; a la izquierda disminuyen.</p><svg viewBox="0 0 500 100" role="img" aria-label="Recta numérica de menos cinco a cinco"><line x1="30" y1="45" x2="470" y2="45" stroke="currentColor"/>${Array.from({length:11},(_,i)=>`<line x1="${30+i*44}" y1="40" x2="${30+i*44}" y2="50" stroke="currentColor"/><text x="${30+i*44}" y="75" text-anchor="middle" fill="currentColor">${i-5}</text>`).join('')}<circle id="line-dot" cx="250" cy="45" r="8" fill="#0d9488"/></svg><label for="number-point">Posición: <output id="point-value">0</output></label><input id="number-point" type="range" min="-5" max="5" step="0.5" value="0"><p id="point-description" aria-live="polite">El cero es el punto de referencia.</p></div>`;},
  updateLine(){const n=Number(this.main.querySelector('#number-point').value);this.main.querySelector('#point-value').textContent=n;this.main.querySelector('#line-dot').setAttribute('cx',250+n*44);this.main.querySelector('#point-description').textContent=n===0?'El cero es el punto de referencia.':`${n} está ${Math.abs(n)} unidades a la ${n<0?'izquierda':'derecha'} del cero.`;},
  area(){return `<div class="visual-lab"><h4>Un área, dos formas de calcular</h4><label for="area-height">Altura a <input id="area-height" data-area type="range" min="1" max="6" value="3"></label><label for="area-left">Base b <input id="area-left" data-area type="range" min="1" max="6" value="4"></label><label for="area-right">Base c <input id="area-right" data-area type="range" min="1" max="6" value="2"></label><svg viewBox="0 0 420 220" role="img" aria-label="Rectángulo dividido en dos partes con la misma altura"><rect id="area-r1" x="35" y="30" width="220" height="165" fill="#1e3a8a"/><rect id="area-r2" x="255" y="30" width="110" height="165" fill="#0d9488"/><text id="area-t1" x="145" y="115" text-anchor="middle" fill="white">ab = 12</text><text id="area-t2" x="310" y="115" text-anchor="middle" fill="white">ac = 6</text></svg><p id="area-result" aria-live="polite">a = 3, b = 4, c = 2. Área total: 3 × (4 + 2) = 18. Por partes: 12 + 6 = 18.</p></div>`;},
  updateArea(){const a=Number(this.main.querySelector('#area-height').value),b=Number(this.main.querySelector('#area-left').value),c=Number(this.main.querySelector('#area-right').value);const unit=Math.min(330/(b+c),165/a),w=b*unit,h=a*unit;
    this.main.querySelector('#area-r1').setAttribute('width',w);this.main.querySelector('#area-r2').setAttribute('x',35+w);this.main.querySelector('#area-r2').setAttribute('width',c*unit);
    for(const id of ['area-r1','area-r2'])this.main.querySelector('#'+id).setAttribute('height',h);
    const t1=this.main.querySelector('#area-t1'),t2=this.main.querySelector('#area-t2');t1.setAttribute('x',35+w/2);t2.setAttribute('x',35+w+c*unit/2);for(const t of [t1,t2])t.setAttribute('y',30+h/2+5);
    t1.textContent=`ab`;t2.textContent=`ac`;
    this.main.querySelector('#area-result').textContent=`a = ${a}, b = ${b}, c = ${c}. Área total: ${a} × (${b} + ${c}) = ${a*(b+c)}. Por partes: ${a*b} + ${a*c} = ${a*(b+c)}.`;
  },
  proof(){return `<details class="learning-extension"><summary>Profundiza: por qué √2 no es una fracción de enteros</summary><p>Base adicional: un entero es par si es múltiplo de 2; si es impar, su cuadrado es impar. Por eso, si un cuadrado es par, su base también es par.</p><ol><li>Supón que $\\sqrt2=p/q$, con enteros positivos y una fracción ya simplificada.</li><li>Al cuadrar: $p^2=2q^2$. Entonces $p^2$ es par y $p$ también: escribe $p=2k$.</li><li>Sustituye: $4k^2=2q^2$, de donde $q^2=2k^2$. Así $q$ también es par.</li><li>Pero si p y q son pares, la fracción se puede simplificar entre 2. Esto contradice que estaba simplificada.</li><li>La suposición no puede cumplirse: √2 es irracional.</li></ol><p>Si este razonamiento es nuevo para ti, léelo paso a paso y comprueba cada igualdad antes de continuar.</p></details>`;}
};
window.LearningPath = LearningPath;
