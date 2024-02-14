export interface blogPostType {
  id: string;
  startOpen: boolean;
  title: string;
  date: Date;
  body: JSX.Element;
}

export const blogPostList: blogPostType[] = [
  {
    id: "under-construction",
    startOpen: false,
    title: "Under Construction",
    date: new Date(2024, 2, 3),
    body: 
      <>
        <p>
          This blog comes from me wanting to document some different elements of constructing a new personal page. I wanted to try some new things, mainly 
          typescript, but also looking at some basic dev-ops with my server. There were a couple of things I wanted to get working but wasn't able to at this 
          stage, namely procedurally updating a date on the site indicating when the last update occured and creating my own scroll bar from scratch. Hopefully 
          in the future along with details on my dev-ops success I'll write a little about these failures.
        </p>
      </>
  }
];