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

      h2 {
        font-size: var(--font-size-xxl);
        margin: 0;
        padding: var(--space-xl) 0;
      }

      @media only screen and (min-width: 765px) {
        h2 {
          font-size: var(--font-size-xxxl);
        }
      }
    `;
  }

  render() {
    return html` ${this.header !== undefined
        ? html` <h2>${this.header || ''}</h2> `
        : ''}
      <slot></slot>`;
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
