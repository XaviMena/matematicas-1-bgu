// Generador interactivo de geometría y productos notables SVG
const InteractiveGeometry = {
  renderBinomialSquare(containerId, aVal = 6, bVal = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scale = 25; // píxeles por unidad
    const a = aVal * scale;
    const b = bVal * scale;
    const total = a + b;
    const padding = 40;
    const width = total + padding * 2;
    const height = total + padding * 2;

    const svg = `
      <svg class="geo-svg" viewBox="0 0 ${width} ${height}" width="${Math.min(width, 420)}" height="${Math.min(height, 420)}">
        <!-- Definiciones y sombras -->
        <defs>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1"/>
          </filter>
        </defs>

        <g transform="translate(${padding}, ${padding})">
          <!-- Región a^2 (Azul) -->
          <rect x="0" y="0" width="${a}" height="${a}" class="geo-rect-a2" filter="url(#shadow)"/>
          <text x="${a / 2}" y="${a / 2}" class="geo-label">a² = ${(aVal * aVal).toFixed(1)}</text>

          <!-- Región ab superior derecha (Verde) -->
          <rect x="${a}" y="0" width="${b}" height="${a}" class="geo-rect-ab" filter="url(#shadow)"/>
          <text x="${a + b / 2}" y="${a / 2}" class="geo-label">ab = ${(aVal * bVal).toFixed(1)}</text>

          <!-- Región ab inferior izquierda (Verde) -->
          <rect x="0" y="${a}" width="${a}" height="${b}" class="geo-rect-ab" filter="url(#shadow)"/>
          <text x="${a / 2}" y="${a + b / 2}" class="geo-label">ab = ${(aVal * bVal).toFixed(1)}</text>

          <!-- Región b^2 inferior derecha (Ámbar) -->
          <rect x="${a}" y="${a}" width="${b}" height="${b}" class="geo-rect-b2" filter="url(#shadow)"/>
          <text x="${a + b / 2}" y="${a + b / 2}" class="geo-label">b² = ${(bVal * bVal).toFixed(1)}</text>

          <!-- Cotas superiores -->
          <line x1="0" y1="-12" x2="${a}" y2="-12" stroke="#2563eb" stroke-width="2"/>
          <text x="${a / 2}" y="-22" class="geo-label" fill="#2563eb">a = ${aVal}</text>

          <line x1="${a}" y1="-12" x2="${total}" y2="-12" stroke="#059669" stroke-width="2"/>
          <text x="${a + b / 2}" y="-22" class="geo-label" fill="#059669">b = ${bVal}</text>

          <!-- Cotas laterales izquierdas -->
          <line x1="-12" y1="0" x2="-12" y2="${a}" stroke="#2563eb" stroke-width="2"/>
          <text x="-25" y="${a / 2}" class="geo-label" fill="#2563eb">a</text>

          <line x1="-12" y1="${a}" x2="-12" y2="${total}" stroke="#059669" stroke-width="2"/>
          <text x="-25" y="${a + b / 2}" class="geo-label" fill="#059669">b</text>
        </g>
      </svg>
    `;

    container.innerHTML = svg;
  },

  renderCubeIsometric(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const svg = `
      <svg class="geo-svg" viewBox="0 0 460 360" width="420" height="320">
        <!-- Proyección isométrica esquemática del cubo (a+b)^3 dividido en 8 paralelepípedos -->
        <g transform="translate(230, 180)">
          <!-- Base cubo a^3 -->
          <polygon points="0,-60 80,-15 0,30 -80,-15" fill="#3b82f6" fill-opacity="0.3" stroke="#1d4ed8" stroke-width="2"/>
          <polygon points="-80,-15 0,30 0,110 -80,65" fill="#2563eb" fill-opacity="0.4" stroke="#1d4ed8" stroke-width="2"/>
          <polygon points="0,30 80,-15 80,65 0,110" fill="#1d4ed8" fill-opacity="0.5" stroke="#1d4ed8" stroke-width="2"/>
          <text x="0" y="20" class="geo-label" fill="#ffffff">a³ (Cubo mayor)</text>

          <!-- Bloque b^3 destacado superior -->
          <polygon points="80,-15 120,5 120,-35 80,-55" fill="#f59e0b" fill-opacity="0.6" stroke="#b45309" stroke-width="2"/>
          <polygon points="80,-55 120,-35 80,-15 40,-35" fill="#fbbf24" fill-opacity="0.7" stroke="#b45309" stroke-width="2"/>
          <text x="85" y="-35" class="geo-label" fill="#78350f" font-size="11">b³</text>

          <!-- Bloques rectangulares intermedios 3a^2b y 3ab^2 -->
          <polygon points="-80,-15 -40,-35 40,-35 0,-15" fill="#10b981" fill-opacity="0.3" stroke="#047857" stroke-width="1.5"/>
          <text x="-15" y="-25" class="geo-label" fill="#065f46" font-size="11">a²b</text>

          <polygon points="0,110 40,90 40,50 0,70" fill="#10b981" fill-opacity="0.35" stroke="#047857" stroke-width="1.5"/>
          <text x="20" y="80" class="geo-label" fill="#065f46" font-size="11">ab²</text>
        </g>
      </svg>
    `;
    container.innerHTML = svg;
  }
};

window.InteractiveGeometry = InteractiveGeometry;
