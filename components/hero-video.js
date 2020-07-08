class HeroVideo extends HTMLElement {
  constructor() {
    super();

    const style = `
      :host{
        display: block;
      }

      figure {
        background-color: var(--color-white);
        padding: var(--space-l);

        margin: 0 auto;
        max-width: var(--max-content-width);
        max-height: 100%;
      }

      figcaption {
        border-left: 3px solid var(--color-orange);
        color: var(--color-blue);
        font-weight: var(--font-weight-boldest);
        margin: var(--space-l) 0;
        padding-left: var(--space-l);
      }

      h2 {
        color: var(--color-orange);
        display: inline-block;
        font-size: var(--font-size-large);
        margin:  0 var(--space-s) 0 0;;
        padding: 0;

      }

      video {
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
        padding: var(--space-m) 5rem;

        text-transform: uppercase;
      }

      @media only screen and (min-width: 1024px) {
        figure {
          display: flex;
          align-items: flex-start;
        }
        figcaption {
          margin-left: var(--space-m);
          margin-bottom: var(--space-xl);
        }
        video {
          width: 66.6%;
        }
        button {
          margin-top: var(--space-xl);
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
        <button>How to get started?</button>
      </section>
      </figcaption>

    </figure>
    
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
