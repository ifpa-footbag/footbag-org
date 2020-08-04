class GridTemplate extends HTMLElement {
  _render() {
    const style = `
    slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-auto-rows: minmax(22px, auto);
      grid-gap: var(--grid-gap);
      justify-items: stretch;
      align-items: stretch;
      margin: var(--grid-gap);
    }

    header {
      background: var(--header-color, var(--color-blue));
      color: var(--color-white);
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-boldest);
      text-transform: uppercase;
      grid-column: 1 / -1;
      padding: var(--space-s) var(--grid-panel-padding);
      margin: 0;
    }
    

    img {   
      max-width: 100%;
      width: 100%;
    }

    h2 {
      font-size: var(--font-size-large);
      font-weight: 900;
      margin: 0;
      padding: var(--space-m) 0;
    }

    slot[name=footer] {
      grid-column: 1 / -1;
    }
  `;

    const html = `
      <header>
        <h2>${this.getAttribute('header') || ''}</h2>
      </header>
      ${
        this.getAttribute('image') !== null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      }
      <slot></slot>
      
      <slot name="footer"></slot>
      `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('grid-template', GridTemplate);
