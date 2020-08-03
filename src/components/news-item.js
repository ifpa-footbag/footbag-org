import { calendarAlt } from './icons.js';

class NewsItem extends HTMLElement {
  _render() {
    const style = `
      :host {
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-large);
        max-width: 100%;
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
        margin: 0 0 var(--space-m) 0;
      }

      img {   
        max-width: 100%;
        width: 100%;
      }


      .news_header {
        padding: var(--grid-panel-padding);
        margin: 0;
      }

      .news_body {
        padding: 0 var(--grid-panel-padding);
      }

      .news_body {
        line-height: var(--line-height-increased);
      }

      footer {
        color: var(--color-gray-800);
        font-size: var(--font-size-medium);

        padding: var(--grid-panel-padding);
        margin-top: auto;

        text-transform: uppercase;
      }
      svg {
        fill: var(--color-gray-800);
      }
    `;

    const html = ` 
      ${
        this.getAttribute('image') !== null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      }
      
      <h3 class="news_header">
        <a href="/news/${this.getAttribute('header')}" class="nav-item">
          ${this.getAttribute('header')}
        </a>
      </h3>
      
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
