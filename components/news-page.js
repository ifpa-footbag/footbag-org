import './page-one-column.js';
import './navigation-bar.js';
import './hero-video.js';

import { news } from '../news/news.js';

class NewsPage extends HTMLElement {
  static get observedAttributes() {
    return ['location'];
  }

  connectedCallback() {
    const style = `
      
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

    this.attachShadow({ mode: 'open' });
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

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
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
        item.style.display = 'none';
      }
    });
  }
}

customElements.define('news-page', NewsPage);
