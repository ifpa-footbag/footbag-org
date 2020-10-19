import { css, html, LitElement } from 'lit-element';

import './svg-icon.js';

class FootbagIntro extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--color-blue);
        display: block;
      }
      article {
        font-size: var(--font-size-xl);
        padding: var(--space-xl);
        transition: 0.4s;
      }

      h2 {
        color: var(--color-orange);

        display: inline-block;
        font-size: var(--font-size-xxxl);
        margin: 0.3rem var(--space-s) 0 0;
        padding-right: var(--space-s);
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
        float: left;

        font-family: var(--font-family-secondary);
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-bold);
        margin: 0;

        padding: var(--space-m) var(--space-l);
        text-align: left;
        /*text-transform: uppercase;*/

        width: 70%;
      }

      button:focus {
        outline: 2px dashed var(--color-orange);
      }

      button svg-icon {
        float: right;
        fill: var(--color-orange);
        pointer-events: none;
        padding-right: var(--space-l);
      }

      .details {
        visibility: hidden;
        margin: 0;
        max-height: 0;

        padding-left: var(--space-l);
        text-align: left;
        transition: max-height 0.3s ease-out;
        will-change: max-height;
      }

      .details[open] {
        padding-bottom: var(--space-l);
        visibility: visible;
        max-height: 100rem;
        transition: max-height 0.3s ease-out;
      }

      img {
        width: 30%;
        float: right;
        padding-left: var(--space-m);
        padding-bottom: var(--space-l);
        margin-right: -0.75rem;
      }
    `;
  }

  render() {
    return html`
      <article>
        <h2>FOOTBAG</h2>
        is a series of sports where players use their feet to kick a small round
        bag or ball. Some players do amazing tricks, others compete over a net,
        while for some, the aim is to work together to keep the bag off the
        ground. While being extremely easy to start, it also has its competitive
        forms played all over the world.
        
        <section>
          <img src="images/freestyle-portrait.jpg"></img>
          <button @click="${e => this._toggle(e)}">
            What is footbag?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <div class="details">
            There are many examples of sports involving keeping an object in the
            air using the feet. The Mezoamerican civilization had practiced a
            sport involving feet juggling that is said to be 3000 years old;
            Jianzi, another similar foot juggling practice, is a traditional
            Chinese national sport originating in the Han Dynasty 2000 years
            ago; Sepak Takraw, is played throughout South East Asia and still is
            the National Sport of Malaysia and Thailand. Footbag itself, in its
            modern form, began with simple juggling of a bean bag with your feet
            in 1972 in Portland, Oregon by John Stalberger, who used it as a way
            to rehabilitate an injured knee, along with Mike Marshall. The basic
            objective of the game at this point was to keep the bean bag from
            hitting the ground, using a variety of kicks. “Hacky sack” quickly
            gained popularity. The game fit well with the ‘peace and love’ era
            of the US and the numbers of players in both the US and Canada soon
            rose into the thousands. People were kicking in parks, schools,
            colleges and at music festivals. About ten years later the
            phenomenon landed in Europe and is currently present on every
            continent from Medellin, Colombia to Tokyo, Japan. People were
            kicking in parks, schools, colleges and at music festivals. The most
            basic form of playing the game is called “circle kicking,” but many
            other games have developed from this such as footbag golf, mini net,
            4-square, etc. With “circle kicking,” the main goal is to keep the
            bean bag off the ground using the feet, and passing between players.
            It remains the base of our sport and you can learn how to kick right
            here: “Franckystyle tutorial videos” However, two genuine sports
            emerged that required much more physical coordination and exertion.
            These are named Footbag Net and Freestyle Footbag, currently the 2
            main disciplines in the sport, played in competition.
  </div>

          <button @click="${e => this._toggle(e)}">
            How to get started?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <div class="details">
            Footbag Net Footbag net can most simply be described as volleyball
            with your feet, but the ball is a hard footbag, a small, round
            ball.. Using a badminton net and court, players rally the bag
            between each other, trying, as in volleyball and badminton, to get
            the ball over the net on onto the opponent’s side of the court using
            acrobatic movements to keep the ball in play.This sees players
            reaching great heights aiming to make a winning shot. It has often
            been described as a mix of soccer, volleyball and martial arts. A
            more detailed description and precise rules can be found here. (to
            add) *Short intro to points system, brief mention of all time
            greats, classic video of footbag net* Freestyle Footbag Similar to
            Freestyle and yet pre-existent to it, Freestyle Footbag is played
            with a bean bag or ‘footbag’ that, unlike the one for Footbag Net,
            is softer and slightly heavier, allowing for easier control when
            players kick, or attempt to catch (“delay”) the bag with their feet.
            Players generally play in groups of two to four players in a
            ‘circle’. As with any ‘freestyle’ sport, there are not any actual
            rules (aside from not using hands), but rather performing creative
            sequences of tricks in the form of leg and body movements around the
            bag in between delaying or catching the bag on their feet in various
            positions, and developing unique style and moves through training,
            both alone or in groups,. The smaller size of a footbag vs a soccer
            ball allows many more tricks than freestyle football and the elite
            level Freestyle Footbag players perform a truly incredible amount of
            movements in a very short time. The best players seem to have a
            magnetic attraction to the bag. This discipline requires an
            </div>
          <button @click="${e => this._toggle(e)}">
            Where to find players?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <div class="details">
            Footbag Net Footbag net can most simply be described as volleyball
            with your feet, but the ball is a hard footbag, a small, round
            ball.. Using a badminton net and court, players rally the bag
            between each other, trying, as in volleyball and badminton, to get
            the ball over the net on onto the opponent’s side of the court using
            acrobatic movements to keep the ball in play.This sees players
            reaching great heights aiming to make a winning shot. It has often
            been described as a mix of soccer, volleyball and martial arts. A
            more detailed description and precise rules can be found here. (to
            add) *Short intro to points system, brief mention of all time
            greats, classic video of footbag net* Freestyle Footbag Similar to
            Freestyle and yet pre-existent to it, Freestyle Footbag is played
            with a bean bag or ‘footbag’ that, unlike the one for Footbag Net,
            is softer and slightly heavier, allowing for easier control when
            players kick, or attempt to catch (“delay”) the bag with their feet.
            Players generally play in groups of two to four players in a
            ‘circle’. As with any ‘freestyle’ sport, there are not any actual
            rules (aside from not using hands), but rather performing creative
            sequences of tricks in the form of leg and body movements around the
            bag in between delaying or catching the bag on their feet in various
            positions, and developing unique style and moves through training,
            both alone or in groups,. The smaller size of a footbag vs a soccer
            ball allows many more tricks than freestyle football and the elite
            level Freestyle Footbag players perform a truly incredible amount of
            movements in a very short time. The best players seem to have a
            magnetic attraction to the bag. This discipline requires an
            </div>
          <button @click="${e => this._toggle(e)}">
            How to reach us?
            <svg-icon path="images/icons.svg#angle-down"></svg-icon>
          </button>
          <div class="details">
            Footbag Net Footbag net can most simply be described as volleyball
            with your feet, but the ball is a hard footbag, a small, round
            ball.. Using a badminton net and court, players rally the bag
            between each other, trying, as in volleyball and badminton, to get
            the ball over the net on onto the opponent’s side of the court using
            acrobatic movements to keep the ball in play.This sees players
            reaching great heights aiming to make a winning shot. It has often
            been described as a mix of soccer, volleyball and martial arts. A
            more detailed description and precise rules can be found here. (to
            add) *Short intro to points system, brief mention of all time
            greats, classic video of footbag net* Freestyle Footbag Similar to
            Freestyle and yet pre-existent to it, Freestyle Footbag is played
            with a bean bag or ‘footbag’ that, unlike the one for Footbag Net,
            is softer and slightly heavier, allowing for easier control when
            players kick, or attempt to catch (“delay”) the bag with their feet.
            Players generally play in groups of two to four players in a
            ‘circle’. As with any ‘freestyle’ sport, there are not any actual
            rules (aside from not using hands), but rather performing creative
            sequences of tricks in the form of leg and body movements around the
            bag in between delaying or catching the bag on their feet in various
            positions, and developing unique style and moves through training,
            both alone or in groups,. The smaller size of a footbag vs a soccer
            ball allows many more tricks than freestyle football and the elite
            level Freestyle Footbag players perform a truly incredible amount of
            movements in a very short time. The best players seem to have a
            magnetic attraction to the bag. This discipline requires an
            </div>
        </section>
      </article>
    `;
  }

  _toggle(event) {
    const previousState = event.target.nextElementSibling.getAttribute('open');

    const elements = this.shadowRoot.querySelectorAll('.details');
    for (const element of elements) {
      element.removeAttribute('open');
    }

    if (previousState === null) {
      event.target.nextElementSibling.toggleAttribute('open', true);
    }
  }
}

customElements.define('footbag-intro', FootbagIntro);
