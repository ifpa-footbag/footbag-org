import "./grid-two-columns.js";
import "./navigation-bar.js";
import "./hero-video.js";

import { news } from "../news/news.js";

class NewsPage extends HTMLElement {
  connectedCallback() {
    const style = `
    `;

    const html = `
  
    <navigation-bar back></navigation-bar>
        <grid-two-columns>
          <header>
            <h2>News</h2>
          </header>
          ${news}
        </grid-two-columns>
    
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

customElements.define("news-page", NewsPage);
