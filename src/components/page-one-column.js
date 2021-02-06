import { css, html, LitElement } from 'lit-element';

class PageOneColumn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--color-white);

        max-width: 765px;
        margin: 0;

        min-height: 600px;

        padding: 0 var(--space-xl) var(--space-xl) var(--space-xl);
      }
    `;
  }

  render() {
    return html` <slot></slot>`;
  }

  static get properties() {
    return {
      header: {
        type: String,
      },
    };
  }
}

customElements.define('page-one-column', PageOneColumn);
