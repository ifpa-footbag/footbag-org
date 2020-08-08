import './card-element.js';
import './news-item.js';
import { arrowRight } from './icons.js';

class InfoAndLinks extends HTMLElement {
  _render() {
    const style = `
        :host {
          display: block;
          font-size: var(--font-size-l);
          margin: var(--space-l) 0;
          max-width: 100%;
        }

        section {
          display: grid;
          grid-gap: var(--grid-gap);

          padding: 0 var(--grid-gap);
          margin: 0 auto;
        }
      
        @media only screen and (min-width: 692px) {
          section {
            grid-template-columns: 1fr 1fr;
            
          }
        }

        card-element {
          background-color: var(--color-white);
        }

        card-element:nth-child(even) {
          --header-color: var(--color-red);
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
      <section>
        <!-- LEARN MORE ABOUT FOOTBAG -->
        <card-element header="Footbag" image="images/front-page/footbag.jpg"> 
            <p>
              is a series of sports where players use their feet to
              kick a small round bag or ball. Footbag's current form came
              about in 1972 in North America and has continued evolving
              into a popular sport that is played all over the world.
            </p>
            <div slot="footer">
              <a href="/getting-started">${arrowRight}&nbsp;Getting started</a>
              <a href="/footbag">${arrowRight}&nbsp;Learn more about footbag</a>
              <a href="http://footbag.org/reference/-/Footbag_Reference_Area">${arrowRight}&nbsp;Footbag disciplines</a> 
              <a href="http://www.footbag.org/rules/">${arrowRight}&nbsp;Official rules</a>
            </div>
          </card-element>
        
        <!-- PLAYERS ASSOCIATION -->
        <card-element header="Players' association" image="images/front-page/players-association.jpg"> 
            <p>
              The International Footbag Players' Association (IFPA) is a volunteer-run,
              charitable non-profit corporation, dedicated to the growth of
              footbag play world-wide as an amateur and competitive sport
            </p>
            <div slot="footer">
              <a href="http://footbag.org/members/home">${arrowRight}&nbsp;Join now</a>
              <a href="http://footbag.org/members/home">${arrowRight}&nbsp;Member area / login</a>

              <a href="http://footbag.org/events/results">${arrowRight}&nbsp;Tournament results</a>
              <a href="http://www.footbag.org/ifpa/">${arrowRight}&nbsp;IFPA Organization</a>
            
              
              
             
            </div>
          </card-element>
        </section>
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

customElements.define('info-and-links', InfoAndLinks);
