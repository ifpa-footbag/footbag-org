import { css, html, LitElement } from 'lit-element';

import './svg-icon.js';

class ContactUs extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      a {
        background: var(--color-white);
        border-radius: 5rem;
        color: var(--color-blue);

        display: block;
        font-weight: var(--font-weight-bold);

        width: 10rem;
        padding: var(--space-m);
        text-align: center;
        text-decoration: none;
      }

      :host([dark]) a {
        background: var(--color-blue);
        color: var(--color-white);
      }
    `;
  }

  render() {
    return html`
      <div class="button">
        <a href="mailto:info@footbag.org">Contact Us</a>
      </div>
    `;
  }

  static get properties() {
    return {
      dark: {
        type: Boolean,
      },
    };
  }
}

customElements.define('contact-us', ContactUs);
