import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/news-item.js';
import './components/youtube-video.js';

class GettingStartedPage extends HTMLElement {
  _render() {
    const style = `
      .main-grid {
        display: grid;
        max-width: var(--max-content-width);
        margin: 0 auto;
      }
      @media only screen and (min-width: 520px) {
          .main-grid {
          grid-template-columns: 2fr 1fr;
          }
      }
    `;

    const html = `
      <navigation-bar back></navigation-bar>
      
      <page-one-column>
        <header class="header">
        <h2>Getting Started</h2>
        </header>
        <news-item image="images/casual.jpg" header="" open="true">
        <p>
          Want to start playing footbag? Not sure where to start? We are here to help.
		  This guide will help you take your first step into this incredible world of 
		  dexterity and skill.
        </p>
		<h3>Choosing a footbag</h2>
        <p>
          If you are just starting out, and want to learn basic kicks and tricks, an 8 panel 
		  footbag will be the best choice. A local toy shop might have them in stock, and if 
		  not, you can always order online. For simple circle kicking, most of the footbags you will find
		  should be perfectly fine! You can even make a bag yourself, a short tutorial for that can be 
		  found <a href="https://www.youtube.com/watch?v=MUyzG4aEh_c">here</a>.
        </p>
		<h3>Kicks and stalls</h2>
		<p>
		  If you have your footbag, you are ready to start your journey. Start by watching a great tutorial 
		  made by Franck Remy also known as FrankyStyle:
		</p>
    
    <youtube-video 
      src="https://www.youtube.com/embed/wkYxne1sq0Y"
      caption="Getting started tutorial"></youtube-video>
		
		<h3>Find a club near you</h2>
		Want to find other people who play? Check the club listings at <a href="http://footbag.org/clubs/">http://footbag.org/clubs/</a> 
		or start your own if you already have a group kicking together.
        </news-item>
      </page-two-columns>
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

customElements.define('getting-started-page', GettingStartedPage);
