/**
 * ADDING NEWS
 *
 * News article has to be wrapped inside <news-item> html element, which has to
 * contain header attribute.
 *
 * Simple example (with header and body):
 *
 * <news-item header="Footbag.org redesign">
 *   Footbag.org has been redesigned
 * </news-item>
 *
 * More complex example (with image and paragraphs):
 * <news-item header="Footbag Net" image="images/net.jpg">
 *  <p>
 *   Footbag Net is a singles...
 *  </p>
 *  <p>
 *   Singles players are...
 *  </p>
 * </news-item>
 */

const news = `
<!-- ADD NEWS RIGHT BELOW THIS -->
<news-item header="Footbag.org redesign">
   Footbag.org has been redesigned
 </news-item>
 
<news-item image="images/net.jpg" header="Footbag Net">
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
<news-item header="Freestyle">
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
`;

export { news };
