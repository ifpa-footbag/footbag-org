import './content-modal.js';

class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.open = false;
    this.short = true;
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  attributeChangedCallback() {
    console.log('Custom square element attributes changed.');
    this._render();
  }

  set open(value) {
    const open = Boolean(value);
    if (open) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  get checked() {
    return this.hasAttribute('open');
  }

  _render() {
    const style = `
      :host {
        background-color: var(--color-white);
        display: inline-block;
        font-size: var(--font-size-medium);
      }
      article {
        padding: var(--grid-panel-padding);
      }

      h3 {
        color: var(--color-blue);
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

      .read-more {
        color: var(--color-red);
        display: block;
        
        font-style: italic;s
        font-weight: var(--font-weight-bold);

        margin: var(--space-l) 0 0 0;
        text-align: right;
        text-decoration: underline;
      }
    `;

    const html = `
    <article>
      ${
        this.getAttribute('image') !== null
          ? `<img src="${this.getAttribute('image')}" />`
          : ``
      } 
      <h3 class="news_header">${this.getAttribute('header')}</h3>
    
      <div class="news_body">
        ${this.getAttribute('short')}
        ${this.open === true ? '<slot>' : ''}
      </div>
      <!--a class="read-more">
        Read more
      </a-->
    </article>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('news-item', NewsItem);
