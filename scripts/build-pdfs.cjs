// Ejecutar con Node y Playwright disponibles (npm install --no-save playwright).
// Genera guías completas desde los mismos JSON que utiliza la página.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const curriculum = JSON.parse(fs.readFileSync(path.join(root, 'data/curriculum.json')));
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const p = text => text ? `<p>${esc(text)}</p>` : '';
const list = items => `<ol>${(items || []).map(x => `<li>${esc(x)}</li>`).join('')}</ol>`;
const example = (title, problem, steps) => `<div class="example"><h4>${esc(title)}</h4>${p(problem)}${list(steps)}</div>`;
const css = `
@page { size: A4; margin: 18mm 17mm 19mm; }
* { box-sizing: border-box; }
body { font: 10.5pt/1.5 Arial, sans-serif; color: #172c43; margin: 0; }
h1 { font-size: 30pt; line-height: 1.15; color: #163e65; }
h2 { font-size: 20pt; line-height: 1.25; color: #163e65; }
h3 { font-size: 16pt; line-height: 1.3; color: #163e65; }
h4 { font-size: 11.5pt; margin: 10pt 0 5pt; color: #17665c; }
h2,h3,h4 { break-after: avoid; }
p { margin: 6pt 0; orphans: 3; widows: 3; }
li { margin: 4pt 0; } ol { padding-left: 19pt; }
.cover,.module,.answers { break-before: page; }
.lesson,.closing { margin-top: 22pt; }
.cover { padding-top: 32mm; }
.eyebrow { color: #17665c; font-size: 11pt; text-transform: uppercase; letter-spacing: 1pt; break-after: avoid; }
.note,.example { background: #f0f6f7; border-left: 3pt solid #278778; padding: 8pt 12pt; margin: 12pt 0; }
.question { break-inside: avoid; padding: 6pt 0; border-bottom: 0.5pt solid #dce6ea; }
.options { margin: 5pt 0 5pt 12pt; }
.options p { margin: 3pt 0; }
.space { height: 4mm; }
.answers { font-size: 9.5pt; line-height: 1.4; }
.answers .question { padding: 4pt 0; }
.example { break-inside: avoid; }
.katex { font-size: 1.05em; }
.visual-lab { break-inside: avoid; margin: 12pt 0; }
svg { display: block; width: 105mm; max-height: 105mm; margin: 8pt auto; }
.visual-lab input,.visual-lab label,.visual-lab select,.visual-lab output { display: none; }
.visual-lab p { font-size: 9.5pt; }
.system-legend { display: flex; gap: 12pt; flex-wrap: wrap; font-size: 9pt; }
.learning-extension { font-size: 9.5pt; }
summary { font-weight: bold; }
a { color: #17665c; text-decoration: none; }
`;

