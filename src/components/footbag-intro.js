import { css, html, LitElement } from 'lit-element';

import './page-heading.js';
import './svg-icon.js';
import './smooth-expand.js';
import './card-element.js';

class FootbagIntro extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--color-blue);
        display: block;
      }

      article {
        background: #f3f3f3;
        font-size: var(--font-size-xl);
        padding: 0 var(--space-xl) var(--space-xxl) var(--space-xl);
      }

      h2 {
        color: var(--color-orange);

        margin: 0 0 var(--space-m) 0;
        padding-right: var(--space-s);
        font-size: var(--font-size-xxxl);
      }

      em {
        color: var(--color-blue);
        font-style: normal;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size);
      }

      section {
        margin: 0;
      }
      section:first-of-type {
        margin-top: var(--space-xl);
      }

      /*
      section + section {
        border-top: 2px solid white;
      }*/

      p {
        margin: 0;
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

        padding: var(--space-l) 0;
        text-align: left;
        text-decoration: underline;

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
        fill: var(--color-orange);
        pointer-events: none;
        padding-right: var(--space-l);
      }

      svg-icon {
        padding-left: var(--space-m);
      }

      img {
        max-width: 100%;
        padding: var(--space-xl) 0;
      }
    `;
  }

  render() {
    return html`
      <article>
        <page-heading
          header="What is Footbag?"
          topic="Introduction"
        ></page-heading>
        <p>
          <em
            >Footbag is a series of sports where players use their feet to kick
            a small round bag or ball. Some players do amazing tricks, others
            compete over a net, while for some, the aim is to work together to
            keep the bag off the ground. While being extremely easy to start, it
            also has its competitive forms played all over the world.</em
          >
        </p>

        <section>
          <button @click="${() => this._toggle(0)}">
            What is footbag?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[0]}">
            <div class="details">
              <p>
                Footbag is both a sport and a culture, with a worldwide
                community that shares a passion for the sport and the
                connections it builds both locally and globally. At it’s core,
                Footbag is a high energy sport, involving moving the body to
                propel an object into the air. Some players do amazing tricks,
                others compete over a net, while for some, the aim is to work
                together to keep the bag off the ground.
              </p>
              <img src="images/front-page/footbag.jpg" />
              <p>
                There are many examples of sports involving keeping an object in
                the air using the feet. The Mezoamerican civilization had
                practiced a sport involving feet juggling that is said to be
                3000 years old. Jianzi, another similar foot juggling practice,
                is a traditional Chinese national sport originating in the Han
                Dynasty 2000 years ago. Sepak Takraw, is played throughout South
                East Asia and still is the National Sport of Malaysia and
                Thailand.<br /><br />
                Footbag itself, in its modern form, began in 1972 in Portland,
                Oregon. John Stalberger had the idea of using simple juggling of
                a bean bag with your feet to rehabilitate an injured knee. Along
                with his friend Mike Marshall they decided the basic objective
                of the game was to keep the bean bag from hitting the ground,
                using a variety of kicks. "Hacky sack" quickly gained
                popularity. The game fit well with the "peace and love" era of
                the US and the number of players in both the US and Canada soon
                rose into the thousands. People were kicking in parks, schools,
                colleges and at music festivals. About ten years later the
                phenomenon landed in Europe and is currently present on every
                continent from Medellin, Colombia to Tokyo, Japan.
              </p>
              <p>
                The most basic form of playing the game is called "circle
                kicking", but many other games have developed from it such as
                footbag golf, mini net, 4-square, etc. With "circle kicking" the
                main goal is to keep the bean bag off the ground using the feet,
                and passing between players. However, two genuine sports emerged
                that required much more physical coordination and exertion.
                These are named Footbag Net and Freestyle Footbag, currently the
                two main disciplines in the sport, played in competition.
              </p>
            </div>
          </smooth-expand>
        </section>

        <section>
          <button @click="${() => this._toggle(1)}">
            How to get started?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[1]}">
            <div class="details">
              <p>
                Footbag Net can most simply be described as volleyball with your
                feet, but the ball is a hard footbag, a small, round ball. Using
                a badminton net and court, players rally the bag between each
                other, trying, as in volleyball and badminton, to get the ball
                over the net on onto the opponent’s side of the court using
                acrobatic movements to keep the ball in play. This sees players
                reaching great heights aiming to make a winning shot. It has
                often been described as a mix of soccer, volleyball and martial
                arts.
              </p>
              <p>
                Freestyle Footbag is played with a bean bag or "footbag" that,
                unlike the one for Footbag Net, is softer and slightly heavier,
                allowing for easier control when players kick, or attempt to
                catch ("delay") the bag with their feet. Players generally play
                in groups of two to four players in a "circle".
              </p>
              <img src="images/front-page/footbag.jpg" />

              <p>
                As with any "freestyle" sport, there are not any actual rules
                (aside from not using hands), but rather performing creative
                sequences of tricks in the form of leg and body movements around
                the bag in between delaying or catching the bag on their feet in
                various positions, and developing unique style and moves through
                training, both alone or in groups. The smaller size of a footbag
                in comparison to a soccer ball allows many more tricks than
                freestyle football and the elite level Freestyle Footbag players
                perform a truly incredible amount of movements in a very short
                time. The best players seem to have a magnetic attraction to the
                bag.
              </p>
            </div>
          </smooth-expand>
        </section>
        <section>
          <button @click="${() => this._toggle(2)}">
            Where to find players and how to reach us?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <smooth-expand ?expanded="${this.detailsOpen[2]}">
            <div class="details">
              Our main Facebook page can be found here. We also have active
              groups for Freestyle and Net discussion. We are also on Instagram,
              so follow footbag_sports, and if you use Discord, an invite to our
              channel can be found under this link.
            </div>
          </smooth-expand>
        </section>
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
    const copy = [false, false, false];
    copy[index] = !this.detailsOpen[index];
    this.detailsOpen = copy;
  }
}

customElements.define('footbag-intro', FootbagIntro);
