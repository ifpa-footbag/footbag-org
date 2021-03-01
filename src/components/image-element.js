import { css, html, LitElement } from 'lit-element';

class ImageElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      figure {
        margin: var(--space-l) 0;
        padding: 0;

        max-width: 100%;
        width: 100%;
      }

      img {
        max-width: 100%;
        width: 100%;
      }

      figcaption {
        font-style: italic;
        font-size: var(--font-size-m);
      }

      @media only screen and (min-width: 500px) and (max-width: 700px) {
        :host([small]) figure {
          padding: var(--space-l);
          width: 48%;
          float: right;
        }
      }

      @media only screen and (min-width: 701px) {
        :host([small]) figure {
          margin: var(--space-l);
          width: 37%;
          float: right;
        }
      }
    `;
  }

  render() {
    return html`<figure>
      <img src="${this.src}" />
      <figcaption>${this.caption}</figcaption>
    </figure> `;
  }

  static get properties() {
    return {
      caption: {
        type: String,
      },
      small: {
        type: Boolean,
      },
      src: {
        type: String,
      },
    };
  }
}

customElements.define('image-element', ImageElement);
