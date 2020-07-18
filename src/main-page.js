import './components/grid-template.js';
import './components/event-item.js';
import './components/navigation-bar.js';
import './components/hero-video.js';

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

    aside  {
      margin: var(--space-l) var(--space-l) var(--space-m); var(--space-l);
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
      background-color: var(--color-white);
      margin-bottom: var(--space-l);
    }
    `;

    const html = `

    <header>
        <img class="logo-image" src="images/freestyle-footbag.png">
        <!-- h1 class="logo-header"><a href="/index.html">FB</a></h1 -->
    </header>
    <navigation-bar></navigation-bar>
    <aside>
      <hero-video></hero-video>
    </aside>
    
    <main>
        <grid-template header="News">
            ${news}
        </grid-template>
        <grid-template class="events" header="Events" header-color="red">
            ${events}
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
