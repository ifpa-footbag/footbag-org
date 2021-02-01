import { css, html, LitElement } from 'lit-element';

import './components/card-element.js';
import './components/event-item.js';
import './components/footbag-intro.js';
import './components/navigation-bar.js';
import './components/hero-video.js';
import './components/info-and-links.js';

import { events } from './events/events.js';
import { news } from './news/news.js';

class MainPage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      header {
        z-index: 2;
      }

      main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
          'intro'
          'news'
          'events';
      }

      @media only screen and (min-width: 1024px) {
        main {
          grid-template-columns: 161fr 100fr;
          grid-template-areas:
            'news   intro'
            'events intro';
        }
      }

      .card-element-news {
        --card-background: #f3f3f3;
      }

      .intro {
        background: rgb(247, 247, 248);
        grid-area: intro;
      }

      .news {
        background: var(--color-white);
        grid-area: news;
      }

      .news img,
      .events img {
        width: 100%;
        max-width: 100%;
        padding: var(--space-l);
        width: calc(100% - 1.5rem);
      }

      .events {
        background: #f7f7f8;

        grid-area: events;
      }

      .more {
        padding: var(--space-xl);
        text-align: center;
        text-transform: uppercase;
      }

      .more a {
        color: #8a8a92;
        fill: #8a8a92;
        text-decoration: none;
      }

      .news-filter {
        background: var(--color-white);
        display: flex;
        padding: 0 var(--space-l);
      }

      .filter-item {
        padding: var(--space-l);
        margin: 0 var(--space-m);
        background: white;
        width: 3rem;
      }
      .selected {
        border-bottom: 3px solid var(--color-red);
        color: var(--color-red);
        font-weight: var(--font-weight-bold);
      }
    `;
  }

  render() {
    return html`
      <header>
        <navigation-bar></navigation-bar>
      </header>
      <hero-video></hero-video>

      <main>
        <section class="intro">
          <footbag-intro></footbag-intro>
        </section>
       
        <div class="news">
        
        <img src="images/front-page/players-association.jpg"></img>
          <!--div class="news-filter">
          <div class="filter-item selected">News</div>
          <div class="filter-item">Freestyle</div>
          <div class="filter-item">Net</div>
        </div-->

          ${news}
        
          <!-- not yet implemented -->
          <!-- div class="more">
            <a slot="footer">Older news</a>
          </div -->
        </div>
        <section class="events">
        <img src="images/front-page/players-association.jpg"></img>
          ${events}
          <!-- not yet implemented -->
          <!-- div class="more">
            <a slot="footer">More events</a>
          </div -->
        </section>
      </main>
    `;
  }
}

customElements.define('main-page', MainPage);
