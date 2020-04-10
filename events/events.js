/**
 * ADDING EVENTS
 *
 * Event is added using <event-item> element.
 *
 * <event-item
 *   header="Swiss Footbag Open"
 *   location="Lausanne, Vaud, Switzerland"
 *   contact="Karim Daouk, kshred@footbag.org, 0041 79 238 78 87"
 *   date="March 28-29, 2020"
 * >
 *
 * To highlight the event, add highlight attribute:
 * <event-item
 *   header="Swiss Footbag Open"
 *   location="Lausanne, Vaud, Switzerland"
 *   contact="Karim Daouk, kshred@footbag.org, 0041 79 238 78 87"
 *   date="March 28-29, 2020"
 *   highlight
 * >
 */

const events = `
<!-- ADD EVENTS RIGHT BELOW THIS -->

  <event-item
    header="Swiss Footbag Open"
    location="Lausanne, Vaud, Switzerland"
    contact="Karim Daouk, kshred@footbag.org, 0041 79 238 78 87"
    date="March 28-29, 2020"
  >
  </event-item>
  
  <event-item
    header="Bulgarian Footbag Championships"
    location="Stara Zagora, Bulgaria"
    contact="Ivan Stanev, navi6venats9@gmail.com, +359883512133, Radoslav Rusev,
    radoslavrusev@gmail.com, 00359894273320"
    date="May 1-3, 2020"
  >
  </event-item>
  <event-item
    header="Mud Belt 2020 presented by Memphis Footworks "
    location="Moscow, Tennessee, USA"
    contact="Walt Houston, walthouston7@gmail.com"
    date="May 2-3, 2020"
  >
  </event-item>

  <event-item
    header="Lake Erie Footbag Tournament"
    location="ERIE, Pennsylvania, USA"
    contact="Anthony Ritz, anthony.l.ritz@gmail.com, 814-431-4139 (Prize money
  event)"
    date="June 6-7, 2020"
  >
  </event-item>

  <event-item
    header="21st IFPA European Footbag Championships"
    location="Jaworzno, Poland"
    date="June 11-14, 2020"
    highlight
  >
    <p>
      We are excited to announce the 21st European Footbag Championships in Jaworzno, Poland from June 11-14, 2020! 
      Paweł Nowak, Footbag Freestyle World Champion 2017 (Routines) and 2019 (Overall) in collaboration with Arthur Ledain 
      and Kerstin Adineh from EFC (European Footbag Committee of IFPA) will host this year's miscellaneous event and 
      invite you to the beautiful city of Jaworzno in the south of Poland!</p>
    <p>
      Qualification rounds for all disciplines in Footbag Net and Freestyle will start in the morning of Thursday, June 11.
      Finals will be held in front of the local public on Friday, June 12, at Jaworzno’s biggest shopping mall 
      (some Freestyle disciplines) as well as on Saturday and Sunday, June 13-14, within the framework and in the area of
      the Festival Days of the City Jaworzno at the City Stadium (Freestyle and Net).
    </p> 
    <p>
      On the last day of the event Sunday, June 14, there will be some last finals at the city festival, played side by 
      side with a freestyle, mini-net and workshop area for the public to try out and meet the players of the European championships. 
      As an additional highlight, the hosts will show the footbag community some of the most beautiful landmarks of the 
      Jaworzno region with footbag golf and chill&grill for all participants. 
    </p>For the qualification days, there are two main event sites: a sports gym (6 footbag net courts plus additional freestyle area) 
    and a shopping mall (for Freestyle events only). 
    <hr>
    <p>
    Detailed information for players about schedule, accommodation, airport and local transfers, site maps and the
    *official registration* (by early April) will be published and regularly updated at the event’s domain: 
    footbag.online Come and join this event, which is again intended to be more than a tournament, shred and spike 
    hard, hang out, celebrate our beloved sport and its community and spread the passion! 
    </p>
    <hr>
     <p>
      Background information Jaworzno is the 13th-largest city in Poland in terms of area, with almost 100,000 
      population located in the south of Poland near Krakow and Katowice. The proximity of two airports and good 
      road infrastructure means that commuting and arriving for all participants will be an easy matter.
      A beautiful renovated town square and a church with one of the largest stained glass windows in Europe and 
      are just a few reasons to visit this city! 
    </p>
    <p>
      The festival City Days is a free event that provides the local public as well as tourists from everywhere 
      in Poland and Europe with unlimited access to culture and entertainment, offering large-scale open air concerts,
      fun sports events for children and adolescents and a great variety of food trucks. The festival is organized annually
      to integrate the community, but also to remind about the history of a given region and cultivate traditions.
      Many attractions and games have been prepared, so participants cannot complain of boredom. Some of the city's stunning
      landmarks are Gródek Park, a unique place on the map of Poland. It delights with views and is not without exaggeration 
      called by locals "Croatia" or "paradise island." and *GEOsfera, a theme park with gardens is a place open to visitors 
      who are interested in history and excavation. This ecological and geological object is located in a former quarry. 
    </p>
    <p>
       Walking around the area, you can come across life-size paleo-reconstructions of vertebrates unearthed there,
       information boards and exhibitions, presenting and bringing closer the history, and more specifically the Triassic period.
    </p>
  </event-item>
`;

export { events };
