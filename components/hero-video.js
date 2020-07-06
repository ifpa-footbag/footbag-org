class HeroVideo extends HTMLElement {
  constructor() {
    super();

    const style = `
      :host{
        display: block;
      }

      .hero {
        margin: 0 auto;
        max-width: var(--max-content-width);
        max-height: 100%;
      }

      .embedded-video {
        height: auto;
        width: 100%;
      }
    `;

    const html = `
    <main class="hero">
    <video class="embedded-video" poster="images/casual.jpg" controls>
      <source src="videos/promo.mp4" type="video/mp4">
      Video not supported, please try another browser
    </video>
    </main>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
  connectedCallback() {
    this.shadowRoot.querySelector('video').addEventListener('click', () => {
      this.shadowRoot.querySelector('video').play();
    });
  }
}

customElements.define('hero-video', HeroVideo);
