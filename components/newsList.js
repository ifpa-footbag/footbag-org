import "./newsItem.js";
import { news } from "../news/news.js";

class NewsList extends HTMLElement {
  connectedCallback() {
    const style = `
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: auto;
        grid-gap: var(--grid-gap);
        margin: 0 var(--grid-gap) var(--grid-gap) var(--grid-gap);      
      }

      header {
        background-color: var(--color-blue);
        color: var(--color-white);
        
        grid-column: 1 / -1;
        padding: var(--grid-panel-padding);
        margin: 0 var(--grid-gap-negative);
      }

      h2 {
        font-size: var(--font-size-medium);
        margin: 0;
      }
    `;

    const html = `
    <header>
      <h2>Footbag</h2>
    </header>
    ${news}`;

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
