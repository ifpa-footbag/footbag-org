import { css, html, LitElement } from 'lit-element';

import './contact-us.js';
import './page-heading.js';
import './svg-icon.js';
import './smooth-expand.js';
import './card-element.js';

class FootbagIntro extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        color: var(--color-blue);
        display: block;
        margin-top: var(--space-l);

        --margin: var(--space-xl);
      }

      page-heading {
        background: var(--color-redlight);
        padding: 0 var(--space-xl);
      }

      h2 {
        color: var(--color-orange);

        margin: 0 0 var(--space-m) 0;
        padding-right: var(--space-s);
        font-size: var(--font-size-xxxl);
      }

      h3 {
        font-size: var(--font-size-xl);
        margin: 0;
      }

      h4 {
        font-size: var(--font-size-l);
        margin: var(--margin) 0 var(--space-m) 0;
      }

      section,
      footer {
        background: var(--color-white); /*#f3f3f3;*/
        font-size: var(--font-size-l);
        padding: var(--margin);

        margin: 0;
      }
      section.accordions {
        padding: 0;
      }

      smooth-expand[expanded] {
        padding-bottom: var(--space-xl);
      }

      p {
        margin: var(--space-l) 0;
      }

      p + p {
        margin-top: var(--space-m);
      }

      button {
        background-color: transparent;
        border: 0;

        color: var(--color-blue);

        display: flex;
        justify-content: space-between;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-xl);

        margin: 0;

        padding: var(--space-l) var(--margin);
        text-align: left;
        transition: background 0.4s;

        width: 100%;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        outline: 2px solid var(--color-orange);
      }

      button svg-icon {
        float: right;
        fill: var(--color-red);
        pointer-events: none;
        padding-right: var(--space-l);
      }

      svg-icon {
        padding-left: var(--space-m);
        transition: transform 0.4s;
      }

      button[open] {
        background: var(--color-redlight);
      }

      button[open] svg-icon {
        transform: rotateX(180deg);
      }

      smooth-expand {
        padding: 0 var(--margin);
      }

      img {
        max-width: 100%;
        padding: var(--space-xl) 0;
      }

      .contact {
        margin-top: var(--space-xl);
      }
    `;
  }

  render() {
    return html`
      <page-heading
        topic="Footbag"
        header="Recreational and competitive sports"
      ></page-heading>
      
        <section class="intro">
            Footbag is a series of sports where players use their feet to kick
            a small round bag or ball. Some players do amazing tricks, others
            compete over a net, while for some, the aim is to work together to
            keep the bag off the ground. While being extremely easy to start, it
            also has its competitive forms played all over the world. It is also
            known for its culture and strong community, both locally and
            globally.
        </section>

        <section class="accordions">
          <button
            @click="${() => this._toggle(2)}"
            ?open="${this.detailsOpen[2]}"
          >
            <h3>History and current state</h3>
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[2]}">
            <div class="details">
              <p>
                Footbag roots can be found deep in the ancient cultures of Asia
                and the Americas, with similar games being played as far back as
                3000 years ago. <b>Its current form was established in North
                America in the 1970s</b>, and it has spread globally and evolved
                into many forms since.
              </p>
              <p>
                Some pursue footbag as a sport, with internationally
                standardized rules of competition and local, regional, and
                international championships where players display their skills
                and the best rise to the top.
              </p>
              <p>
                Many others choose to pursue footbag and a casual form of
                relaxation, exercise, and fun. It can be as simple as an
                individual seeing how many times they can kick the bag before it
                drops to the ground.
              </p>
              <p>
                More than sport or game, footbag creates a sense of community.
                Players from all over the world share this powerful form of
                creative expression, introspective meditation, and physical
                exercise. It is a game with which you can both teach and learn
                from others, and find common ground with people from all walks
                of life. Participants have no need to speak the same language,
                share the same system of beliefs, or be of the same physical
                ability.
              </p>
            </div>
          </smooth-expand>

          <button
            @click="${() => this._toggle(0)}"
            ?open="${this.detailsOpen[0]}"
          >
            <h3>Footbag disciplines</h3>
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[0]}">
            <div class="details">
              <p>
                Footbag is mostly known by its casual forms, but there 
                are also two main competitive disciplines in the sport, named
                <b>Footbag Net and Freestyle Footbag</b>.   
              </p>

              <h4>Casual footbag</h4>
              <img src="images/front-page/footbag.jpg" />
              <p>
                The most common display of casual footbag is the <b>circle</b>, in
                which groups of people gather to collectively keep the bag from
                touching the ground while passing back and forth. Other casual
                forms include games like <b>4-square, footbag golf, mini net, and
                foot juggling</b>.
              </p>


              <h4>Footbag Freestyle</h4>
              <img src="images/front-page/footbag.jpg" />
              <p>
              In freestyle footbag, a sport
                similar to juggling, players use their feet to propel the bag
                upwards and creatively manipulate their bodies near or around
                the bag to create tricks which can be strung together into
                expressive routines and competitive runs.
              </p>
              
              <p>
                As with any "freestyle" sport, there are not any actual rules
                (aside from not using hands), but rather performing creative
                sequences of tricks in the form of leg and body movements around
                the bag in between delaying or catching the bag on their feet in
                various positions, and developing unique style and moves through
                training, both alone or in groups. 
  </p><p>The smaller size of a footbag
                in comparison to a soccer ball allows many more tricks than
                freestyle football and the elite level Freestyle Footbag players
                perform a truly incredible amount of movements in a very short
                time. The best players seem to have a magnetic attraction to the
                bag.
              </p>

              <h4>Footbag Net</h4>
              <img src="images/front-page/footbag.jpg" />
              <p>
                Footbag net is
                a game of offense and defense where players compete as
                individuals or on teams to send the bag over a net and score
                points against their opponents. It can most simply be described as 
                volleyball with your feet, but the ball is a hard footbag, a small, round ball. 
                </p>
                <p>
                Using a badminton net and court, players rally the bag between each
                other, trying, as in volleyball and badminton, to get the ball
                over the net on onto the opponent’s side of the court using
                acrobatic movements to keep the ball in play. This sees players
                reaching great heights aiming to make a winning shot. It has
                often been described as a mix of soccer, volleyball and martial
                arts.
              </p>
            </div>
          </smooth-expand>

          <button
            @click="${() => this._toggle(1)}"
            ?open="${this.detailsOpen[1]}"
          >
            <h3>How to get started?</h3>
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[1]}">
            <div class="details">
              <p>
                Thinking of trying footbag out? Grab a bag, try and keep it in
                the air. Do a few kicks, tricks, see if you can kick it over the
                net. Once you get started, the possibilities are endless.

                Do not miss our <a href="/getting-started">tutorial</a> explaining the basics.
              </p>
              <h4>Equipment</h4>
              <p>
                As with many sports, footbag freestyle and net use specialized
                shoes and other equipment. Some players take existing equipment
                and modify it for their own purposes, improving the designs over
                time. Also footbags are stitched all over the world, with
                designs available to make your own at home! [click here for more
                information about shoes for freestyle/net-above or below link a
                couple small pictures of modified shoes, quantums etc] [click
                here for information about some of the best footbag stitchers
                and companies in the world, and for designs to make your
                own-incl stitching pictures and completed bags]
              </p>
            </div>
          </smooth-expand>
        </section>
        <footer>
          Join our worldwide community to learn more, ask help or finding player
          to kick with! We are on
          <a href="https://www.facebook.com/footbag.org">Facebook</a>,
          <a href="https://www.instagram.com/footbag_sports/">Instagram</a> and
          <a href="https://discord.com/invite/DAtQwG4">Discord</a>!
          
          <p>
            Organizing event? Or having questions regarding sponsorships, contact 
            <a href="mailto:info@footbag.org">International Footbag Players' Association</a> directly
            </p>
          
        </footer>
      </article>
    `;
  }

  static get properties() {
    return {
      detailsOpen: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.detailsOpen = [false, false, false];
  }

  _toggle(index) {
    const copy = [...this.detailsOpen];
    copy[index] = !this.detailsOpen[index];
    this.detailsOpen = copy;
  }
}

customElements.define('footbag-intro', FootbagIntro);
