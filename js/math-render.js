// Motor de renderizado matemático KaTeX
const MathRenderer = {
  render(container) {
    if (!window.renderMathInElement) {
      setTimeout(() => {
        if (window.renderMathInElement) {
          window.renderMathInElement(container, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
          });
        }
      }, 150);
      return;
    }
    window.renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  },

  renderString(latex, displayMode = false) {
    if (!window.katex) return latex;
    try {
      return window.katex.renderToString(latex, {
        displayMode: displayMode,
        throwOnError: false
      });
    } catch (e) {
      console.error("Error renderizando KaTeX:", e);
      return latex;
    }
  }
};

window.MathRenderer = MathRenderer;
