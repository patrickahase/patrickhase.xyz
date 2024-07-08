export interface blogPostType {
  id: string;
  startOpen: boolean;
  title: string;
  date: Date;
  body: JSX.Element;
}

export const blogPostList: blogPostType[] = [
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