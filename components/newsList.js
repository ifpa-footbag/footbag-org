import { news } from "../news/news.js";

class NewsList extends HTMLElement {
  connectedCallback() {
    const style = `
      news-item:nth-child(3n) {
        grid-row: span 3;
      }

      news-item:nth-child(3n + 1) {
        grid-row: span 4;
      }
      news-item:nth-child(3n + 2) {
        grid-row: span 5;
      }
    `;

    const html = news;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define("news-list", NewsList);
