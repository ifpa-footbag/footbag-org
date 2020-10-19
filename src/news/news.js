import { html } from 'lit-element';
/**
 * ADDING NEWS
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
const news = html`
<!-- ADD NEWS ITEM RIGHT BELOW THIS -->

<news-item 
  topic="Worlds videos"
  header="Watch Worlds Videos on IFPA YouTube channel"
  image="images/videos.png"
  short="Thanks to the online format of this year's Worlds we have a lot of great footage availiable for your eyes to feast on. The videos 
	will be published to our official YouTube channel so if you missed our live broadcast we invite you to check out the action there."
    date="June 2020">
    <p>
	The official IFPA YouTube channel can be found under the link below:
	</p>
	<p>
	<a href="https://www.youtube.com/channel/UCs3hULDHOVOknWExWBVlLBw/">https://www.youtube.com/channel/UCs3hULDHOVOknWExWBVlLBw/</a>
	</p>
	<p>
	And while we're at it here's the winning performance in Open Routines by our currect champion Jan Weber:
	<youtube-video 
      src="https://www.youtube.com/embed/xhVuZtDgjEw"
      caption=""></youtube-video>
  
  </p>
  <p>
	What a show! There were some amazing submissions in other categories as well, make sure to check them out!
	</p>

</news-item>
<news-item
  topic="Worlds results" 
  header="Online Freestyle WFC 2020 Finals results are here"
  image="images/worlds2020.png"
  short="The culminating point of this year's footbag season for Freestyle is now history. For the first time ever the IFPA organized 
	an online-only competition with a live studio internet broadcast for the Finals Show. It was a massive success, gathering all 
	the top players from all around the world who gave their best showcasing some unforgettable performances."
    date="June 2020">
	<p>
	All results have been posted on the Footbag Reference, and can be found under the following link:
	</p>
	<p>
	<a href="http://footbag.org/reference/-/IFPA_Online_Freestyle_Footbag_World_Championships_2020">http://footbag.org/reference/-/IFPA_Online_Freestyle_Footbag_World_Championships_2020</a>
	</p>
	<p>
	The Shred30 World Record has been beaten, with a staggering 275.76 points run by Dominik "Nunchaku" Šimků. The previous best was 
	274 points scored by Jan Weber at 2012 World Footbag Championships qualifications. Talk about cutting it close!
	</p>
	<p>
	The Big Add Posse, a group of freestyle players pushing the limits of the sport has inducted a new member. This time the group honored a 
	shredder from Poland - Rafał Kaleta, to be also knows as "Killa" from now on. Congratulations Rafał!
	</p>
	<p>
	We want to thank all the competitors for showing that even in this difficult time, our sport can bring us all together. Congratulations 
	to all the medalists and runner-ups. We hope that this event will bring an energy boost to all the members of our community to keep on 
	playing and participating in events as it once more becomes possible.
	</p>

</news-item>

<news-item
  topic="Worlds"
  header="Online Freestyle WFC 2020 Finals start today!"
  image="images/worlds2020.png"
  short="This weekend will be unforgettable! The first Online Freestyle Footbag World Championships has brought us unseen tricks, 
	unforgettable battles, breathtaking routines, the hardest Sick 3s of all time, and more players than in any of the previous 
	10 years. And it all comes to a close at the same time in every corner of the World with a professionally streamed live show 
	that you can watch online."
    date="July 2020">
    <p>
    To watch the finals follow the link below:</p>
	<p>
	<a href="https://www.footbag.online/stream/">https://www.footbag.online/stream/</a>
	</p>
	<p>
	or on the IFPA YouTube channel in two parts:
	</p>
	<p>First, we will have Intermediate finals on Friday July 31st at 21:00 CET where the future of footbag will show us the results 
	of their skills and hard work. Then on Saturday August 1st, the best players in freestyle footbag will fight for a place on the 
	footbag throne in four different events: Sick3, Shred30, Shred-Off and Routines.
	</p>
	<p>
	This is an unprecedented moment in footbag 
	history, and we can all show our love of footbag to the world! Share this video with all your family and friends so nobody 
	will miss the event of the year!
	</p>

</news-item>

<news-item
  topic="COVID-19"
  header="Footbag is going online in corona time!"
  image="images/net.jpg"
  highlight
  short="Corona Virus affects footbaggers as well. Trainings have been cancelled, gyms are closed and gatherings limited in 
    many places. But footbaggers are not standing still, as freestyle footbag suits isolation really well: You only need 
    your footbag and a little bit of space indoors or outdoors. Some freestylers are even having online shred sessions to 
    enjoy the social part of footbag as well!"
    date="July 2020">
    <p>
    Corona Virus affects footbaggers as well. Trainings have been cancelled, gyms are closed and gatherings limited in 
    many places. But footbaggers are not standing still, as freestyle footbag suits isolation really well: You only need 
    your footbag and a little bit of space indoors or outdoors. Some freestylers are even having online shred sessions to 
    enjoy the social part of footbag as well!</p>
    <p>
    Check out for example the results from Pandemic5 online contest <a href=”https://youtu.be/toTrfJ5ekxs”>here</a>. Also, 
    it’s worth checking out #footbag in Instagram & especially look up for 
    <a href=”https://www.instagram.com/theparadoxsymposium/”>The Paradox Symposium</a> account for sweet freestyle content!
    </p>

</news-item>

<news-item
  topic="Tutorial" 
  header="Footbag masterclass by Frankystyle (in French)"
  image="images/masterclass-frankystyle.jpg"
  short="Looking for some advice on starting to play footbag? In French maybe? Look no further, as our dear friend from Paris 
  France, Frankystyle has released eight episodes of Footbag Masterclass. It’s in French, but don’t worry: You can 
  certainly follow the instructions just by watching the videos."
  date="July 2020">

    <p>
    Looking for some advice on starting to play footbag? In French maybe? Look no further, as our dear friend from Paris 
    France, Frankystyle has released eight episodes of Footbag Masterclass. It’s in French, but don’t worry: You can 
    certainly follow the instructions just by watching the videos. Check out episode number one 
    <a href=”https://youtu.be/vPjK2fp1pkk”>here</a>. Have fun!</p>

</news-item>

<news-item
  topic="Footbag.org" 
  header="Footbag.org update in progress"
  image="images/footbag-org-redesign.jpg"
  short="Footbag Worldwide gets a long-awaited redesign! Footbag Worldwide has been a big part of footbag culture since about 
  two decades, acting as an information source for footbaggers on all levels around the world. We are currently working 
  on a major update of the site. First thing to do is the front page as you can see. Our aim is to bring footbag.org to 
  today and prepare it for the future as well. There is a long way to go, but it’s the beginning!
  "
  date="March 2020">
    <p>

    Footbag Worldwide gets a long-awaited redesign! Footbag Worldwide has been a big part of footbag culture since about 
    two decades, acting as an information source for footbaggers on all levels around the world. We are currently working 
    on a major update of the site. First thing to do is the front page as you can see. Our aim is to bring footbag.org to 
    today and prepare it for the future as well. There is a long way to go, but it’s the beginning!</p>

 </news-item>
   
`;

export { news };
