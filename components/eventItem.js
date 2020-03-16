class EventItem extends HTMLElement {
  connectedCallback() {
    const style = `
    
    article {
      padding: var(--grid-panel-padding);
      margin-bottom: var(--space-m);
      border-bottom: 1px solid #eee
    }

    h3 {
      font-size: var(--font-size-medium);
      margin: var(--space-s) 0 var(--space-m) 0;
    }

    .event_location {
      color: var(--color-blue);
    }

    .event_contact {
      margin-top: var(--space-m);
      color: var(--color-gray-800);
      font-size: var(--font-size-small);
    }

    .event_date {
      color: var(--color-red);
      margin: var(--space-l) auto 0 0;
      font-size: var(--font-size-small);

      text-transform: uppercase;
    }
    `;

    const html = `
      <article>
        <h3>${this.getAttribute("header")}</h3>
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
