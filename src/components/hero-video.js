class HeroVideo extends HTMLElement {
  _render() {
    const style = `
    :host{
      display: block;
    }
    .hero {
      box-sizing: border-box;
    }
    figure {
      margin: 0;
      max-width: var(--max-content-width);

      padding: 0;
      
      /* anchor for absolutely positioned figcaption */
      position: relative;

    }
    figcaption {
      background: #eaeaeb;
      color: var(--color-blue);
      opacity: 0.8;
      padding: var(--space-l);

      transition: 0.4s;
    }
    h2 {
      color: var(--color-orange);
      display: inline-block;
      font-size: var(--font-size-l);
      margin:  0 var(--space-s) 0 0;;
      padding: 0;
    }
    video {
      /* necessary for removing bottom margin*/
      display: block;
      height: auto;
      width: 100%;
    }
    section {
      margin-top: var(--space-l);
      text-align: center;
    }
    button {
      border-radius: 5rem;
      background-color: transparent;
      border: 0;
      color: var(--color-blue);
      
      font-weight: var(--font-weight-bold);
      padding: var(--space-m);
      text-align: left;
      text-transform: uppercase;

      width: 100%;
    }
    button span {
      display: inline-block;
      float: right;
      fill: var(--color-orange);
    }

    @media only screen and (min-width: 692px) {
      figcaption {     
        position: absolute;
        top: 5%;
        right: 10%;
        width: 17rem;
      }
    }

    figcaption[playing] {
      position: absolute;
      right: 0;
      top:0;
      transform: scale(0, 0);
    }
  `;

    const html = `
      <figure class="hero">
        <video poster="images/casual.jpg" controls onclick="this.play()">
          <source src="videos/promo.mp4" type="video/mp4">
          <track label="English" kind="subtitles" srclang="en" src="videos/promo.vtt" default>
          Video not supported, please try another browser
        </video>
        
      </figure>
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

    this.shadowRoot.querySelector('video').addEventListener('play', () => {
      this.shadowRoot
        .querySelector('figcaption')
        .setAttribute('playing', 'true');
    });

    this.shadowRoot.querySelector('video').addEventListener('pause', () => {
      this.shadowRoot.querySelector('figcaption').removeAttribute('playing');
    });
  }
}

customElements.define('hero-video', HeroVideo);
