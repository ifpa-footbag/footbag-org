/**
 * Embed youtube video. Usage:
 *
 * <youtube-video
 *  src="https://www.youtube.com/embed/wkYxne1sq0Y"
 *  caption="Optional video caption text here">
 * </youtube-video>
 */
class YoutubeVideo extends HTMLElement {
  _render() {
    const style = `
        :host {
            display: block;
            margin: var(--space-xl) 0;
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

        figcaption{
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
        }`;

    const html = `
        <figure>
            <div class="video-container">
                <iframe 
                    src='${this.getAttribute('src')}' 
                    frameborder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            ${
              this.getAttribute('caption') === null
                ? ''
                : `<figcaption>${this.getAttribute('caption')}</figcaption>`
            }
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
  }
}

customElements.define('youtube-video', YoutubeVideo);
