class NewsItem extends HTMLElement {
  _render() {
    const style = `
      :host {
        background-color: var(--color-white);
        display: inline-block;
        font-size: var(--font-size-large);
        max-width: 100vw;
      }
      :host([long]) {
        grid-row: span 4 !important;
      }
      a {
        color: inherit; 
        text-decoration: inherit; 
      }
      a:hover {
        color: var(--color-bluehover);
       }
      article {
        padding: var(--grid-panel-padding);
      }
      h3 {
        color: var(--color-blue);
        margin: 0 0 var(--space-m) 0;
      }
      img {
        padding-bottom: var(--space-m);
        max-height: 8rem;
        float: right;
        margin: 0 var(--space-l);
      }
      article[highlight] {
        border: 3px solid var(--color-blue);
      }
      article[highlight-solid] {
        background-color: var(--color-blue);
        color: var(--color-white);
      }
      article[highlight-solid] > .news_header {
        color: var(--color-orange);
      }
      article[highlight-solid] > .news_body {
        color: var(--color-white);
      }
      .news_body {
        line-height: var(--line-height-increased);
      }
      footer {
        color: var(--color-gray-800);
        margin: var(--space-l) auto 0 0;
        font-size: var(--font-size-medium);
        text-transform: uppercase;
      }
    `;

    const html = `
    <article> 
      <h3 class="news_header">
        <a href="/news/${this.getAttribute('header')}" class="nav-item">
          ${this.getAttribute('header')}
        </a>
      </h3>
      ${
        this.getAttribute('image') !== null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      }
    
      <div class="news_body">
        ${this.getAttribute('short') || ''}
        ${Boolean(this.getAttribute('open')) === true ? '<slot></slot>' : ''}
      </div>
      <footer>
        ${this.getAttribute('date') || ''}
      </footer>
  
    </article>
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
