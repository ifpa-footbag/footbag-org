import { css, html, LitElement } from 'lit-element';

import './page-heading.js';
import './svg-icon.js';

class NewsItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-l);
        max-width: 100%;
        overflow-wrap: anywhere;

        --content-padding: var(--space-xl);
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
        fill: var(--color-blue);
        opacity: 0.1;
        padding-right: var(--space-xl);
        min-width: 32px;
      }

      :host([highlight]) .header-icon {
        opacity: 0.6;
      }

      img {
        max-width: 100%;
        width: 100%;
      }

      .date {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-m);
      }

      .news_body {
        line-height: var(--line-height-increased);
      }

      .topic {
        font-size: var(--font-size-ms);

        margin-right: var(--space-s);
        padding-right: var(--space-m);
      }
    `;
  }

  render() {
    return html`
      ${this.open
        ? html`<page-heading
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
                  path="images/icons.svg#bullhorn"
                  large
                ></svg-icon>
                <div class="header-content">
                  <div class="date">
                    <span class="date">${this.date || ''}</span>
                    <span class="topic">${this.topic || ''}</span>
                  </div>
                  ${this.header}
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
