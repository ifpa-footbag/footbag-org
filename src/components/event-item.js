import { css, html, LitElement } from 'lit-element';

import { sharedStyles } from '../shared-styles.js';
import './page-heading.js';

class EventItem extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: block;
        }

        article {
          max-width: 100%;
        }

        a {
          display: flex;
          color: inherit;
          text-decoration: inherit;
        }

        a:hover {
          color: var(--color-bluehover);
        }

        h3 {
          color: var(--color-blue);
        }

        :host([open]) h3 {
          font-size: var(--font-size-xxl);
          margin: var(--space-xl) 0;
        }

        .first-line {
          font-size: var(--font-size-m);
        }

        .header {
          margin-left: var(--space-s);
        }

        .details {
          display: flex;
          align-items: center;
        }

        .details-icon {
          color: var(--color-blue);
          opacity: 0.3;
          min-width: 32px;
        }

        :host([highlight]) .details-icon {
          opacity: 0.3;
        }

        .contact {
          margin: var(--space-l) auto 0 0;
          color: var(--color-gray-800);
          font-size: var(--font-size-xl);
        }
        .body {
          margin: var(--space-xl) 0;
        }
        .modal {
          position: fixed;
          background-color: rgba(255, 255, 255, 1);
          top: 0;
          right: 10%;
          bottom: 0;
          left: 10%;
          padding: 4rem;
        }
      `,
    ];
  }

  render() {
    return html`
     ${
       this.open
         ? html` <page-heading
             topic="${this.date}"
             header="${this.header}"
             date="${this.location}"
           ></page-heading>`
         : html`
             <article>
               <h3>
                 <a class="header" href="/event/${this.header}">
                   <svg-icon
                     class="details-icon"
                     path="images/icons.svg#calendar"
                     large
                   ></svg-icon>
                   <div class="header-content section--margin">
                     <div class="first-line">
                       ${this.date}, ${this.location}
                     </div>

                     ${this.header}
                   </div>
                 </a>
               </h3>
             </article>
           `
     }
          ${
            this.open === true
              ? html`
                  <div class="contact section--margin">
                    ${this.contact}
                  </div>
                  <div class="body">
                    <slot></slot>
                  </div>
                `
              : ''
          }
        </article>
      </content-modal>
    `;
  }

  static get properties() {
    return {
      contact: {
        type: String,
      },
      date: {
        type: String,
      },
      header: {
        type: String,
      },
      highlight: {
        type: Boolean,
      },
      location: {
        type: String,
      },
      open: {
        type: Boolean,
      },
    };
  }
}

customElements.define('event-item', EventItem);
