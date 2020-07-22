class EventItem extends HTMLElement {
  _render() {
    const style = `
      article {
        background-color: var(--color-white);
        padding: var(--space-l);
        border-bottom: 1px solid #eee;
        max-width: 100vw;
      }
      article.highlight {
        background-color: var(--color-redlight);
      }
      a {
        color: inherit; 
        text-decoration: inherit; 
      }
      a:hover {
        color: var(--color-bluehover);
       }
      h3 {
        color: var(--color-blue);
        font-size: var(--font-size-large);
        
        margin: var(--space-s) 0 var(--space-m) 0;
      }
      .event_date {
        color: var(--color-red);
        margin: var(--space-xs) auto 0 0;
        font-size: var(--font-size-medium);
        text-transform: uppercase;
      }
      .event_location {
        color: var(--color-blue);
        font-size: var(--font-size-medium);
      }
      .event_contact {
        margin: var(--space-m) auto 0 0;
        color: var(--color-gray-800);
        font-size: var(--font-size-medium);
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
          <div class="event_date">
          ${this._getAttribute('date')}
          </div>
          <div class="event_location">
          ${this._getAttribute('location')}
          </div>
          <div class="event_contact">
          ${this._getAttribute('contact')}
          </div>
          <div>
            ${
              Boolean(this.getAttribute('open')) === true ? '<slot></slot>' : ''
            }
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

  _addClassIfAttribute(className, attributeName) {
    return this.getAttribute(attributeName) === null ? '' : className;
  }

  _getAttribute(attributeName) {
    return this.getAttribute(attributeName) || '';
  }
}

customElements.define('event-item', EventItem);
