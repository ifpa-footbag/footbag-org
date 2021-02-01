import { css, html, LitElement } from 'lit-element';

import './page-heading.js';
import './svg-icon.js';

class NewsItem extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-l);
        max-width: 100%;
        overflow-wrap: anywhere;

        --content-padding: var(--space-xl);
      }

      :host([highlight]) {
        background-color: var(--color-redlight);
      }

      a {
        color: inherit;
        display: flex;

        text-decoration: inherit;
      }

      a:hover {
        color: var(--color-bluehover);
      }

      h3 {
        font-family: var(--font-family-secondary);
        display: flex;

        color: var(--color-blue);
        margin: 0;
        padding: var(--space-xl) var(--content-padding);
      }

      .header-icon {
        fill: var(--color-red);
        padding-right: var(--space-m);
      }

      img {
        max-width: 100%;
        width: 100%;
      }

      .date {
        color: var(--color-blue);
        font-family: var(--font-family-primary);
        font-size: var(--font-size-m);
      }

      .news_body {
        padding: 0 var(--content-padding);
      }

      .news_body {
        line-height: var(--line-height-increased);
      }

      footer {
        color: var(--color-gray-800);
        font-size: var(--font-size-m);

        padding: var(--content-padding);
        margin-top: auto;

        text-transform: uppercase;
      }
      svg {
        fill: var(--color-gray-800);
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
      ${this.open
        ? html` <page-heading
            header="${this.header}"
            topic="${this.topic}"
            date="${this.date}"
          ></page-heading>`
        : html`
            ${this.headerImage !== undefined
              ? html`<img src="${this.headerImage}" />`
              : ''}
            <h3>
              <a class="header" href="/news/${this.header}">
                <svg-icon
                  class="header-icon"
                  path="images/icons.svg#arrow-right"
                ></svg-icon>
                <div class="header-content">
                  ${this.topic === undefined
                    ? ''
                    : html`<span class="topic">${this.topic}</span> `}
                  ${this.header}

                  <div class="date">
                    ${this.date || ''}
                  </div>
                </div>
              </a>
            </h3>
          `}

      <div class="news_body">
        ${this.open === true ? this.short || '' : ''}
        ${this.open === true ? html`<slot></slot>` : ''}
      </div>
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
      image: {
        type: String,
      },
      headerImage: {
        type: String,
      },
      highlight: {
        type: Boolean,
      },
      open: {
        type: Boolean,
      },
      short: {
        type: String,
      },
      topic: {
        type: String,
      },
    };
  }
}

customElements.define('news-item', NewsItem);
