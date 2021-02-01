import { css, html, LitElement } from 'lit-element';

class HeroVideo extends LitElement {
  static get styles() {
    return css`
      :host {
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
        margin: 0 var(--space-s) 0 0;
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
        top: 0;
        transform: scale(0, 0);
      }
    `;
  }

  render() {
    // eslint-disable-next-line lit/attribute-value-entities
    return html`<figure class="hero">
      <youtube-video
        videoSrc="https://www.youtube.com/embed/-8zK5E7iVsI?modestbranding=1&controls=0"
        frameborder="0"
      >
      </youtube-video>
    </figure> `;
  }
}

customElements.define('hero-video', HeroVideo);
