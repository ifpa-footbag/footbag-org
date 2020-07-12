import './page-two-columns.js';
import './navigation-bar.js';
import './news-item.js';

class FootbagPage extends HTMLElement {
  connectedCallback() {
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
      
      <page-two-columns>
        <header class="header">
        <h2>Footbag Sports</h2>
        </header>
        <news-item image="images/net.jpg" header="Footbag Net" open="true">
        <p>
          Footbag Net is a singles or doubles court game, where players use only
          their feet to kick the footbag over a net. The size of the court and
          the height of the net are the same as those used in badminton. The
          rules for doubles net are a lot like volleyball: players are allowed
          three kicks per side before the ball must be sent to the opponents
          side of the net.
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
        </news-item>
        <news-item header="Footbag Freestyle" open="true">
        <p>
          The object of Freestyle Footbag is perform tricks with the bag. It has
          evolved from its roots into a very technical competitive discipline.
          Players compete by choreographing routines, performing physically
          challenging and precise combinations of footbag tricks to music,
          similar to what is done in figure skating and gymnastics routines.
        </p>
        <p>
          Routines are judged based on four criteria: presentation, difficulty,
          variety, and execution. Other forms of competitive and non-competitive
          freestyle exist, including "shredding", where players attempt to
          perform as many tricks in a row as possible while retaining a certain
          level of trick difficulty. They also attempt to hit different types of
          tricks, involving both sides of the body and multiple trick
          components.
        </p>
        </news-item>
      </page-two-columns>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('footbag-page', FootbagPage);
