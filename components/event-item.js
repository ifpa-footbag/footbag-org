import './content-modal.js';

class EventItem extends HTMLElement {
  _render() {
    const style = `
      article {
        background-color: var(--color-white);
        padding: var(--space-m) var(--space-m) var(--space-l) var(--space-m);
        border-bottom: 1px solid #eee;
        max-width: 100vw;
      }

      article.highlight > h3 {
        color: var(--color-red);
      }

      a {
        color: inherit; 
        text-decoration: inherit; 
      }

      h3 {
        color: var(--color-blue);
        font-size: var(--font-size-large);
        
        margin: var(--space-s) 0 var(--space-m) 0;
      }

      .event_location {
        color: var(--color-blue);
      }

      .event_contact {
        margin: var(--space-m) 0;
        color: var(--color-gray-800);
        font-size: var(--font-size-large);
      }

      .event_date {
        color: var(--color-red);
        margin: var(--space-xl) auto 0 0;
        font-size: var(--font-size-medium);

        text-align: right;
        text-transform: uppercase;
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

    const html = `
      <content-modal open="${this.open}">
        <article class="${this._addClassIfAttribute('highlight', 'highlight')}">
          <h3>
            <a href="/event/${this.getAttribute('header')}">
              ${this._getAttribute('header')}
            </a>
          </h3>
          <div class="event_location">${this._getAttribute('location')}</div>

          <div class="event_contact">
            ${this._getAttribute('contact')}
          </div>
          <div>
            ${
              Boolean(this.getAttribute('open')) === true ? '<slot></slot>' : ''
            }
          </div>

          <div class="event_date">
            ${this._getAttribute('date')}
          </div>
            
        </article>
      </content-modal>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}`;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
      this._render();
    }
  }

  _addClassIfAttribute(className, attributeName) {
    return this.getAttribute(attributeName) === null ? '' : className;
  }

  _getAttribute(attributeName) {
    return this.getAttribute(attributeName) || '';
  }
}

customElements.define('event-item', EventItem);
