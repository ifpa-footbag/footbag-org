class GridTemplate extends HTMLElement {
  connectedCallback() {
    const style = `
      slot {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-auto-rows: minmax(22px, auto);
        grid-gap: var(--grid-gap);

        justify-items: stretch;
        align-items: stretch;
        margin: var(--grid-gap);
      }

      ::slotted(:nth-child(even)) {
        grid-row: span 3;
      }

      ::slotted(:nth-child(odd)) {
        grid-row: span 2;
      }



      .header {
        background-color: var(--color-blue);
        color: var(--color-white);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-boldest);
        text-transform: uppercase;
        grid-column: 1 / -1;
        padding: var(--space-s) var(--grid-panel-padding);
        margin: 0;
      }

      .header.red {
        background-color: var(--color-red);
      }

      h2 {
        font-size: var(--font-size-xlarge);
        font-weight: 900;

        margin: 0;
        padding: var(--space-m) 0;

      }

    `;

    const html = `
    <header class="header ${this.getAttribute('header-color')}">
      <h2>${this.getAttribute('header') || ''}</h2>
    </header>
    <slot></slot>`;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('grid-template', GridTemplate);
