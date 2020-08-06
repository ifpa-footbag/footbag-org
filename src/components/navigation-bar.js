import './main-menu.js';

class NavigationBar extends HTMLElement {
  _render() {
    const style = `
    a {
      color: inherit;
      text-decoration: inherit;
    }
    nav {
      background-color: var(--color-blue);
      color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 auto;
      padding-right: var(--space-m);
      top: 0;
      z-index: 1;
    }

    
    img {
      height: 24px;
      width: 24px;

      padding-left: var(--space-l);
    }
    h1 {
      font-size: var(--font-size-large);
      margin: 0;
      padding: 0 0 0 var(--space-l);
      margin-right: auto;
    }

    a {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
      padding: var(--space-xl) var(--space-m);
      text-transform: uppercase;
      white-space: nowrap;
    }

    @media only screen and (min-width: 600px) {
      img {
        height: 36px;
        width: 36px;
      }
      
      h1 a {
        font-size: var(--font-size-xlarge);
      }

      a {
        padding-left: var(--space-xl);
        padding-right: var(--space-xl);
      }
    }

    
    .ifpa {
      border-left: 1px solid var(--color-gray-300);
    }
    
    .back {
      background-color: var(--color-blue);
      color: var(--color-orange);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: var(--font-weight-boldest);
      position: fixed;
      bottom: 5%;
      left: 5%;

      text-align: center;
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
    }

    svg {
      fill: var(--color-white);
      padding-left: var(--space-m);
      padding-bottom: 2px;
    }
    `;

    const html = `
    <nav>
      ${
        this.getAttribute('back') !== null
          ? `<div class="back">
              <a href="/" class="back-link">
                BACK
              </a>
             </div>`
          : ''
      }
      
      <img width="24px" height="24px" src="images/logo.png"></img>
      <h1>
        <a href="/">Footbag Worldwide</a>
      </h1>
    
      <main-menu></main-menu>
  
      <!--a href="http://footbag.org/ifpa/" target="_blank" class="ifpa">
        IFPA
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" fill="#fff"/></svg>
        -->
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

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('navigation-bar', NavigationBar);
