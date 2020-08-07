class PageOneColumn extends HTMLElement {
  _render() {
    const style = `
    :host {
      display: block;
      background: var(--color-white);
      
      max-width: 765px;
      margin: 0 auto;
    
      padding: var(--space-xl);
    }

    @media only screen and (min-width: 692px) {
      :host {     
        margin-top: var(--space-xl);
        margin-bottom: var(--space-xl);
      }
    }


    h2 {
      font-size: var(--font-size-xxxlarge);
      margin-top: var(--space-xl);
      padding: 0;
    }

    slot {
    }
  `;

    const html = `
    <h2>${this.getAttribute('header') || ''}</h2>
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
