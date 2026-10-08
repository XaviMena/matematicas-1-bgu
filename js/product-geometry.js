// Modelos de áreas y volúmenes: las longitudes del dibujo siempre son positivas.
const ProductGeometry = {
  render(type) {
    const difference=['binom-difference','binom-conjugates'].includes(type);
    return `<div class="visual-lab product-lab" data-product="${type}"><h4>${type==='binom-cube'?'Un cubo, ocho prismas':'La fórmula se puede ver'}</h4><p>${difference?'En este dibujo usamos a > b > 0.':'Las letras de este dibujo representan longitudes positivas.'}</p>
      <div class="product-controls"><label for="product-a">${type==='binom-rectangle'?'x':'a'} = <output id="product-a-value">4</output><input id="product-a" type="range" min="${difference?3:2}" max="8" value="4" step="1"></label><label for="product-b">b = <output id="product-b-value">2</output><input id="product-b" type="range" min="1" max="${difference?3:5}" value="2" step="1"></label>${['binom-rectangle','factor-area'].includes(type)?'<label for="product-c">c = <output id="product-c-value">3</output><input id="product-c" type="range" min="1" max="5" value="3" step="1"></label>':''}</div>
      <div id="product-drawing"></div><p id="product-result" aria-live="polite"></p></div>`;
  },
  bind(container) {
    const lab=container.querySelector('[data-product]');if(!lab)return;
    lab.querySelectorAll('input').forEach(input=>input.addEventListener('input',()=>this.update(lab)));
    this.update(lab);
  },
  rect(x,y,w,h,fill,label) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="var(--bg-card)" stroke-width="2"/>${label?`<text x="${x+w/2}" y="${y+h/2+4}" text-anchor="middle" fill="white" font-size="14" font-weight="600">${label}</text>`:''}`;
  },
  svg(content,label) {return `<svg viewBox="0 0 440 320" role="img" aria-label="${label}">${content}</svg>`;},
  text(x,y,t) {return `<text x="${x}" y="${y}" text-anchor="middle" fill="currentColor" font-size="13">${t}</text>`;},
  squareParts(x,y,a,b,s,labels=['a²','ab','ab','b²']) {
    return this.rect(x,y,a*s,a*s,'#1e3a8a',labels[0])+this.rect(x+a*s,y,b*s,a*s,'#0d9488',labels[1])+this.rect(x,y+a*s,a*s,b*s,'#0d9488',labels[2])+this.rect(x+a*s,y+a*s,b*s,b*s,'#a16207',labels[3]);
  },
  update(lab) {
    const type=lab.dataset.product, a=Number(lab.querySelector('#product-a').value),bInput=lab.querySelector('#product-b');
    if(['binom-difference','binom-conjugates'].includes(type)){bInput.max=a-1;if(Number(bInput.value)>=a)bInput.value=a-1;}
    const b=Number(bInput.value), c=Number(lab.querySelector('#product-c')?.value || 3);
    lab.querySelector('#product-a-value').textContent=a;lab.querySelector('#product-b-value').textContent=b;if(lab.querySelector('#product-c-value'))lab.querySelector('#product-c-value').textContent=c;
    let drawing='', result='';
    if(type==='binom-square') {
      const s=240/(a+b),x=85,y=40;
      drawing=this.svg(this.squareParts(x,y,a,b,s)+this.text(x+a*s/2,25,`a = ${a}`)+this.text(x+a*s+b*s/2,25,`b = ${b}`)+this.text(205,305,'Dos rectángulos ab: no olvides ninguno.'),'Cuadrado dividido en a², dos rectángulos ab y b²');
      result=`(${a} + ${b})² = ${(a+b)**2}. Las partes: ${a*a} + ${a*b} + ${a*b} + ${b*b} = ${(a+b)**2}.`;
    } else if(type==='binom-difference') {
      const s=240/a,x=85,y=35,remaining=(a-b)*s;
      drawing=this.svg(this.rect(x,y,remaining,remaining,'#1e3a8a','(a−b)²')+this.rect(x+remaining,y,b*s,remaining,'#be6174','')+this.rect(x,y+remaining,remaining,b*s,'#be6174','')+this.rect(x+remaining,y+remaining,b*s,b*s,'#a16207','b²')+this.text(205,300,'Rojo: tiras retiradas. Ámbar: esquina compartida.'),'Cuadrado de lado a con dos tiras de ancho b y su esquina común');
      result=`a = ${a}, b = ${b}. (${a} − ${b})² = ${(a-b)**2}. Retira dos tiras de ${a*b} y recupera la esquina ${b*b}: ${a*a} − ${2*a*b} + ${b*b} = ${(a-b)**2}.`;
    } else if(type==='binom-conjugates') {
      const s=165/(a+b),h=(a-b)*s;
      const left=this.rect(25,50,a*s,h,'#1e3a8a','a(a−b)')+this.rect(25,50+h,(a-b)*s,b*s,'#0d9488','b(a−b)')+`<rect x="${25+(a-b)*s}" y="${50+h}" width="${b*s}" height="${b*s}" fill="none" stroke="currentColor" stroke-dasharray="4"/>`;
      const right=this.rect(220,70,a*s,h,'#1e3a8a','a(a−b)')+this.rect(220+a*s,70,b*s,h,'#0d9488','');
      drawing=this.svg(left+right+this.text(95,30,'Quita la esquina b²')+this.text(310,40,'Gira y une las partes')+this.text(310,70+h+22,'Base a+b; altura a−b')+this.text(205,295,'Misma área antes y después de reorganizar.'),'Una figura en L reorganizada como un rectángulo');
      result=`${a}² − ${b}² = ${a*a-b*b}. El rectángulo tiene lados ${a+b} y ${a-b}: (${a} + ${b})(${a} − ${b}) = ${(a+b)*(a-b)}.`;
    } else if(type==='binom-rectangle') {
      const s=Math.min(290/(a+b),230/(a+c)),x=60,y=45;
      drawing=this.svg(this.rect(x,y,a*s,a*s,'#1e3a8a','x²')+this.rect(x+a*s,y,b*s,a*s,'#0d9488','bx')+this.rect(x,y+a*s,a*s,c*s,'#0d9488','cx')+this.rect(x+a*s,y+a*s,b*s,c*s,'#a16207','bc')+this.text(210,25,`Base: x+b = ${a+b}`)+this.text(210,310,`Altura: x+c = ${a+c}`),'Rectángulo dividido en cuatro productos');
      result=`x = ${a}, b = ${b}, c = ${c}. (${a}+${b})(${a}+${c}) = ${(a+b)*(a+c)}. Por partes: ${a*a} + ${b*a} + ${c*a} + ${b*c} = ${(a+b)*(a+c)}.`;
    } else if(type==='factor-area') {
      const s=Math.min(290/(b+c),200/a),x=60,y=55;
      drawing=this.svg(this.rect(x,y,b*s,a*s,'#1e3a8a','ab')+this.rect(x+b*s,y,c*s,a*s,'#0d9488','ac')+this.text(200,30,`Altura común a = ${a}`)+this.text(200,y+a*s+30,`Base total b+c = ${b+c}`),'Dos áreas con la misma altura reagrupadas en un producto');
      result=`a = ${a}, b = ${b}, c = ${c}. ${a*b} + ${a*c} = ${a} × (${b} + ${c}) = ${a*(b+c)}. Extraer a recupera la altura común.`;
    } else if(type==='binom-cube') {
      const s=150/(a+b);
      drawing=this.svg(this.squareParts(40,55,a,b,s,['a³','a²b','a²b','ab²'])+this.squareParts(250,55,a,b,s,['a²b','ab²','ab²','b³'])+this.text(115,30,`Capa de grosor a = ${a}`)+this.text(325,30,`Capa de grosor b = ${b}`)+this.text(220,245,'Cada área se multiplica por el grosor de su capa.')+this.text(220,275,'1 pieza a³ · 3 piezas a²b · 3 piezas ab² · 1 pieza b³'),'Dos capas de un cubo, cada una dividida en cuatro prismas; las etiquetas son volúmenes');
      result=`Volumen total: (${a}+${b})³ = ${(a+b)**3}. Ocho prismas: ${a**3} + 3 × ${a*a*b} + 3 × ${a*b*b} + ${b**3} = ${(a+b)**3}. Las etiquetas indican volumen, no área.`;
    }
    lab.querySelector('#product-drawing').innerHTML=drawing;
    lab.querySelector('#product-result').textContent=result;
  }
};
window.ProductGeometry=ProductGeometry;
