import './content-modal.js';

class NewsItem extends HTMLElement {
  _render() {
    const style = `
      :host {
        background-color: var(--color-white);
        display: inline-block;
        font-size: var(--font-size-large);
        max-width: 100vw;
      }
      a {
        color: inherit; 
        text-decoration: inherit; 
      }

      article {
        padding: var(--grid-panel-padding);
      }

      h3 {
        color: var(--color-blue);
        font-style: italic;
        margin: 0 0 var(--space-m) 0;
      }

      img {
        max-width: 100%;
        padding-bottom: var(--space-m);
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
    `;

    const html = `
    <article>
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

  attributeChangedCallback() {
    console.log('Custom square element attributes changed.');
    this._render();
  }

  get checked() {
    return this.hasAttribute('open');
  }
}

customElements.define('news-item', NewsItem);
