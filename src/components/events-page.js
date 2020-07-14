import './page-one-column.js';
import './navigation-bar.js';
import './hero-video.js';

import { events } from '../events/events.js';

class EventsPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
            <h2>events</h2>
          </header>
          ${events}
        </page-one-column>
    
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;

    setTimeout(() => {
      this._hideEvents();
    }, 50);
  }

  _hideEvents() {
    const items = this.shadowRoot
      .querySelector('page-one-column')
      .querySelectorAll('event-item');

    items.forEach(item => {
      if (
        item.getAttribute('header') === this.location.params.event ||
        this.location.params.event === 'all'
      ) {
        item.setAttribute('open', true);
      } else {
        item.setAttribute('hidden', true);
      }
    });
  }
}

customElements.define('events-page', EventsPage);
