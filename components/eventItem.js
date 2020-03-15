class EventItem extends HTMLElement {
  connectedCallback() {
    const style = `
    
    .event {
      border-bottom: 1px solid #ccc;
      padding: var(--space-m) 0 var(--space-l) 0;
    }

    .event_date {
      color: var(--color-red);
      margin: var(--space-l) auto 0 0;
      font-size: var(--font-size-small);

      text-align: right;
      text-transform: uppercase;
    }

    .event_header {
      font-size: var(--font-size-medium);
      margin: var(--space-m) 0;
    }

    .event_location {
      color: var(--color-blue);
    }

    .event_contact {
      margin-top: var(--space-m);
      color: var(--color-gray-800);
      font-size: var(--font-size-small);
    }
    `;

    const html = `
      <article class="event">
        <h3 class="event_header">${this.getAttribute("header")}</h3>
        <div class="event_location">${this.getAttribute("location")}</div>

        <div class="event_contact">
          ${this.getAttribute("contact")}
        </div>
        <div class="event_date">${this.getAttribute("date")}</div>
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

customElements.define("event-item", EventItem);
