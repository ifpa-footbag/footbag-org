class NewsItem extends HTMLElement {
  connectedCallback() {
    const style = `
      :host{
        background-color: var(--color-white);
      }
      img {
        max-width: 100%;
        padding-bottom: var(--space-m);
      }

      .panel {
        background-color: white;
        padding: var(--space-l);
      }

      .panel--highlight {
        border: 3px solid var(--color-blue);
      }

      .panel--highlight-solid {
        background-color: var(--color-blue);
        color: var(--color-white);
      }
      .panel--highlight-solid > .news_header {
        color: var(--color-orange);
      }

      .panel--highlight-solid > .news_body {
        color: var(--color-white);
      }

      .news_header {
        color: var(--color-blue);
        margin-bottom: var(--space-m);
      }
    `;

    const html = `
    <article class="panel panel--news">
    ${
      this.getAttribute("image") !== null
        ? `<img src="${this.getAttribute("image")}" />`
        : ``
    } 
    <h3 class="news_header">${this.getAttribute("header")}</h3>
    <div class="news_body">
      <slot>
    </div>
  </article>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define("news-item", NewsItem);
