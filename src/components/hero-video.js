import { infoCircle } from './icons.js';

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
      background: var(--color-blue);
      color: var(--color-white);
      opacity: 0.8;
      padding: var(--space-l);
    }
    h2 {
      color: var(--color-orange);
      display: inline-block;
      font-size: var(--font-size-large);
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
      background-color: var(--color-orange);
      border: 0;
      color: var(--color-blue);
      
      font-weight: var(--font-weight-bold);
      padding: var(--space-m);
      text-transform: uppercase;

      width: 100%;
    }

    @media only screen and (min-width: 692px) {
      figcaption {     
        position: absolute;
        top: 5%;
        right: 10%;
        width: 17rem;
      }
    }
  `;

    const html = `
      <figure class="hero">
        <video poster="images/casual.jpg" controls>
          <source src="videos/promo.mp4" type="video/mp4">
          <track label="English" kind="subtitles" srclang="en" src="videos/promo.vtt" default>
          Video not supported, please try another browser
        </video>
        <figcaption>
          <h2>FOOTBAG</h2>
          is a series of sports where players use their feet to
          kick a small round bag or ball. Footbag's current form came
          about in 1972 in North America and has continued evolving
          into a popular sport that is played all over the world.
          <section>
          <a href="/getting-started"><button>Learn more ${infoCircle}</button></a>
        </section>
        </figcaption>
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

    this.shadowRoot.querySelector('video').addEventListener('click', () => {
      this.shadowRoot.querySelector('video').play();
    });
  }
}

customElements.define('hero-video', HeroVideo);
