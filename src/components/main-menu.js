import { angleDown, arrowRight, externalLinkAlt } from './icons.js';

class MainMenu extends HTMLElement {
  _render() {
    const style = `
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
        svg {
            fill: var(--color-white);
        }

        div {
            background: var(--color-blue);
            position: absolute;
            right: 0;
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

          svg {
            fill: var(--color-gray-500);
            margin-left: var(--space-m);
          }
    `;

    const html = `
        <button aria-haspopup="true" aria-expanded="${this.open}">
            menu&nbsp;<span aria-hidden="true">${angleDown}</span>
        </button>
        <div role="menu" ${this.open === true ? '' : 'hidden'}>
            <ul>
                <li><a href="/">${arrowRight} Home</a></li>
                <li><a href="/footbag">${arrowRight} What is footbag?</a></li>
                <li><a href="/getting-started">${arrowRight} Getting started</a></li>
                <li><a href="/rules">${arrowRight} Rules</a></li>
            </ul>
            <h4>Old site ${externalLinkAlt}</h4>
            <ul>
                <li>${arrowRight} <a href="http://footbag.org/reference/-/Footbag_Reference_Area">Footbag disciplines</a></li>
                <li>${arrowRight} <a href="/rules">Rules</a></li>
                <li>${arrowRight} <a href="http://footbag.org/faq/">FAQ</a></li>
                <li>${arrowRight} <a href="http://footbag.org/events/results">Tournament results</a></li>
                <li>${arrowRight} <a href="http://footbag.org/members/home">Member area</a></li>
            </ul>
        </div>
    `;

    this.shadowRoot.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.open = !this.open;
      this._render();
    });
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.open = false;
    this._render();
  }
}

customElements.define('main-menu', MainMenu);
