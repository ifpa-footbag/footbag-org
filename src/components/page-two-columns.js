import { css, html, LitElement } from 'lit-element';

class PageTwoColumns extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--color-white);

        margin: 0 auto;

        min-height: 600px;
        max-width: var(--max-content-width);

        padding: 0 var(--space-xl) var(--space-xl) var(--space-xl);
      }
      aside {
        margin: var(--space-l);
        padding: var(--space-l);
      }

      @media only screen and (min-width: 1024px) {
        :host {
          display: grid;
          grid-template-columns: 161fr 100fr;
          grid-template-rows: auto;
          grid-template-areas: 'main    aside';
          grid-gap: var(--space-l);
        }

        main {
          grid-area: main;
        }

        aside {
          grid-area: aside;
        }
      }
    `;
  }

  render() {
    return html` <main><slot name="main"></slot></main>
      <aside><slot name="aside"></slot></aside>`;
  }

  static get properties() {
    return {
      header: {
        type: String,
      },
    };
  }
}

customElements.define('page-two-columns', PageTwoColumns);
