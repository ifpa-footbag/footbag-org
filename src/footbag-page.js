import { html, LitElement } from 'lit-element';

import './components/image-element.js';
import './components/page-heading.js';
import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/card-element.js';

class FootbagPage extends LitElement {
  render() {
    return html`
      <navigation-bar back></navigation-bar>

      <page-one-column>
        <page-heading
          header="What is Footbag?"
          topic="Introduction"
        ></page-heading>
        <card-element>
          <image-element
            src="images/net.jpg"
            small
            caption="Footbag Net"
          ></image-element>
          <p>
            Footbag Net is a singles or doubles court game, where players use
            only their feet to kick the footbag over a net. The size of the
            court and the height of the net are the same as those used in
            badminton. The rules for doubles net are a lot like volleyball:
            players are allowed three kicks per side before the ball must be
            sent to the opponents side of the net.
          </p>
          <p>
            Singles players are only allowed two kicks per side. Playing
            strategies are very similar to those used in beach volleyball. The
            attacking side sets the bag high in the air and attempts to hit it
            down onto the opponent's side of the court. The defending side tries
            to block the opponent's hits as they come over the net, or moves
            quickly to "dig" the bag up before it hits the ground, all while
            preparing to counter attack.
          </p>
        </card-element>
        <h3>Footbag freestyle</h3>
        <card-element>
          <p>
            <image-element
              src="images/freestyle.jpg"
              small
              caption="Footbag Freestyle"
            ></image-element>

            The object of Freestyle Footbag is perform tricks with the bag. It
            has evolved from its roots into a very technical competitive
            discipline. Players compete by choreographing routines, performing
            physically challenging and precise combinations of footbag tricks to
            music, similar to what is done in figure skating and gymnastics
            routines.
          </p>
          <p>
            Routines are judged based on four criteria: presentation,
            difficulty, variety, and execution. Other forms of competitive and
            non-competitive freestyle exist, including "shredding", where
            players attempt to perform as many tricks in a row as possible while
            retaining a certain level of trick difficulty. They also attempt to
            hit different types of tricks, involving both sides of the body and
            multiple trick components.
          </p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </card-element>
      </page-one-column>
    `;
  }
}

customElements.define('footbag-page', FootbagPage);
