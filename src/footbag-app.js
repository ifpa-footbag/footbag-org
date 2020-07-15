import { Router } from '@vaadin/router';

import './events-page.js';
import './footbag-page.js';
import './main-page.js';
import './news-page.js';

class FootbagApp extends HTMLElement {
  _render() {
    const html = `
    <!-- Router injects content here -->
    <div id="page-placeholder"></div>
    <!-- end of injected content-->
  `;

    this.shadowRoot.innerHTML = html;
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
      { path: 'news/:news', component: 'news-page' },
      { path: '(.*)', component: 'main-page' },
    ]);
  }
}

customElements.define('footbag-app', FootbagApp);
