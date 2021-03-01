import { css, html, LitElement } from 'lit-element';

import { sharedStyles } from './shared-styles.js';
import './components/page-two-columns.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { events } from './events/events.js';

class EventsPage extends LitElement {
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
          ${events}
        </div>
        <div slot="aside">
          ${events}
        </div>
      </page-two-columns>
    `;
  }

  firstUpdated() {
    this._hideEvents();
  }

  _hideEvents() {
    const items = this.shadowRoot
      .querySelector('[slot=main]')
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