async function main() {
  const browser = await chromium.launch({headless: true, channel: process.env.PDF_BROWSER || 'chrome'});
  const catalog = {};
  fs.mkdirSync(path.join(root, 'assets/pdf'), {recursive: true});
  try {
    for (const trimester of curriculum.trimestres) for (const group of trimester.unidades) {
      if (!group.temas.length) continue;
      const page = await browser.newPage();
      let solutions = [];
      function questions(qs, label) {
        return (qs || []).map((q, i) => {
          const key = `${label} · ${i + 1}`;
          solutions.push(`<div class="question"><strong>${esc(key)}</strong>${p(`Respuesta: ${String.fromCharCode(65 + q.correcta)}. ${q.opciones[q.correcta]}`)}${p(q.explicacion || q.reparacion)}${q.pista ? p(`Pista: ${q.pista}`) : ''}</div>`);
          return `<div class="question"><strong>${i + 1}. ${esc(q.pregunta)}</strong><div class="options">${q.opciones.map((o,j) => p(`${String.fromCharCode(65+j)}. ${o}`)).join('')}</div><div class="space"></div></div>`;
        }).join('');
      }
      let html = `<section class="cover"><p class="eyebrow">${esc(curriculum.curso)} · ${esc(trimester.nombre)}</p><h1>Tema ${group.numero}<br>${esc(group.titulo)}</h1>${p(`Período ${curriculum.periodo}`)}<div class="note"><strong>Guía para aprender y practicar</strong><p>Lee las explicaciones, resuelve en tu cuaderno y consulta las soluciones al final. El diagnóstico y el cierre no tienen nota ni tiempo límite.</p><p>Los gráficos son ejemplos fijos. En la página puedes explorar sus controles y recibir retroalimentación.</p></div><h3>Tu recorrido</h3>${list(group.temas.map(t => `${t.numero} · ${t.titulo}`))}${p('Contenidos y ejercicios adaptados del sitio educativo. El texto escolar orienta la selección de contenidos; esta guía no es una reproducción del libro.')}</section>`;
      for (const topic of group.temas) {
        const data = JSON.parse(fs.readFileSync(path.join(root, topic.archivo)));
        html += `<section class="module"><p class="eyebrow">Subtema ${esc(topic.numero)}</p><h2>${esc(data.titulo)}</h2>${p(data.introduccion)}${p(data.objetivo)}${p(`Páginas de referencia del texto: ${data.paginasLibro}.`)}${data.puenteAnterior ? `<div class="note"><strong>${esc(data.puenteAnterior.titulo)}</strong>${p(data.puenteAnterior.descripcion)}${p('Busca la lección de repaso en el tema indicado o usa el enlace de la página.')}</div>` : ''}<h3>Antes de empezar</h3>${questions(data.diagnostico, `${topic.numero} Diagnóstico`)}</section>`;
        for (const [i, l] of data.lecciones.entries()) {
          html += `<section class="lesson"><p class="eyebrow">Subtema ${topic.numero} · Lección ${i+1}</p><h3>${esc(l.titulo)}</h3>${p(`Aprenderás a: ${l.meta}`)}${p(`Te sirve para: ${l.paraQue}`)}<div class="note"><strong>Antes necesitas</strong>${p(l.bases.join(' '))}${(l.repasos || []).map(r=>p(`Repasar: ${r.titulo}`)).join('')}${(l.refuerzos || []).map(id=>p(`Repasar: ${data.lecciones.find(base=>base.id===id).titulo}`)).join('')}</div>`;
          if (l.verificacion) html += `<h4>${esc(l.verificacion.titulo)}</h4>${p('Comprueba estas bases antes de continuar. Si necesitas ayuda, consulta la reparación en las soluciones y vuelve a intentarlo.')}${questions(l.verificacion.preguntas, `${topic.numero} ${l.titulo} · Bases`)}`;
          html += `<h4>Vamos paso a paso</h4>${l.explicacion.map(p).join('')}${(l.bloques || []).map(b=>`${p(b.descripcion)}${example(b.titulo,b.problema,b.pasos)}${p(b.conclusion)}`).join('')}`;
          if (l.visual) html += `<div data-visual="${esc(l.visual)}"></div>`;
          if (l.id==='raices') html += '<div data-proof></div>';
          if (l.ejemplo) html += example('Un ejemplo acompañado',l.ejemplo,l.pasos);
          html += (l.ejemplosExtra || []).map(e=>example('Otro ejemplo, un paso más',e.problema,e.pasos)).join('');
          if (l.actividad) {
            html += `<div class="note"><h4>Completa en tu cuaderno</h4>${p(l.actividad.consigna)}<div class="space"></div></div>`;
            solutions.push(`<h4>${topic.numero} · ${esc(l.titulo)} · Actividad de cuaderno</h4>${p(l.actividad.solucion)}`);
          }
          html += `<h4>Ahora te toca</h4>${p(l.practicaNota)}${questions(l.preguntas,`${topic.numero} ${l.titulo} · Práctica`)}</section>`;
        }
        html += `<section class="closing"><p class="eyebrow">Subtema ${topic.numero}</p><h3>Comprueba lo aprendido</h3>${p(data.cierreIntroduccion || 'Resuelve estos ejercicios antes de consultar las soluciones. Explica tus procedimientos en el cuaderno.')}${questions(data.cierre,`${topic.numero} Cierre`)}<h4>Explica tu razonamiento</h4>${list(data.retosCierre || ['Escribe un número entero, racional y real; explica cada pertenencia.','Inventa una suma y un producto donde convenga cambiar el orden. Explica por qué no funciona libremente en una resta.','Dibuja un rectángulo dividido y escribe la distributiva que representa. Comprueba con números.'])}</section>`;
      }
      html += `<section class="answers"><p class="eyebrow">Consulta después de intentarlo</p><h2>Soluciones y pistas</h2>${p('Compara el procedimiento, identifica el paso que debes revisar y resuelve un ejemplo nuevo sin mirar la solución.')}${solutions.join('')}</section>`;
      await page.setContent(`<!doctype html><html lang="es"><meta charset="utf-8"><title>Tema ${group.numero}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"><style>${css}</style><body>${html}</body></html>`);
      await page.addScriptTag({path: path.join(root,'js/learning-path.js')});
      await page.addScriptTag({path: path.join(root,'js/systems-explorer.js')});
      await page.evaluate(() => {
        document.querySelectorAll('[data-visual]').forEach(el => {
          const type=el.dataset.visual;
          if(type==='recta') { el.innerHTML=LearningPath.numberLine(); el.querySelector('h4').textContent='La recta numérica'; el.querySelector('p').textContent='A la derecha los valores aumentan; a la izquierda disminuyen. El punto marca el cero.'; }
          if(type==='area') el.innerHTML=LearningPath.area();
          if(type==='sistemas') {
            el.innerHTML=SystemsExplorer.render();
            el.querySelector('#system-x').value=2;
            SystemsExplorer.update(el);
            el.querySelectorAll('svg text').forEach(text=>{if(text.textContent.startsWith('Cruce')) text.remove();});
            el.querySelector('h4').textContent='Dos condiciones en el plano';
            el.querySelector('p').textContent='Azul: x + y = 5. Verde discontinua: 2x + y = 7. El cruce (2,3) cumple las dos condiciones.';
            el.querySelector('#system-conclusion').textContent='Una solución: (2,3). Si la segunda ecuación fuese x + y = 7, las rectas serían paralelas y no habría solución. Si fuese 2x + 2y = 10, coincidirían y habría infinitas soluciones.';
          }
        });
        document.querySelectorAll('[data-proof]').forEach(el=>{el.innerHTML=LearningPath.proof();el.querySelector('details').open=true;});
      });
      await page.addScriptTag({url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js'});
      await page.addScriptTag({url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'});
      await page.evaluate(async () => {
        renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:true});
        await document.fonts.ready;
        if(document.querySelector('.katex-error')) throw new Error('Fórmula sin renderizar');
      });
      const filename=`trimestre-${trimester.numero}-tema-${group.numero}.pdf`;
      const output=path.join(root,'assets/pdf',filename);
      await page.pdf({path:output,format:'A4',printBackground:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:`<div style="font:8px Arial;width:100%;padding:0 17mm;color:#54677a;display:flex;justify-content:space-between;gap:12px"><span>Matemáticas 1.º BGU · Tema ${group.numero}</span><span>Docente: Xavier Mena Paredes</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`});
      const hash=crypto.createHash('sha256').update(fs.readFileSync(output)).digest('hex').slice(0,12);
      catalog[group.id]={url:`assets/pdf/${filename}?v=${hash}`,filename};
      console.log(`${filename}: ${solutions.length} soluciones, ${fs.statSync(output).size} bytes`);
      await page.close();
    }
    fs.writeFileSync(path.join(root,'js/pdf-catalog.js'),'// Generado por scripts/build-pdfs.cjs\nwindow.PDF_CATALOG = '+JSON.stringify(catalog,null,2)+';\n');
  } finally { await browser.close(); }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
