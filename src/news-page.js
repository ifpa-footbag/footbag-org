import { css, html, LitElement } from 'lit-element';

import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { news } from './news/news.js';

class NewsPage extends LitElement {
  static get styles() {
    return css`
      [hidden] {
        display: none;
      }
    `;
  }

  render() {
    return html`
      <navigation-bar back></navigation-bar>

      <page-one-column>
        ${news}
      </page-one-column>
    `;
  }

  firstUpdated() {
    this._hideNews();
  }

  _hideNews() {
    const items = this.shadowRoot
      .querySelector('page-one-column')
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
