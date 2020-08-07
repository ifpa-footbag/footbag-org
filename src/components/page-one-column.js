class PageOneColumn extends HTMLElement {
  _render() {
    const style = `
    :host {
      display: block;
      background: var(--color-white);
      
      max-width: 765px;
      margin: 0 auto;

      min-height: 600px;
    
      padding:  0 var(--space-xl) var(--space-xl) var(--space-xl) ;
    }

    h2 {
      font-size: var(--font-size-xxlarge);
      margin: 0;
      padding: var(--space-xl) 0;
    }

    @media only screen and (min-width: 765px) {
      :host {     
        margin-top: var(--space-xl);
        margin-bottom: var(--space-xl);
      }

      h2 {
        font-size: var(--font-size-xxxlarge);
      }
    }
  `;

    const html = `
    ${
      this.getAttribute('header') !== null
        ? `
    <h2>${this.getAttribute('header') || ''}</h2>
    `
        : ''
    }
    <slot></slot>`;

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

customElements.define('page-one-column', PageOneColumn);
