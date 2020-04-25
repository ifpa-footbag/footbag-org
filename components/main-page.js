import './grid-template.js';
import './event-item.js';
import './navigation-bar.js';
import './hero-video.js';

import { events } from '../events/events.js';
import { news } from '../news/news.js';

class MainPage extends HTMLElement {
  connectedCallback() {
    const style = `
    /* LOGO */

    .logo {
      /* anchor for logo-header, which is positioned absolute */
      position: relative;
      z-index: 2;
    }
    .logo-header {
      background-color: var(--color-white);
      border-radius: 50%;

      align-items: center;
      display: flex;

      justify-content: center;
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: 7rem;
      height: 7rem;

      z-index: 1;
    }

    .main-grid {
        display: grid;
        max-width: var(--max-content-width);
        margin: 0 auto;
    }
    @media only screen and (min-width: 520px) {
        .main-grid {
        grid-template-columns: 2fr 1fr;
        }
    }
    .events{
      background-color: var(--color-white);
    }
    `;

    const html = `
    <header class="logo">
        <h1 class="logo-header"><a href="/index.html">FB</a></h1>
    </header>

    <navigation-bar></navigation-bar>
    <hero-video></hero-video>

    <main class="main-grid">
        <grid-template header="News">
            ${news}
        </grid-template>
        <grid-template class="events" header="Events" header-color="red">
            ${events}
        </grid-template>
    </main>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('main-page', MainPage);
