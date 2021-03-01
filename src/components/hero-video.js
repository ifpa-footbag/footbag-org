import { css, html, LitElement } from 'lit-element';

class HeroVideo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      figure {
        box-sizing: border-box;
        margin: 0;
        max-width: var(--max-content-width);

        padding: 0;

        /* anchor for absolutely positioned figcaption */
        position: relative;
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
