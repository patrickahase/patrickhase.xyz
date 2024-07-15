export interface blogPostType {
  id: string;
  startOpen: boolean;
  title: string;
  date: Date;
  body: JSX.Element;
}

export const blogPostList: blogPostType[] = [
  {
    id: "interaction and choice",
    startOpen: false,
    title: "interaction and choice",
    date: new Date(2024, 7, 15),
    body: 
      <>
				<p>
					since playing xeecee's game <a href="https://xeecee.itch.io/misericorde" target="_blank">Misericorde</a> last year (easily my GOTY) i've been thinking  
					about choice and interaction in media. there seems to be some kind of connection, to be able to interact is often understood as also being able to make 
					choices. this seems especially true within video game culture, where some form of choice might be considered fundamental to some. this is brought forth 
					in visual novels in general, but especially those like Misericorde and Cecile Richard's work on games like the 
					excellent <a href="https://dominoclub.itch.io/sudden-death" target="_blank">SUDDEN DEATH</a> which fall loosely into the designation of kinetic visual 
					novels - where there is no branching choice within the narrative, just interactions like clicking or scrolling propelling the works forwards.
				</p>
				<p>
					even when viewing it from the angle of interactive media where there is slightly less concern with shoring up boundaries ("i'm playing a game not reading a 
					book :@") it's interesting to think of what counts as interaction, two things acting on one another, and what doesn't. for example i'm not sure watching a 
					video on a website in an embedded player would typically be considered interactive media (even though you can scrub, skip, adjust volume etc) but something 
					like Nikki Lam's piece <a href="https://www.time-absorbs-feelings.xyz/" target="_blank">time absorbs the feelings it produces</a> (which i worked on, but 
					which was driven by Nikki) in which you are forced to randomly select modules from the narrative, might be. there's no way to determine which emoji clicks 
					correlate to which narrative section, but even having the ability to choose without that knowledge (randomly) seems to put it in a different place than 
					knowing i could skip around and watch a video's sections out of order. what about a game 
					like <a href="https://en.wikipedia.org/wiki/Paranormasight:_The_Seven_Mysteries_of_Honjo/" target="_blank">Paranormasight</a> where you do have choices but 
					must play through every permutation of the branching story anyway? (at least for as much as i've played so far)
				</p>
				<p>
					taking it a step further, does a reveal such as from mouse hover in Panda 
					Wong's <a href="https://www.liminalmag.com/community/objects" target="_blank">objects of fascination</a> count as interaction? what about just scrolling the 
					poem itself? or turning the page on a comic to reveal a splash page? all three are certainly designed with that navigation in mind. and ultimately those engaged 
					with the work have some form of choice, to keep engaging, or to engage at a speed or rhythm, something which hampered my time spent with written poetry in the past.
				</p>
				<p>
					i'm trying to keep this blog a place for open ending writing away from other forms of writing i do where i have to have a point. which is to say i'm not sure 
					what my point here is, just noticing a connection between a lot of stuff i've been enjoying and pushing it down the road by writing about it - maybe it'll 
					cohere eventually ¯\_(ツ)_/¯
				</p>		
      </>
  },
  {
    id: "last-updated",
    startOpen: false,
    title: "Last Updated: ",
    date: new Date(2024, 7, 8),
    body: 
      <>
				<p>
					As is the way its been a long time between updates, I had a PhD Milestone to present, but now that I'm done with that hopefully I can do a little bit more 
					here.
				</p>
				<p>
					There are a number of things to discuss, but to start with something small I was able to get a procedurally updating 'last updated' on the about page. This 
					was done by declaring a variable in the vite.config.ts file, which creates the variable (just a standard date object) when the site is built. This variable 
					can then be accessed - and in my case reinterpreted into a string - within any of the react files.
				</p>			
      </>
  },
  {
    id: "under-construction",
    startOpen: false,
    title: "Under Construction",
    date: new Date(2024, 2, 3),
    body: 
      <>
        <p>
          This blog comes from me wanting to document some different elements of constructing a new personal page. I wanted to try some new things, mainly 
          typescript, but also looking at some basic automated dev-ops with my server. There were a couple of things I wanted to get working but wasn't able to 
					at this stage, namely procedurally updating a date on the site indicating when the last update occured and creating my own scroll bar from scratch. 
					Hopefully in the future along with details of what worked I'll also write a little about these failures.
        </p>
      </>
  },
];