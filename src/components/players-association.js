import './card-element.js';
import { arrowRight } from './icons.js';

class PlayersAssociation extends HTMLElement {
  _render() {
    const style = `
        :host {
          background-color: var(--color-white);
          display: block;
          font-size: var(--font-size-large);
          max-width: 100%;
        }

        p, div[slot="footer"] {
            padding: 0 var(--space-l);
        }

        /*  TODO: EXTRACT LINK STYLES  */
        a {
          color: inherit; 
          text-decoration: inherit; 
        }

        a:hover {
          color: var(--color-bluehover);
        }

        div[slot="footer"] {
            display: grid;
            grid-gap: var(--space-l);
            grid-template-columns: 1fr 1fr;
            padding-bottom: var(--space-l);
        }
        `;

    const html = ` 
      <card-element header="Players's association" image="images/front-page/players-association.jpg"> 
          <p>
            The International Footbag Players' Association is a volunteer-run,
            charitable non-profit corporation, dedicated to the growth of
            footbag play world-wide as an amatur and competitive sport
          </p>
          <div slot="footer">
            <a href="">${arrowRight}&nbsp;IFPA Organization</a>
            <a href="">${arrowRight}&nbsp;Member area / login</a>
            <a href="">${arrowRight}&nbsp;Join now</a>
            <a href="">${arrowRight}&nbsp;Official rules</a>
          </div>
        </card-element>
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

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name) {
    if (name === 'open') {
      this._render();
    }
  }

  get checked() {
    return this.hasAttribute('open');
  }
}

customElements.define('players-association', PlayersAssociation);
