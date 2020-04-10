class HeroVideo extends HTMLElement {
  constructor() {
    super();

    const style = `
      :host{
        --video-ratio: 9/16;
        --max-video-height: calc(var(--max-content-width) * var(--video-ratio));
      }
      .hero {
        height: 0;
        max-width: var(--max-content-width);
        max-height: 100%;
        margin: 0 auto;

        position: relative;
        padding-bottom: min(var(--video-ratio)*100%, var(--max-video-height));
      }

      .video-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: var(--max-video-height);
      }
    `;

    const html = `
    <main class="hero">
      <iframe
        class="video-iframe"
        src="https://www.youtube.com/embed/NeY-Ok9K1fU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </main>
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

customElements.define("hero-video", HeroVideo);
