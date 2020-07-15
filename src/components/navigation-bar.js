class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const style = `
    a {
      color: inherit;
      text-decoration: inherit;
    }
    nav {
      background-color: var(--color-blue);
      color: var(--color-white);
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      max-width: var(--max-nav-width);
      
      top: 0;
      z-index: 1;
    }
    .nav-item {
      font-size: var(--font-size-medium);
      padding: var(--space-xl);
      text-transform: uppercase;
      white-space: nowrap;
    }
    @media only screen and (max-width: 500px) {
      .nav-item {
        padding-left: var(--space-l);
        padding-right: var(--space-l);
      }
    }
    .nav-item--selected {
      color: var(--color-orange);
    }
    .nav-item--back {
      margin-right: auto;
    }
    .nav-item:last-child {
      border-left: 1px solid var(--color-gray-300);
    }
    .back {
      background-color: var(--color-blue);
      color: var(--color-orange);
      font-weight: var(--font-weight-boldest);
      position: fixed;
      bottom: 0;
      left: 0;
      padding: var(--space-m) var(--space-s) var(--space-m) var(--space-s);
    }
    `;

    const html = `
    <nav>
      ${
        this.getAttribute('back') !== null
          ? `<div class="back">
              <a href="/footbag-org/" class="nav-item nav-item--back">
                BACK
              </a>
             </div>`
          : ''
      }
      <a href="/footbag" class="nav-item">Footbag</a>
      <a href="/news/all" class="nav-item">News</a>
      <a href="/event/all" class="nav-item u-hide--small">events</a>
      <!--a class="nav-item u-hide--small">
        Media
      </a-->
      <a href="http://footbag.org/ifpa/" target="_blank" class="nav-item">
        IFPA
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" fill="#fff"/></svg>
        <!--svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 292.4 292.4"
        >
          <path
            fill="#fff"
            d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"
          ></path>
        </svg-->
      </a>
    </nav>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
