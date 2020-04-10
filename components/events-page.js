import "./grid-two-columns.js";
import "./navigation-bar.js";
import "./hero-video.js";

import { events } from "../events/events.js";

class EventsPage extends HTMLElement {
  connectedCallback() {
    const style = `
    `;

    const html = `
  
    <navigation-bar back></navigation-bar>
        <grid-two-columns>
          <header>
            <h2>events</h2>
          </header>
          ${events}
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

customElements.define("events-page", EventsPage);
