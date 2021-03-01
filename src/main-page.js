import { css, html, LitElement } from 'lit-element';

import { sharedStyles } from './shared-styles.js';
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
    return [
      sharedStyles,
      css`
        :host {
          display: block;
          margin: 0 auto;
          background: white;
        }
        header {
          z-index: 2;
        }

        hero-video,
        main {
          margin: 0 auto;
          max-width: var(--max-content-width);
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
            grid-gap: var(--space-l);
          }
        }

        .card-element-news {
          --card-background: #f3f3f3;
        }

        .intro {
          grid-area: intro;
        }

        .news {
          background: var(--color-white);
          grid-area: news;
        }

        .news img,
        .events img {
          max-width: 100%;
        }

        .events {
          background: var(--color-white);

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

        page-heading {
          --background: var(--color-redlight);
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <navigation-bar></navigation-bar>
      </header>
      <hero-video></hero-video>

      <main>
        <article class="intro">
          <footbag-intro></footbag-intro>
        </article>
       
        <article class="news">
        
        <img class="img--heading" src="images/front-page/players-association.jpg"></img>
          <!--div class="news-filter">
          <div class="filter-item selected">News</div>
          <div class="filter-item">Freestyle</div>
          <div class="filter-item">Net</div>
        </div-->
        <page-heading
          topic="News"
          header="Find out what is going on"
        ></page-heading>
       
          ${news}
        
          <!-- not yet implemented -->
          <!-- div class="more">
            <a slot="footer">Older news</a>
          </div -->
  </article>
        <article class="events">
        <img class="img--heading" src="images/front-page/players-association.jpg"></img>
        <page-heading
          topic="Events"
          header="Time to have fun and challenge the others!"
        ></page-heading>

          ${events}
          <!-- not yet implemented -->
          <!-- div class="more">
            <a slot="footer">More events</a>
          </div -->
  </article>
      </main>
    `;
  }
}

customElements.define('main-page', MainPage);
