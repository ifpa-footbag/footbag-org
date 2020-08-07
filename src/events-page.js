import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { events } from './events/events.js';

class EventsPage extends HTMLElement {
  _render() {
    const style = `
    [hidden] {
      display: none;
    }
  `;

    const html = `

  <navigation-bar back></navigation-bar>
 
      <page-one-column>
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

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
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
