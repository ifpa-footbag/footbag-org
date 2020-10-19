import { arrowRight } from './icons.js';

import './svg-icon.js';

class PageFooter extends HTMLElement {
  _render() {
    const style = `
      
      footer {
        background: var(--color-blue);
        color: var(--color-white);
        padding: var(--space-xl);
      }

      header {
        display: flex;
      }

      img {
        display: inline-block;
        margin-right: var(--space-m);
      }

      h3 {
        margin: 0;
      }

      @media only screen and (min-width: 800px) {
        main{
          display: flex;
        }
      }

      h4 {
        color: var(--color-gray-500);
        font-size: var(--font-size-m);
        text-transform: uppercase;
      }

      section {
        margin: var(--space-l);
        padding: var(--space-l)
      }

      .copyright {
        margin-top: var(--space-xl);
        color: var(--color-gray-500);
        font-size: var(--font-size-m);
        text-align: center;
      }

      svg {
        fill: var(--color-white);
      }

      aside {
        display: flex;
        flex-direction: column;
        margin-left: auto;
      }

      .button {
      
      }

      a {
        color: var(--color-white);
        text-decoration: none;
      }

      .button a {
        background: var(--color-white);
        border-radius: 5rem;
        color: var(--color-blue);
        display: block;

        width: 10rem; 
        padding: var(--space-m);      
        text-align: center;
      }

      .button a svg {
        fill: var(--color-blue);
      }

      a {
        display: block;
      }

      .worldwide-logo {
        width: 12rem;
        height: 45px;
      }
  
      @media only screen and (min-width: 450px) {
        .worldwide-logo {
          width: 14rem;
        }
      }
  
      @media only screen and (min-width: 700px) {
        .worldwide-logo {
          width: 18rem;
        }
      }

      .ifpa-logo {
        fill: var(--color-white);
        height: 5rem;
        width: 10rem;
      }
      `;

    const html = `
    <footer>
      <header>
        <svg-icon class="worldwide-logo" path="images/icons.svg#footbag-worldwide"></svg-icon>
      </header>
      <main>
    
        <section>
          <h4>Discuss online</h4>
          <p><a href="https://www.facebook.com/footbag.org/">${arrowRight}&nbsp;Facebook</a></p>
          <p><a href="https://www.instagram.com/footbag_sports/">${arrowRight}&nbsp;Instagram</a></p>  
        </section>

        <section>
          <h4>Support Us</h4>
          <p> 
          </div>
            <a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated">${arrowRight}&nbsp;Donate now</a>
          </p>
        </section>

        <aside>
          <svg-icon class="ifpa-logo" path="images/icons.svg#ifpa-logo"></svg-icon>
                  
          <div class="button">
          
            <a href="mailto:info@footbag.org">Contact Us</a></div>
        </aside>

        </main>


        <div class="copyright">
          Footbag.org 2020, International Footbag Players's Association, Inc. (a non-profit corporation)
        </div>
      </footer>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}`;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('page-footer', PageFooter);
