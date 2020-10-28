import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/card-element.js';
import './components/youtube-video.js';

class GettingStartedPage extends HTMLElement {
  _render() {
    const style = `
      :host {
        display: block;
      }
    `;

    const html = `
      <navigation-bar back></navigation-bar>
      
      <page-one-column header="Getting Started Playing Footbag">
        <card-element image="images/casual.jpg">
        <p>
          Want to start playing footbag? Not sure where to start? We are here to help.
		  This guide will help you take your first step into this incredible world of 
		  dexterity and skill.
        </p>
		<h3>Choosing a footbag</h3>
        <p>
          If you are just starting out, and want to learn basic kicks and tricks, an 8 panel 
		  footbag will be the best choice. A local toy shop might have them in stock, and if 
		  not, you can always order online. For simple circle kicking, most of the footbags you will find
		  should be perfectly fine! You can even make a bag yourself, a short tutorial for that can be 
		  found <a href="https://www.youtube.com/watch?v=MUyzG4aEh_c">here</a>.
        </p>
		<h3>Kicks and stalls</h3>
		<p>
		  If you have your footbag, you are ready to start your journey. Start by watching a great tutorial 
		  made by Franck Remy also known as FrankyStyle:
		</p>
    
    <youtube-video 
      src="https://www.youtube.com/embed/wkYxne1sq0Y"
      caption="Getting started tutorial"></youtube-video>
		<h3>Footbag Freestyle and Footbag Net</h3>
		<p>
		While circle kicking is the way most people enter the sport, most players gravitate towards one of our main disciplines. You can learn more about Freestyle and Net on our site and decide for yourself if 
		you want to specialize in one of those areas or play a little bit of everything. All that matters, is that you Keep Kicking!
		</p>
		<h3>Join us on Social Media</h3>
		<p>
		Our main Facebook page can be found <a href="https://www.facebook.com/footbag.org">here</a>. We also have active groups for <a href="https://www.facebook.com/groups/footbag">Freestyle</a> and <a href="https://www.facebook.com/groups/154116001290293">Net</a> discussion.
		We are also on Instagram, so follow <a href="https://www.instagram.com/footbag_sports/">footbag_sports</a>, and if you use Discord, an invite to our channel can be found under <a href="https://discord.com/invite/DAtQwG4">this link</a>.
		</p>
		<h3>Find a club near you</h3>
		<p>
		Want to find other people who play? Check the club listings at <a href="http://footbag.org/clubs/">http://footbag.org/clubs/</a> 
		or start your own if you already have a group kicking together.
		</p>
        </card-element>
      </page-one-column>
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
