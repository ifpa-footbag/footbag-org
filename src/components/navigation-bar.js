import { css, html, LitElement } from 'lit-element';

import './main-menu.js';
import './svg-icon.js';

class NavigationBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--color-blue);
        box-sizing: border-box;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      nav {
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 auto;
        padding-top: var(--space-m);
        padding-bottom: var(--space-m);
        top: 0;
        z-index: 1;

        max-width: var(--max-content-width);
      }

      img {
        height: 24px;
        width: 24px;

        padding-left: var(--space-l);
      }
      h1 {
        font-size: var(--font-size-l);
        margin: 0;
        padding: 0 0 0 var(--space-l);
        margin-right: auto;
      }

      a {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-bold);
        padding: var(--space-xl) var(--space-m);
        text-transform: uppercase;
        white-space: nowrap;
      }

      svg-icon {
        width: 12rem;
        height: 45px;
        fill: var(--color-white);
      }

      @media only screen and (min-width: 450px) {
        svg-icon {
          width: 14rem;
        }
      }

      @media only screen and (min-width: 700px) {
        svg-icon {
          width: 18rem;
        }
      }

      .cls-1 {
        fill: lime !important;
      }
      .cls-2 {
        fill: #f15a24 !important;
      }
      .cls-3 {
        fill: #fff !important;
      }

      .ifpa {
        border-left: 1px solid var(--color-gray-300);
      }

      .back {
        background-color: var(--color-blue);
        border: var(--space-s) solid var(--color-white);
        box-shadow: var(--box-shadow);

        color: var(--color-orange);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: var(--font-weight-boldest);
        position: fixed;
        bottom: 5%;
        left: 5%;

        text-align: center;
        border-radius: 50%;
        height: 5rem;
        width: 5rem;

        z-index: 2;
      }

      svg {
        fill: var(--color-white);
        padding-left: var(--space-m);
        padding-bottom: 2px;
      }
    `;
  }

  render() {
    return html`
      <nav>
        ${this.back !== undefined
          ? html`<div class="back">
              <a href="/" class="back-link">
                BACK
              </a>
            </div>`
          : ''}
        <h1>
          <svg-icon path="images/icons.svg#footbag-worldwide"></svg-icon>
        </h1>

        <!--main-menu></main-menu-->
      </nav>
    `;
  }

  static get properties() {
    return {
      back: {
        type: Boolean,
      },
    };
  }
}

customElements.define('navigation-bar', NavigationBar);
