import './components/page-two-columns.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { news } from './news/news.js';

class NewsPage extends HTMLElement {
  _render() {
    const style = `
      [hidden] {
        display: none;
      }
    `;

    const html = `
      <navigation-bar back></navigation-bar>
        
      <page-two-columns>
        ${news}
      </page-two-columns>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;

    this._hideNews();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }

  static get observedAttributes() {
    return ['location'];
  }

  _hideNews() {
    const items = this.shadowRoot
      .querySelector('page-two-columns')
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
