import { css, html, LitElement } from 'lit-element';

/**
 * Embed youtube video. Usage:
 *
 * <youtube-video
 *  src="https://www.youtube.com/embed/wkYxne1sq0Y"
 *  caption="Optional video caption text here">
 * </youtube-video>
 */
class YoutubeVideo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      figure {
        display: flex;
        flex-direction: column;
        margin: 0;
      }

      .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;

        max-width: 100%;
      }

      figcaption {
        background: white;
        display: block;
        font-style: italic;
        padding: var(--space-l) 0;
      }

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <figure>
        <div class="video-container">
          <iframe
            src="${this.videoSrc}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </figure>
    `;
  }

  static get properties() {
    return {
      videoSrc: {
        type: String,
      },
    };
  }
}

customElements.define('youtube-video', YoutubeVideo);
