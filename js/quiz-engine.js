// Motor interactivo de evaluación formativa y comprobador de respuestas
const QuizEngine = {
  renderEvaluation(evalData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="edu-card">
        <div class="edu-card-header">
          <div class="edu-card-title">
            <span>📝</span> ${evalData.titulo}
          </div>
          <span class="edu-badge">Páginas del libro: ${evalData.paginasLibro}</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          Pon a prueba tus conocimientos resolviendo los ejercicios propuestos en el texto oficial. Puedes comprobar cada solución paso a paso.
        </p>
    `;

    evalData.secciones.forEach((sec, sIdx) => {
      html += `
        <div style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.75rem;">
            Ejercicio ${sec.numero}. ${sec.enunciado}
          </h3>
      `;

      if (sec.datos) {
        html += `
          <div class="pedagogic-box box-cognitive" style="margin-bottom: 1rem;">
            <div class="pedagogic-icon">📌</div>
            <div class="pedagogic-content">
              <h4>Datos de referencia:</h4>
              <p>${sec.datos}</p>
            </div>
          </div>
        `;
      }

      // Si es tabla comparativa
      if (sec.filas) {
        html += `
          <div class="table-responsive">
            <table class="math-table">
              <thead>
                <tr>
                  <th>Número Real</th>
                  <th>Truncado a Centésimas</th>
                  <th>Redondeado a Centésimas</th>
                  <th>Truncado a Milésimas</th>
                  <th>Redondeado a Milésimas</th>
                </tr>
              </thead>
              <tbody>
        `;
        sec.filas.forEach(f => {
          html += `
            <tr>
              <td><strong>${f.numero}</strong></td>
              <td>${f.truncadoCent}</td>
              <td><span class="badge-verified">${f.redondeadoCent}</span></td>
              <td>${f.truncadoMil}</td>
              <td><span class="badge-verified">${f.redondeadoMil}</span></td>
            </tr>
          `;
        });
        html += `
              </tbody>
            </table>
          </div>
        `;
      }

      // Si son literales
      if (sec.ejercicios) {
        sec.ejercicios.forEach((ej, eIdx) => {
          const uniqueId = `sol-${sIdx}-${eIdx}`;
          html += `
            <div class="eval-card">
              <div class="eval-header">
                <div>
                  <span class="eval-literal">${ej.literal}</span>
                  <span style="font-size: 1.05rem;">$${ej.expresion}$</span>
                </div>
                <button class="btn btn-outline" onclick="QuizEngine.toggleSolution('${uniqueId}', this)">
                  👁️ Ver Solución
                </button>
              </div>

              <div id="${uniqueId}" class="eval-solution" style="display: none;">
                <p><strong>Resultado oficial:</strong> ${ej.cuatroDecimales ? `$4\\text{ dec: } ${ej.cuatroDecimales} \\quad | \\quad 8\\text{ dec: } ${ej.ochoDecimales}$` : ''} ${ej.resultado ? `$${ej.resultado}$` : ''} ${ej.opuesto ? `$${ej.opuesto}$` : ''} ${ej.inverso ? `$${ej.inverso}$` : ''}</p>
                ${ej.explicacion ? `<p style="margin-top: 0.4rem; color: var(--text-muted);">${ej.explicacion}</p>` : ''}
                ${ej.pasos ? `
                  <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
                    ${ej.pasos.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                ` : ''}
                ${ej.demostracion ? `
                  <div style="margin-top: 0.5rem;">
                    <strong>Demostración formal:</strong>
                    <ol style="margin-left: 1.25rem; margin-top: 0.25rem;">
                      ${ej.demostracion.map(d => `<li>${d}</li>`).join('')}
                    </ol>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        });
      }

      html += `</div>`;
    });

    html += `</div>`;
    container.innerHTML = html;

    if (window.MathRenderer) {
      window.MathRenderer.render(container);
    }
  },

  toggleSolution(elementId, btn) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (el.style.display === 'none') {
      el.style.display = 'block';
      btn.innerHTML = '🙈 Ocultar Solución';
      btn.classList.add('btn-primary');
      btn.classList.remove('btn-outline');
    } else {
      el.style.display = 'none';
      btn.innerHTML = '👁️ Ver Solución';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline');
    }
  }
};

window.QuizEngine = QuizEngine;
