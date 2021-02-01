import { css, html, LitElement } from 'lit-element';

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
class CardElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--card-background, var(--color-white));
        --content-margin: 0;
      }

      header {
        background: var(--header-color, var(--color-blue));
        color: var(--color-white);

        font-size: var(--font-size-s);
        font-weight: var(--font-weight-boldest);
        text-transform: uppercase;

        padding: var(--space-s) var(--space-xl);
        margin: 0;
      }

      img {
        max-width: 100%;
        width: 100%;
      }

      h2 {
        font-size: var(--font-size-l);
        font-weight: var(--font-weight-boldest);
        margin: 0;
        padding: var(--space-m) 0;
      }

      slot {
        display: block;
        margin: var(--content-margin);
      }
    `;
  }

  render() {
    return html`
      ${this.header !== undefined
        ? html`
            <header>
              <h2>${this.header || ''}</h2>
            </header>
          `
        : ''}
      ${this.image !== undefined ? html`<img src="${this.image}" />` : ``}
      <slot></slot>

      <slot name="footer"></slot>
    `;
  }

  static get properties() {
    return {
      header: {
        type: String,
      },
      image: {
        type: String,
      },
    };
  }
}

customElements.define('card-element', CardElement);
