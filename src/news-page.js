import { css, html, LitElement } from 'lit-element';

import { sharedStyles } from './shared-styles.js';
import './components/page-two-columns.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { news } from './news/news.js';

class NewsPage extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        [hidden] {
          display: none;
        }
      `,
    ];
  }

  render() {
    return html`
      <navigation-bar back></navigation-bar>

      <page-two-columns>
        <div slot="main">
          ${news}
        </div>
        <div slot="aside">
          ${news}
        </div>
      </page-two-columns>
    `;
  }

  firstUpdated() {
    this._hideNews();
  }

  _hideNews() {
    const items = this.shadowRoot
      .querySelector('[slot=main]')
      .querySelectorAll('news-item');

    items.forEach(item => {
      if (
        item.getAttribute('header') === this.location.params.news ||
        this.location.params.news === 'all'
      ) {
        item.setAttribute('open', true);
      } else {
        item.setAttribute('hidden', true);
      }
    });
  }
}

customElements.define('news-page', NewsPage);
