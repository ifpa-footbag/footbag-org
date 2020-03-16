import "./eventItem.js";

class EventList extends HTMLElement {
  connectedCallback() {
    const style = `
    :host {
      background-color: var(--color-white);
    }

    header {
      background-color: var(--color-red);
      color: var(--color-white);
      
      padding: var(--grid-panel-padding);
    }

    h2 {
      font-size: var(--font-size-medium);
      margin: 0;
    }

    section {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: minmax(44px, auto);
      grid-gap: var(--grid-gap);
    }

    `;

    const html = `
      <header>
        <h2>Events</h2>
      </header>

      <section>
        <event-item
          header="Swiss Footbag Open"
          location="Lausanne, Vaud, Switzerland"
          contact="Karim Daouk, kshred@footbag.org, 0041 79 238 78 87"
          date="March 28-29, 2020"
        >
        </event-item>
        <event-item
          header="Bulgarian Footbag Championships"
          location="Stara Zagora, Bulgaria"
          contact="Ivan Stanev, navi6venats9@gmail.com, +359883512133, Radoslav Rusev,
          radoslavrusev@gmail.com, 00359894273320"
          date="May 1-3, 2020"
        >
        </event-item>
        <event-item
          header="Mud Belt 2020 presented by Memphis Footworks"
          location="Moscow, Tennessee, USA"
          contact="Walt Houston, walthouston7@gmail.com"
          date="May 2-3, 2020"
        >
        </event-item>

        <event-item
          header="Lake Erie Footbag Tournament"
          location="ERIE, Pennsylvania, USAs"
          contact="Anthony Ritz, anthony.l.ritz@gmail.com, 814-431-4139 (Prize money
        event)"
          date="June 6-7, 2020"
        >
        </event-item>
      </section>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define("event-list", EventList);
