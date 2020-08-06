import { arrowRight } from './icons.js';

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
        font-size: var(--font-size-medium);
        text-transform: uppercase;
      }

      section {
        margin: var(--space-l);
        padding: var(--space-l)
      }

      .copyright {
        margin-top: var(--space-xl);
        color: var(--color-gray-500);
        font-size: var(--font-size-medium);
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
      `;

    const html = `
    <footer>
      <header>
        <img width="24px" height="24px" src="images/logo.png"></img>
        <h3>
          Footbag Worldwide
        </h3>
      </header>
      <main>
        <section>
          <h4>Contact us</h4>
          <p>What is missing from the site? Give us feedback! 
            <a href="mailto:feedback@footbag.org">${arrowRight}&nbsp;feedback@footbag.org</a>
          </p>
          <p>Any other matters? 
            <a href="mailto:contact@footbag.org">${arrowRight}&nbsp;contact@footbag.org</a>
          </p>  
        </section>
    
        <section>
          <h4>Discuss online</h4>
          <p><a href="https://www.facebook.com/footbag.org/">${arrowRight}&nbsp;Facebook</a></p>
          <p><a href="https://www.instagram.com/footbag_sports/">${arrowRight}&nbsp;Instagram</a></p>  
        </section>

        <aside>
          <img src="images/ifpa.png" width="170px"></img>
          <div class="button">
            <a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated">${arrowRight}&nbsp;Donate</a>
          </div>
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
