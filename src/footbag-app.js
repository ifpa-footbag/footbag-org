import { css, html, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';

import './rules-page.js';
import './getting-started-page.js';
import './events-page.js';
import './footbag-page.js';
import './main-page.js';
import './news-page.js';
import './components/page-footer.js';

class FootbagApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
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
  }

  render() {
    return html`
      <!-- Router injects content here -->
      <div id="page-placeholder"></div>
      <!-- end of injected content-->

      <page-footer> </page-footer>
    `;
  }

  constructor() {
    super();

    this.addEventListener('vaadin-router-location-changed', event => {
      if (event.detail.location.pathname !== '/') {
        window.scrollTo(0, 0);
      }
    });
  }

  updated() {
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
