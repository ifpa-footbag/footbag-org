import { Router } from '@vaadin/router';

import './rules-page.js';
import './getting-started-page.js';
import './events-page.js';
import './footbag-page.js';
import './main-page.js';
import './news-page.js';
import './components/page-footer.js';

class FootbagApp extends HTMLElement {
  _render() {
    const style = `
    #page-placeholder {
      background: var(--content-background);
    }

    #page-placeholder > .leaving {
      animation: 0.2s fadeOut ease-in-out;
    }

    #page-placeholder > .entering {
      animation: 0.2s fadeIn linear;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
    `;

    const html = `
    <!-- Router injects content here -->
    <div id="page-placeholder"></div>
    <!-- end of injected content-->
    
    <page-footer>
  `;

    this.shadowRoot.innerHTML = `
  <style>
    ${style}
  </style>
  ${html}`;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();

    const outlet = this.shadowRoot.getElementById('page-placeholder');
    const router = new Router(outlet, { baseUrl: '/' });
    router.setRoutes([
      { path: '/', component: 'main-page' },
      { path: 'footbag', component: 'footbag-page' },
      { path: 'event/:event', component: 'events-page' },
      { path: 'getting-started', component: 'getting-started-page' },
      { path: 'rules', component: 'rules-page' },
      { path: 'news/:news', component: 'news-page' },
      { path: '(.*)', component: 'main-page' },
    ]);
  }
}

customElements.define('footbag-app', FootbagApp);
