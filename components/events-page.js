import "./page-one-column.js";
import "./navigation-bar.js";
import "./hero-video.js";

import { events } from "../events/events.js";

class EventsPage extends HTMLElement {
  connectedCallback() {
    const style = `
    `;

    const html = `
  
    <navigation-bar back></navigation-bar>
   
        <page-one-column>
          <header class="header">
            <h2>events</h2>
          </header>
          ${events}
        </page-one-column>
    
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;

    setTimeout(() => {
      this._hideEvents();
    }, 50);
  }

  _render() {}

  _hideEvents() {
    const items = this.shadowRoot
      .querySelector("page-one-column")
      .querySelectorAll("event-item");

    items.forEach((item, index) => {
      if (index === Number.parseInt(this.location.params.event)) {
        item.setAttribute("open", true);
        item.open = true;
      } else {
        item.style.display = "none";
      }
    });
  }
}

customElements.define("events-page", EventsPage);
