import "./content-modal.js";

class EventItem extends HTMLElement {
  constructor() {
    super();
    this.open = false;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._render();
  }

  _render() {
    const style = `
      article {
        background-color: var(--color-white);
        padding: var(--grid-panel-padding);
        margin-bottom: var(--space-m);
        border-bottom: 1px solid #eee;
      }

      article.highlight > h3 {
        color: var(--color-red);
        font-size: var(--font-size-large);
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
      .modal {
        position: fixed;
        background-color: rgba(255, 255, 255, 1);
        top: 0;
        right: 10%;
        bottom: 0;
        left: 10%;
        padding: 4rem;
      }
      `;

    const html = `
      <content-modal open="${this.open}">
        <article class="${this._addClassIfAttribute("highlight", "highlight")}">
          <h3><a class="">${this._getAttribute("header")}</a></h3>
          <div class="event_location">${this._getAttribute("location")}</div>

          <div class="event_contact">
            ${this._getAttribute("contact")}
          </div>
          <div class="event_date">${this._getAttribute("date")}</div>
            ${this.open === true ? "<slot>" : ""}
        </article>
      </content-modal>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}`;

    this.shadowRoot.querySelector("a").addEventListener("click", () => {
      this.open = !this.open;
      this._render();
    });
  }

  _addClassIfAttribute(className, attributeName) {
    return this.getAttribute(attributeName) === null ? "" : className;
  }

  _getAttribute(attributeName) {
    return this.getAttribute(attributeName) || "";
  }
}

customElements.define("event-item", EventItem);
