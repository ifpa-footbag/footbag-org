import { css, html, LitElement } from 'lit-element';

import './contact-us.js';
import './svg-icon.js';

class PageFooter extends LitElement {
  static get styles() {
    return css`
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
        main {
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
        padding: var(--space-l);
      }

      .copyright {
        margin-top: var(--space-xl);
        color: var(--color-gray-500);
        font-size: var(--font-size-m);
        text-align: center;
      }

      svg-icon {
        fill: var(--color-white);
        width: 14px;
        height: 14px;
      }
      aside {
        display: flex;
        flex-direction: column;
        margin-left: auto;
      }

      a {
        color: var(--color-white);
        text-decoration: none;
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
  }

  render() {
    return html`
    <footer id="footer">
      <header>
        <svg-icon class="worldwide-logo" path="images/icons.svg#footbag-worldwide"></svg-icon>
      </header>
      <main>
    
        <section>
          <h4>Join Community</h4>
          <p>
              <a href="https://www.facebook.com/footbag.org/">
              <svg-icon
                path="images/icons.svg#arrow-right"
              ></svg-icon>&nbsp;Facebook
              </a>
          </p>

          <p>
            <a href="https://www.facebook.com/groups/footbag">
            <svg-icon path="images/icons.svg#arrow-right"></svg-icon>&nbsp;Facebook Freestyle</a>
          
          </p>
          <p>        
            <a href="https://www.facebook.com/groups/154116001290293"><svg-icon path="images/icons.svg#arrow-right"></svg-icon>&nbsp;Facebook Net
          </a>
          </p>
          <p>
              <a href="https://www.instagram.com/footbag_sports/">
              <svg-icon path="images/icons.svg#arrow-right"></svg-icon>&nbsp;Instagram
            </a>
          </p>

          <p>
          <a href="https://discord.com/invite/DAtQwG4">  <svg-icon path="images/icons.svg#arrow-right"></svg-icon>&nbsp;Discord</a>
          </p>
        </section>

        <section>
          <h4>Support Us</h4>
          <p> 
          </div>
            <a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated">
            <svg-icon
                    path="images/icons.svg#arrow-right"
                  ></svg-icon>
            &nbsp;Donate now</a>
          </p>
        </section>

        <aside>
          <svg-icon class="ifpa-logo" path="images/icons.svg#ifpa-logo"></svg-icon>
                  
          <Contact-us></Contact-us>
        </aside>

        </main>


        <div class="copyright">
          Footbag.org 2020, International Footbag Players's Association, Inc. (a non-profit corporation)
        </div>
      </footer>
    `;
  }
}

customElements.define('page-footer', PageFooter);
