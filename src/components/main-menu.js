import { css, html, LitElement } from 'lit-element';

import './svg-icon.js';

import './smooth-expand.js';

class MainMenu extends LitElement {
  static get styles() {
    return css`
      :host {
        z-index: var(--z-index-floating-1);
        position: relative; /* anchor for smooth-expand*/
      }
      button {
        background: none;
        border: none;

        color: var(--color-white);

        font-size: var(--font-size-m);
        font-weight: var(--font-weight-bold);
        padding: var(--space-xl) var(--space-m);
        text-transform: uppercase;
        white-space: nowrap;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        outline: 2px solid var(--color-orange);
      }

      svg {
        fill: var(--color-white);
      }

      smooth-expand {
        background: var(--color-blue);
        position: absolute;
        right: -8px;
        width: 250px;
      }

      .menu {
        padding: var(--space-xl);
      }

      a {
        color: var(--color-white);
        text-decoration: none;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      li {
        padding: var(--space-m) 0;
      }

      h4 {
        color: var(--color-gray-500);
        font-size: var(--font-size-m);
        padding-top: var(--space-xl);

        text-transform: uppercase;
      }

      svg-icon {
        fill: var(--color-gray-500);
        margin-left: var(--space-m);
      }
    `;
  }

  render() {
    return html`
      <button
        @click="${() => this.toggleMenu()}"
        aria-haspopup="true"
        aria-expanded="${this.open}"
      >
        menu&nbsp;<span aria-hidden="true"
          ><svg-icon path="images/icons.svg#angle-down"></svg-icon
        ></span>
      </button>
      <smooth-expand ?expanded="${this.open}">
        <div class="menu" role="menu">
          <ul>
            <li>
              <a href="/"
                ><svg-icon path="images/icons.svg#arrow-right"></svg-icon>
                Home</a
              >
            </li>
            <li>
              <a href="/footbag"
                ><svg-icon path="images/icons.svg#arrow-right"></svg-icon> What
                is footbag?</a
              >
            </li>
            <li>
              <a href="/getting-started"
                ><svg-icon path="images/icons.svg#arrow-right"></svg-icon>
                Getting started</a
              >
            </li>
            <li>
              <a href="/rules"
                ><svg-icon path="images/icons.svg#arrow-right"></svg-icon>
                Rules</a
              >
            </li>
          </ul>
          <h4>Old site</h4>
          <ul>
            <li>
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>
              <a href="http://footbag.org/reference/-/Footbag_Reference_Area"
                >Footbag disciplines</a
              >
            </li>
            <li>
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>
              <a href="/rules">Rules</a>
            </li>
            <li>
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>
              <a href="http://footbag.org/faq/">FAQ</a>
            </li>
            <li>
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>
              <a href="http://footbag.org/events/results">Tournament results</a>
            </li>
            <li>
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>
              <a href="http://footbag.org/members/home">Member area</a>
            </li>
          </ul>
        </div>
      </smooth-expand>
    `;
  }

  static get properties() {
    return {
      open: {
        type: Boolean,
      },
    };
  }

  toggleMenu() {
    this.open = !this.open;
  }
}

customElements.define('main-menu', MainMenu);
