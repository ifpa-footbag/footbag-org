/**
 * Card Element
 *
 * Container to show content from the single subject. Having
 *  - header
 *  - image
 *  - content
 *  - footer
 * sections. Take a look at Latest news, upcoming events or players association for example.
 * Notice that card can contain smaller elements, that are card-like as well.
 * E.g. news-item and event-item
 */
class CardElement extends HTMLElement {
  _render() {
    const style = `
    :host {
      display: block;
      background: var(--card-background, var(--color-white));
      --content-margin: var(--space-l) 0;
    }

    header {
      background: var(--header-color, var(--color-blue));
      color: var(--color-white);

      font-size: var(--font-size-small);
      font-weight: var(--font-weight-boldest);
      text-transform: uppercase;
      
      padding: var(--space-s) var(--grid-panel-padding);
      margin: 0;
    }
    
    img {   
      max-width: 100%;
      width: 100%;
    }

    h2 {
      font-size: var(--font-size-large);
      font-weight: var(--font-weight-boldest);
      margin: 0;
      padding: var(--space-m) 0;
    }

    slot {
      display: block;
      margin: var(--content-margin);
    }
  `;

    const html = `
      ${
        this.getAttribute('header') !== null
          ? `
      <header>
        <h2>${this.getAttribute('header') || ''}</h2>
      </header>
      `
          : ''
      }
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

customElements.define('card-element', CardElement);
