import { css, html, LitElement } from 'lit-element';

class EventItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      article {
        background-color: var(--color-white);
        /*background-color: #f7f7f8;*/

        padding: var(--space-xl);
        max-width: 100%;
      }

      :host([open]) article {
        border-bottom: none;
      }

      :host([highlight]) article {
        background-color: var(--color-redlight);
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
        /*border-left: 3px solid var(--color-red);*/
        color: var(--color-blue);
        margin: 0;
        padding: var(--space-xl) var(--content-padding);
      }

      :host([open]) h3 {
        font-size: var(--font-size-xxl);
      }

      @media only screen and (min-width: 765px) {
        :host([open]) h3 {
          font-size: var(--font-size-xxxl);
        }
      }

      .date {
        color: var(--color-red); /* #348ba8; */
        margin-right: var(--space-s);
        padding-right: var(--space-s);
        border-right: 2px solid var(--color-red);
      }

      .header {
        margin-left: var(--space-s);
      }

      .details {
        display: flex;
        align-items: center;
      }

      .details-icon {
        color: var(--color-red);
        padding-right: var(--space-m);
      }

      .location {
        color: var(--color-blue);
        font-size: var(--font-size-m);
      }
      .contact {
        margin: var(--space-l) auto 0 0;
        color: var(--color-gray-800);
        font-size: var(--font-size-xl);
      }
      .body {
        margin: var(--space-xl);
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
    `;
  }

  render() {
    return html`
      <content-modal open="${this.open}">
        <article>
          <h3>
            <a class="header" href="/event/${this.header}">
              ${this.open === undefined
                ? html` <svg-icon
                    class="details-icon"
                    path="images/icons.svg#calendar"
                  ></svg-icon>`
                : ''}
              <div class="header-content">
                <span class="date">
                  ${this.date}
                </span>

                ${this.header}

                <div class="location">
                  ${this.location}
                </div>
              </div>
            </a>
          </h3>

          ${this.open === true
            ? html`
                <div class="contact">
                  ${this.contact}
                </div>
                <div class="body">
                  <slot></slot>
                </div>
              `
            : ''}
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
