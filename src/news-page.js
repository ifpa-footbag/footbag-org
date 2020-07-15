import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { news } from './news/news.js';

class NewsPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['location'];
  }

  connectedCallback() {
    const style = `
      [hidden] {
        display: none;
      }
    `;

    const html = `
      <navigation-bar back></navigation-bar>
        
      <page-one-column>
        <header class="header">
          <h2>News</h2>
        </header>
        ${news}
      </page-one-column>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
    setTimeout(() => {
      this._hideNews();
    }, 50);
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
