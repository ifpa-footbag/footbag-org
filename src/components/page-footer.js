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

      button {
        background: var(--color-white);
        border-radius: 5rem;
        padding: var(--space-m);

        max-width: 10rem;        
      }

      a {
        color: var(--color-white);
        text-decoration: none;
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
          <h4>Feedback</h4>
          <p>${arrowRight}&nbsp;Organizing event? events@footbag.org</p>
          <p>${arrowRight}&nbsp;Any other matters? other@footbag.org</p>  
        </section>
    
        <section>
          <h4>Discuss online</h4>
          <p><a href="https://www.facebook.com/footbag.org/">${arrowRight}&nbsp;Facebook</a></p>
          <p><a href="https://www.instagram.com/footbag_sports/">${arrowRight}&nbsp;Instagram</a></p>  
        </section>

        <aside>
          <img src="images/ifpa.png" width="170px"></img>
          <!--button>Contact us</button-->
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
