import { calendarAlt } from './icons.js';

class NewsItem extends HTMLElement {
  _render() {
    const style = `
      :host {
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-l);
        max-width: 100%;
        overflow-wrap: anywhere;

        --content-padding: var(--space-xl);
      }

      :host([open]) {
        padding: 0;
        --content-padding: 0;
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
        margin: 0;
        padding: var(--space-xl) var(--content-padding);
      }

      img {   
        max-width: 100%;
        width: 100%;
      }

      :host([open]) img {
        margin-bottom: var(--space-xl);
      }

      :host([open]) h3 {
        font-size: var(--font-size-xxl);
      }

      @media only screen and (min-width: 765px) {
        :host([open]) h3 {
          font-size: var(--font-size-xxxl);
        } 
      }

      .news_body {
        padding: 0 var(--content-padding);
      }

      .news_body {
        line-height: var(--line-height-increased);
      }

      footer {
        color: var(--color-gray-800);
        font-size: var(--font-size-m);

        padding: var(--content-padding);
        margin-top: auto;

        text-transform: uppercase;
      }
      svg {
        fill: var(--color-gray-800);
      }
    `;

    const html = ` 
      ${
        this.getAttribute('image') !== null &&
        this.getAttribute('open') === null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      }
      
      <h3>
        <a href="/news/${this.getAttribute('header')}" class="nav-item">
          ${this.getAttribute('header')}
        </a>
      </h3>

      ${
        this.getAttribute('image') !== null &&
        this.getAttribute('open') !== null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      }
      
      <div class="news_body">
        ${this.getAttribute('short') || ''}
        ${Boolean(this.getAttribute('open')) === true ? '<slot></slot>' : ''}
      </div>
      <footer>
        ${calendarAlt} ${this.getAttribute('date') || ''}
      </footer>
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

customElements.define('news-item', NewsItem);
