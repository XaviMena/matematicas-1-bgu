// Representación de tres sistemas: las coordenadas y ecuaciones permanecen visibles.
const SystemsExplorer = {
  render() {
    return `<div class="visual-lab system-explorer"><h4>Explora dos condiciones en el plano</h4><p>La recta azul representa x + y = 5. Cambia la segunda condición y mueve el punto sobre la primera. Comprueba si también pertenece a la segunda.</p>
      <label for="system-case">Segunda condición</label><select id="system-case"><option value="unique">2x + y = 7 · rectas que se cruzan</option><option value="parallel">x + y = 7 · rectas paralelas</option><option value="same">2x + 2y = 10 · la misma recta</option></select>
      <div class="system-legend"><span>Azul continua: primera ecuación</span><span>Verde discontinua: segunda ecuación</span></div>
      <svg id="systems-plot" viewBox="0 0 500 500" role="img" aria-label="Plano cartesiano con dos rectas y un punto móvil"></svg>
      <label for="system-x">Coordenada x del punto: <output id="system-x-value">0</output></label><input id="system-x" type="range" min="-1" max="6" step="0.5" value="0">
      <p id="system-check" aria-live="polite"></p><p id="system-conclusion"></p></div>`;
  },
  bind(container) {
    if (!container.querySelector('#systems-plot')) return;
    container.querySelector('#system-case').addEventListener('change', () => this.update(container));
    container.querySelector('#system-x').addEventListener('input', () => this.update(container));
    this.update(container);
  },
  update(container) {
    const mode = container.querySelector('#system-case').value;
    const x = Number(container.querySelector('#system-x').value), y = 5-x;
    const px = n => 110+40*n, py = n => 390-40*n;
    const secondY = n => mode==='unique'?7-2*n:mode==='parallel'?7-n:5-n;
    let grid = '';
    for (let n=-2;n<=8;n++) {
      grid += `<line x1="${px(n)}" y1="30" x2="${px(n)}" y2="470" stroke="currentColor" opacity=".12"/><line x1="30" y1="${py(n)}" x2="470" y2="${py(n)}" stroke="currentColor" opacity=".12"/><text x="${px(n)}" y="410" text-anchor="middle" fill="currentColor" font-size="12">${n}</text>${n===0?'':`<text x="96" y="${py(n)+4}" text-anchor="end" fill="currentColor" font-size="12">${n}</text>`}`;
    }
    container.querySelector('#systems-plot').innerHTML = `<title>${mode==='unique'?'Una solución: (2,3)':mode==='parallel'?'Rectas paralelas: sin solución':'Rectas coincidentes: infinitas soluciones'}</title><defs><clipPath id="system-clip"><rect x="30" y="30" width="440" height="440"/></clipPath></defs>${grid}<path d="M30 390H475 M110 470V25" stroke="currentColor" fill="none"/><text x="477" y="382" fill="currentColor">x</text><text x="120" y="25" fill="currentColor">y</text><g clip-path="url(#system-clip)"><line x1="${px(-2)}" y1="${py(7)}" x2="${px(9)}" y2="${py(-4)}" stroke="#2563eb" stroke-width="4"/><line x1="${px(-2)}" y1="${py(secondY(-2))}" x2="${px(9)}" y2="${py(secondY(9))}" stroke="#0d9488" stroke-width="3" stroke-dasharray="9 6"/>${mode==='unique'?`<circle cx="${px(2)}" cy="${py(3)}" r="6" fill="#0d9488"/><text x="${px(2)+12}" y="${py(3)+24}" fill="currentColor" font-size="14">Cruce (2, 3)</text>`:''}<circle cx="${px(x)}" cy="${py(y)}" r="8" fill="#2563eb" stroke="var(--bg-card)" stroke-width="2"/><text x="${px(x)+12}" y="${py(y)-12}" fill="currentColor" font-size="14">(${x}, ${y})</text></g>`;
    const lhs = mode==='unique'?2*x+y:mode==='parallel'?x+y:2*x+2*y;
    const rhs = mode==='unique'?7:mode==='parallel'?7:10;
    const calculation = mode==='unique'?`2 × (${x}) + (${y})`:mode==='parallel'?`(${x}) + (${y})`:`2 × (${x}) + 2 × (${y})`;
    container.querySelector('#system-x-value').textContent=x;
    container.querySelector('#system-check').textContent=`Punto (${x}, ${y}). Primera: (${x}) + (${y}) = 5, se cumple. Segunda: ${calculation} = ${lhs}; ${lhs===rhs?'sí':'no'} coincide con ${rhs}. ${lhs===rhs?'El punto cumple ambas condiciones.':'El punto no resuelve el sistema.'}`;
    container.querySelector('#system-conclusion').textContent=mode==='unique'?'Las rectas se cruzan una sola vez: (2,3) es la única solución. Mueve x hasta 2 y compruébalo.':mode==='parallel'?'Las rectas son paralelas distintas. Ningún punto de la primera cumple la segunda: no hay solución.':'Las rectas coinciden. La segunda ecuación es el doble de la primera: todos los puntos de esta recta cumplen ambas; hay infinitas soluciones.';
  }
};
window.SystemsExplorer = SystemsExplorer;
