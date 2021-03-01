import { css, html, LitElement } from 'lit-element';

import './svg-icon.js';
import { sharedStyles } from '../shared-styles.js';

class PageHeading extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        h2 {
          background: var(--background, none);
          font-family: var(--font-family-secondary);
          display: flex;
          color: var(--color, var(--color-blue));
        }

        .date {
          color: var(--color-blue);
          font-family: var(--font-family-primary);
          font-size: var(--font-size-m);
        }

        .topic {
          color: var(--color-topic, var(--color-red)); /* #348ba8; */
          margin-right: var(--space-s);
          padding-right: var(--space-m);
          border-right: 2px solid var(--color-topic, var(--color-red));
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.headerImage !== undefined
        ? html`<img src="${this.headerImage}" />`
        : ``}
      <h2 class="h1">
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

      extraMargin: {
        type: Boolean,
        reflect: true,
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
