import { css, html, LitElement } from 'lit-element';

import { sharedStyles } from './shared-styles.js';
import './components/page-heading.js';
import './components/page-one-column.js';
import './components/navigation-bar.js';
import './components/card-element.js';

class RulesPage extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
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
      `,
    ];
  }

  render() {
    return html`
      <navigation-bar back></navigation-bar>

      <page-one-column>
        <page-heading
          topic="Official"
          header="Rules of Footbag Sports"
        ></page-heading>
        <card-element>
          <p>
            Published by the International Footbag Committee under the auspices
            of the International Footbag Players' Association.
          </p>
          <p>
            TWELFTH EDITION, APRIL 2010
          </p>
          <p>
            This publication is available in print form from the World Footbag
            Association for a nominal fee.
          </p>
          <p>
            COPYRIGHT © 2010 by the International Players' Association, Inc. The
            International Footbag Players' Association, Inc. (IFPA) has full
            copyright of this rule book and its contents. These rules are
            administered by the International Footbag Committee (IFC), under the
            auspices of the IFPA. Copies of the book are sold to cover the costs
            of production, printing, and distribution. Member associations of
            the IFPA are allowed to translate the rules into their own language
            and to add national supplements as long as the IFC rules are not
            altered or contradicted. The IFC must be notified of all such
            transactions and receive a copy afterward.
          </p>
          <h2>TABLE OF CONTENTS</h2>
          <ul>
            <li>Statement of Purpose</li>
            <li>IFC Bylaws</li>
            <li>IFC Roster</li>
            <li>Clubs Listing</li>
            <li>Article I - General</li>
            <li>Article II - Footbag Consecutive</li>
            <li>Article III - Footbag Net</li>
            <li>Article IV - Footbag Golf</li>
            <li>Article V - Footbag Freestyle</li>
            <li>Event Sanctioning Application</li>
          </ul>
          <h2>Statement of Purpose</h2>
          <p>
            The following rules and regulations are governed by the
            International Footbag Committee (IFC), a committee of the
            International Footbag Players' Association, Inc. (IFPA). The IFC is
            comprised of select footbag players and authorities from around the
            world. The function of this committee is to control the direction of
            the sport's growth through the construction of rules for the various
            footbag games played in competition. The following are the general
            goals of the IFC:
          </p>
          <ol>
            <li>
              To promote and encourage the cooperative spirit of footbag games.
            </li>
            <li>
              To promote footbag throughout the world and encourage the
              establishment of new footbag clubs and/or associations, advising
              them of footbag activities and general management.
            </li>
            <li>
              To achieve acceptance of footbag as a legitimate competitive
              sport.
            </li>
            <li>
              To provide a forum for the discussion of all aspects of play, and
              to arbitrate when conflicts arise.
            </li>
            <li>
              To establish and uphold a tournament standard for all footbag
              competition worldwide.
            </li>
            <li>Peace through play.</li>
          </ol>
          <h2>IFC Bylaws</h2>
          <h3>Purpose</h3>
          <p>
            The purpose of the International Footbag Committee (IFC) is to
            influence the direction of footbag games, to develop and refine
            rules, and to vote on major issues and rule changes. The IFC is
            organized under the auspices of the International Footbag Players'
            Association (IFPA), and all committee members must remain active
            IFPA members in order to serve on this committee. The membership of
            the IFC consists of people who are influential in the game of
            footbag. Players wishing to serve on the IFC must show active
            interest or participation in footbag for a minimum of two years
            before applying for membership.
          </p>
          <h3>Requirements for Membership</h3>
          <p>
            Players wishing to be elected to the rules committee must complete
            the process as outlined below:
          </p>
          <ol>
            <li>
              Write an electronic mail ("e-mail") to all IFC members stating
              desire to serve on the committee. This e-mail should include a
              summary of the player's involvement in footbag, as well as mention
              of tournament experience (playing and organizing), promotions and
              any special skills or qualifications (i.e. business,
              organizational, involvement in other sports or governing bodies,
              etc.), as well as personal background (education, occupation).
              This e-mail must be received by each IFC member at least 30 days
              prior to the next IFC meeting (usually at the World Footbag
              Championships). Such e-mail may be sent to all members at once
              using the official IFC mailing list. The address for that list is
              on the IFC home page at
              <a href="http://www.footbag.org/groups/list/ifc"
                >http://www.footbag.org/groups/list/ifc</a
              >.
            </li>
            <li>
              Obtain the approval of at least five (5) current IFC members who
              support the player's nomination (usually done via electronic vote
              in advance of the meeting, but e-mail and other means of proof of
              support from these members is also acceptable). Approval will be
              reviewed at the next annual meeting.
            </li>
            <li>
              Attend the next annual IFC meeting, which is usually held in
              conjunction with the World Footbag Championships. The nominee will
              be asked to speak to the committee and answer any questions asked
              by the committee. The members will vote on admitting any
              applicants after the question and answer period. The nominee must
              be elected by a 2/3 majority vote of the committee.
            </li>
          </ol>
          <h3>Responsibilities of IFC members</h3>
          <p>
            All IFC members are expected to uphold the rules currently in place,
            or as specified by the tournament director, at all tournaments and
            events. IFC members must conduct themselves in a manner consistent
            with the spirit of the game, displaying good sportsmanship and
            courtesy at all footbag events. IFC members will attend every
            meeting, or two meetings out of every three. Communication with
            committee chairpersons and members will be necessary.
          </p>
          <h3>Rule Changes</h3>
          <p>
            Rule changes will be voted on at the annual meeting or via
            correspondence (usually e-mail and/or forum discussions, followed up
            with an electronic vote). If approved by the committee, rule changes
            will not become effective until April 1 of any given calendar year,
            at which point they will also be included in the online rule book
            and any subsequent printed edition. The deadline for rule changes
            for any calendar year is January 31 of the same year. A proposal to
            change a rule may be submitted to the appropriate committee
            chairperson. The proposal must be submitted in the following format:
          </p>
          <ol>
            <li>The rule as it presently reads in the current rulebook;</li>
            <li>The rule as the petitioner would like it to read;</li>
            <li>
              Supporting arguments for the rule change, including any history or
              relevant information or precedents. This should include possible
              consequences for leaving the rule intact as well as changing the
              rule.
            </li>
          </ol>
          <h3>International Representation</h3>
          <p>
            Representation from a wide variety of regions, countries, and
            footbag-related interests is desired and encouraged. Special
            arrangements can be made for unrepresented countries that have two
            or more entrants competing at the World Footbag Championships.
            Players from qualifying countries may select one player to
            participate and vote at the annual meeting and throughout the coming
            year. International players must reach agreement among themselves as
            to who shall represent them. All selections are to be made prior to
            the meeting. Selections shall be stated in writing and submitted to
            the chairperson prior to the meeting.
          </p>
          <h3>IFC Roster</h3>
          <p>
            Official Roster: Please see
            <a href="http://www.footbag.org/groups/list/ifc"
              >http://www.footbag.org/groups/list/ifc</a
            >
            for the contents of this section.
          </p>
          <h3>Clubs Listing</h3>
          <p>
            Online Club List: Please see
            <a href="http://www.footbag.org/clubs/index"
              >http://www.footbag.org/clubs/index</a
            >
            for the contents of this section.
          </p>
          <h2>Article I - General</h2>
          <h3>101. IFC Rules</h3>
          <p>
            The International Footbag Committee (IFC) is organized and exists as
            a committee within the non-profit corporation, International Footbag
            Players' Association (IFPA), Inc. The IFC, as a committee of IFPA,
            shall devise, publish, and enforce specific rules of play for each
            sport or event. These rules shall be set forth in separate Articles
            with each Article setting forth rules for a specific event or set of
            related events.
          </p>
          <h3>102. Spirit of the Rules</h3>
          <p>
            Footbag sports have traditionally relied upon a spirit of
            sportsmanship which places the responsibility of fair play on the
            players themselves. Highly competitive and committed play is
            encouraged, but never at the expense of the bond of mutual respect
            between players, adherence to the agreed upon rules of any event,
            nor the basic enjoyment of play. Protection of these vital elements
            serves to eliminate adverse conduct from the playing field. The
            responsibility for the maintenance of this spirit rests on each
            player's shoulders.
          </p>
          <h3>103. Construction of the Rules</h3>
          <p>
            Any rule set forth in Articles II through V shall be construed in
            accordance with the purpose for the rule, in a manner of consistency
            and fairness, exercising substance over form, with due regard to the
            spirit and gamesmanship fundamental to footbag sports as set forth
            in section 102 of Article I herein.
          </p>
          <h3>103.01. Comments</h3>
          <p>
            To facilitate understanding and comprehension of the rules of
            footbag play, a comment discussing the event appears at the
            beginning of the set of rules pertaining to that event. The comment
            shall not be considered a rule. However, it may be used as an aid in
            interpretation of the actual rules.
          </p>
          <h3>103.02. Gender</h3>
          <p></p>
          Wherever used in the rules, the use of any gender shall be applicable
          to both genders.
          <h3>103.03. Rule Changes</h3>
          Suggestions for rule changes or additions concerning specific events
          are to be made to the appropriate IFC event committees. Proposals
          concerning general rule considerations may be made directly to the IFC
          Rules Committee. All event committees shall submit their proposed rule
          documents for the coming season before the annual meeting. The Rules
          Committee shall then review the proposed rules, and through
          communication with the event committees, assemble the rule book for
          the coming season. Individual rule changes shall be discussed and
          voted on during the annual IFC meeting held in late July or early
          August. New rules and rule changes must be voted in no later than
          November 30 of the year preceding their effective date. New rules and
          rule changes shall be effective commencing January 1.
          <h3>104. Event Sanctioning Authority</h3>
          The IFC and IFPA may grant or revoke authorization for other
          organizations or entities to sanction footbag events. IFPA and IFC are
          currently the only official authorized sanctioning bodies. Sanctioning
          information is available from IFPA Sanctioning committee and at
          www.footbag.org.
          <h3>105. Tournaments</h3>
          Players shall compete in one or more of the footbag events at
          tournaments organized or sanctioned by the IFC or by a nation or
          person who is a member of the IFC.
          <h3>105.01. Entry</h3>
          To qualify for entry in a tournament, a player shall pay the entry fee
          set by the tournament director.
          <h3>105.02. Tournament Director</h3>
          The tournament shall be under the management and control of a
          tournament director who shall oversee the entire tournament, appoint
          officials and delegate duties and responsibilities to said officials
          and other tournament personnel, interpret the rules of play when
          necessary, settle disputes as they arise, perform any other acts and
          duties required by the IFC rules, and otherwise insure that the
          tournament is conducted in an efficient, professional, consistent and
          fair manner.
          <h3>106. Classification of Players</h3>
          To promote fair competition, players shall be classified based upon
          age, sex and ability level, and compete against other players of a
          like classification, or, at their discretion, in the open field of
          players. The following classifications shall be used:
          <h3>106.01. Open Division</h3>
          All players who do not qualify for any other division or choose not to
          compete in any other division. In a prize-money event, this division
          may be labeled Open Professional.
          <h3>106.02. Women's Division</h3>
          Available only to female players. The women's division may be further
          subdivided into junior, intermediate, master, grand master, or senior
          grand master divisions, depending upon the number of female players
          who would qualify for said divisions.
          <h3>106.03. Novice Division</h3>
          <h3>106.04. Intermediate Division</h3>
          Available to players with some tournament experience but who are not
          at the level of play in the Open division.
          <h3>106.05. Under-Twelve Division</h3>
          Available to players who will not reach their 12th birthday in the
          year the tournament is held.
          <h3>106.06. Junior Division</h3>
          Available to players who will not reach their 18th birthday in the
          year the tournament is held.
          <h3>106.07. Master Division</h3>
          Available to players who have reached their 35th birthday, but will
          not reach their 45th birthday in the year the tournament is held.
          <h3>106.08. Grand Master Division</h3>
          Available to players who have reached their 45th birthday, but will
          not reach their 55th birthday in the year the tournament is held.
          <h3>106.09. Senior Grand Master Division</h3>
          Available to players who will reach their 55th birthday in the year
          the tournament is held.
          <h3>106.10. Suspension of Classification</h3>
          A tournament director may suspend one or more of the divisions for a
          given tournament if fewer than 5 persons at a tournament qualify for
          that division. The tournament director may choose to use the Novice
          and Intermediate divisions instead of some other divisions. If a
          division is suspended, the players who would have qualified for that
          division shall compete in another division in which they qualify, or
          the open division.
          <h3>106.11. Choice of Divisions</h3>
          If a player qualifies for more than one division, he shall choose
          which division he shall compete in prior to the start of play, and
          shall not compete in any other division throughout the duration of the
          tournament, subject to tournament director discretion. In practice
          this rule is applied to each category of footbag sport independently,
          where category means net, freestyle, golf or consecutive. That is, if
          a player competes in Open Team Freestyle, they cannot compete in
          Intermediate Singles Freestyle. However, that same individual might
          compete in Intermediate Net.
          <h3>107. Footbags Used in Play</h3>
          <h3>107.01. Footbag Specifications</h3>
          To be used in competition, footbags must:<br />
          A. Be approximately spherical in shape;<br />
          B. Have a soft, pliable covering; they cannot be rigid balls;<br />
          C. Contain loose filling of any material; and<br />
          D. Be subject to the following size and weight restrictions:<br />
          1. Diameter of footbag: Minimum: 2.54cm (1.0 inches); Maximum: 6.35cm
          (2.5 inches)<br />
          2. Weight of footbag: Minimum: 20g (0.71 ounces); Maximum: 70g (2.47
          ounces)
          <h3>108. Disqualifications</h3>
          A tournament director may disqualify a player from any event or from
          the entire tournament whenever that player exhibits violent, obscene,
          abusive, disruptive, destructive, or illegal behavior, is continually
          annoying to other players, cheats, or otherwise attempts to create an
          unfair advantage for himself or disadvantage for others through a
          circumvention of the rules, or otherwise causes substantial hardship,
          inconvenience, or annoyance to spectators, officials, or other
          players. This rule shall not supersede, alter or in any way affect the
          rules of disqualification relating to specific events as set forth in
          Articles II through V herein, but shall be considered a supplement or
          addition to those specific rules.
          <h3>109. Protests</h3>
          <h3>109.01. Making Protest</h3>
          Whenever a footbag player chooses to challenge a decision made by a
          tournament director or official or a result entered at a tournament,
          he shall file a written protest to the IFC, or an official designated
          by the IFC to handle protests, within 10 days of the occurrence giving
          rise to the dispute. The protest shall be reviewed and either upheld,
          dismissed or held in abeyance pending investigation, at the discretion
          of the IFC or its designated official. An investigation may include
          interviewing any or all individuals with personal knowledge of the
          circumstances involved in the dispute, or conducting a hearing, if
          deemed necessary. A decision shall be made without undue delay with
          the results of the decision being served upon the tournament director
          in question and the protesting player. All decisions are final and are
          not appealable.
          <h3>109.02. Upholding Protest</h3>
          The IFC or designated official shall uphold a protest whenever it is
          established, by clear and convincing evidence, that the tournament
          director or other tournament official intentionally or knowingly:<br />
          A. falsified tournament results;<br />
          B. improperly aided or made calls or decisions for the purpose of
          giving unfair advantage or disadvantage to one or more players;<br />
          C. improperly impeded the play of a player, whether physically or by
          calls or decisions, to the benefit of one or more other players;<br />
          D. disqualified a player from play without cause;<br />
          E. otherwise performed any act designed to create an unfair advantage
          or disadvantage to one or more players;<br />
          F. accepted a bribe or other remuneration from a player or other
          person in exchange for performing any acts set forth in (A) through
          (E) herein.<br />
          <h3>109.03. Denial of Protest:</h3>
          The IFC or other designated official shall deny any protest which has
          as its subject matter any of the following:<br />
          A. a call or decision made by a tournament director or other official
          when a call or decision was made in good faith, regardless of the
          outcome;<br />
          B. a call or decision made by a tournament director or other official
          when the call or decision resulted in an unfair advantage (or
          disadvantage), being created when the advantage (or disadvantage)
          created was not the motivating reason for the call or decision;<br />
          C. any act committed by a player. Improper acts of a player shall be
          treated at the tournament level.
          <h3>109.04. Effect on Protesting Player</h3>
          If a protest is upheld, IFC or other designated officials shall, if
          possible, attempt to put the protesting player in the position he
          would have been in were it not for the circumstances leading to the
          protest.
          <h3>109.05. Sanction</h3>
          If a protest is upheld, IFC or other designated official may sanction
          the offending tournament director, tournament official or other
          persons in the manner and to the extent deemed appropriate. Possible
          sanctions may include but are not limited to: disqualification of a
          player retroactive to the tournament in question; suspension of a
          player, tournament director or other official for a defined or
          indefinite period of time; barring of a player from tournament play or
          affiliation, or the stripping of a title or record if the title or
          record was achieved as a result of improper conduct leading to the
          protest.
          <h3>110. Suspension of Rules</h3>
          <h3>110.01. Tournament Director Discretion</h3>
          A tournament director shall have the discretion to suspend or change
          one or more of the rules set forth in Article II through V herein or
          an additional rule not set forth, if applying the rules as set forth
          would be impractical, cumbersome or impossible, or would unduly create
          a significant advantage or disadvantage for one or more players,
          providing the suspension, alteration or addition occurs prior to the
          start of the tournament, will not unduly prejudice other players and
          is made known to all players prior to the start of a tournament. The
          tournament director shall set forth in his report to the IFC any
          suspension, alteration or addition of rules and the reasons for said
          action.
          <h3>110.02. Effect on Potential Records</h3>
          A suspension, alteration or addition of any rule as set forth in
          section 110.01 may be cause for the IFC or other sanctioning body to
          refuse recognition of a record set or tied at a tournament, if the
          rule change was a factor to any degree in the record being set.
          <h3>111. Rule Books</h3>
          <h3>111.01. Publication</h3>
          The IFC rules shall be published and appear in a book, pamphlet or
          other printed material. The effective date of the rules shall be
          conspicuously noted on the initial page or cover of said printed
          edition.
          <h3>111.02. Inspection</h3>
          A copy of the IFC rules, then in effect, shall be present for
          inspection by any player upon request at any IFPA-sanctioned
          tournament. A player may request a copy of the rules for his own use
          and shall be provided with same upon receipt of the request by the
          IFPA or its agent and upon payment of a nominal fee as set by the
          IFPA.
        </card-element>
      </page-one-column>
    `;
  }
}

customElements.define('rules-page', RulesPage);
