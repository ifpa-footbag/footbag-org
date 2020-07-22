import './components/grid-template.js';
import './components/event-item.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

import { arrowRight } from './components/icons.js';

import { events } from './events/events.js';
import { news } from './news/news.js';

class MainPage extends HTMLElement {
  _render() {
    const style = `
    header {
      /* anchor for logo-header, which is positioned absolute */
      position: relative;
      z-index: 2;
    }

    .logo-image {
      opacity: 0.3;
      border-radius: 50%;

      align-items: center;
      display: flex;

      justify-content: center;
      position: absolute;
      top: var(--space-m);
      left: var(--space-m);
      width: 7rem;
      height: 7rem;
      z-index: 1;
    }

    @media only screen and (max-width: 500px) {
      .logo-image {
        width: 5rem;
        height: 5rem;
      }
    }

    main {
        display: grid;
        margin: 0 auto;
    }
    @media only screen and (min-width: 692px) {
        main {
          grid-template-columns: 2fr 1fr;
        }
    }
    

    .events{
      --grid-gap: 0;
      background-color: var(--color-white);
      margin-bottom: var(--space-l);
    }
    .more {
      justify-self: center;
      display: block;
      grid-column: 1 / -1;
      margin: var(--space-l);
      padding: var(--space-l);
      text-transform: uppercase;
    }

    .more--news a {
      color: var(--color-blue);
    }
    .more--news svg {
      fill: var(--color-blue);
    }

    .more--events a {
      color: var(--color-red);
    }
    .more--events svg {
      color: var(--color-red);
      fill: var(--color-red);
    }

    a {
      text-decoration: none;
    }
    `;

    const html = `

    <header>
      <navigation-bar></navigation-bar> 
    </header>
    
    
    <hero-video></hero-video>
    
    <main>
        <grid-template header="Latest News">
            ${news}
            <div class="more more--news">
              <a href="/news/all" slot="footer">More news ${arrowRight}</a>
            </div>
        </grid-template>
        <grid-template class="events" header="Upcoming Events" header-color="red">
            ${events}
            <div class="more more--events">
              <a href="/event/all" slot="footer">More events ${arrowRight}</a>
            </div>
        </grid-template>
    </main>
   
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('main-page', MainPage);
