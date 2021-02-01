import { css, html, LitElement } from 'lit-element';

import './svg-icon.js';

class PageHeading extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-l);
        max-width: 100%;
        overflow-wrap: anywhere;
        padding: 0;
      }

      h2 {
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-xxxl);

        display: flex;

        margin: 3rem 0 var(--margin-bottom, 2.75rem) 0;

        color: var(--color-blue);
      }

      .date {
        color: var(--color-blue);
        font-family: var(--font-family-primary);
        font-size: var(--font-size-m);
      }

      img {
        max-width: 100%;
        width: 100%;
        margin-bottom: var(--space-xl);
      }

      .topic {
        color: var(--color-red); /* #348ba8; */
        margin-right: var(--space-s);
        padding-right: var(--space-m);
        border-right: 2px solid var(--color-red);
      }
    `;
  }

  render() {
    return html`
      ${this.headerImage !== undefined
        ? html`<img src="${this.headerImage}" />`
        : ``}
      <h2>
        <div class="header">
          <div class="header-content">
            ${this.topic === undefined
              ? ''
              : html`<span class="topic">${this.topic}</span> `}
            ${this.header}

            <div class="date">
              ${this.date || ''}
            </div>
          </div>
        </div>
      </h2>
    `;
  }

  static get properties() {
    return {
      date: {
        type: String,
      },
      header: {
        type: String,
      },

      headerImage: {
        type: String,
      },
      topic: {
        type: String,
      },
    };
  }
}

customElements.define('page-heading', PageHeading);
