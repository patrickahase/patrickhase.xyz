
import React from "react";
import { blogPostList } from '../assets/blogList.tsx';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';
import { useOutletContext } from "react-router-dom";
import { RootContextType } from "./root.tsx";

interface BlogPageProps {
  openProjectID?: string;
}

export default function BlogPage({openProjectID}: BlogPageProps){

  const RootContext: RootContextType = useOutletContext();

  const currentBlogPostList = 
        blogPostList.map(blogPost => blogPost.id === openProjectID 
        ? {...blogPost, startOpen: true}          
        : blogPost
  );
 
  const blogDetails: React.ReactElement[] = currentBlogPostList.map(blogPost => 
    <AnimatedDetailsWrapper key={blogPost.id} detailsID={blogPost.id} startOpen={blogPost.startOpen} scrollableNodeRef={RootContext.scrollableNodeRef}>

      <AnimatedDetailsSummary rootContext={RootContext}>

      <div className="blogPostSummaryText">

        <h3 className="blogPostTitle" style={{flex:1}}>{blogPost.title}</h3>

        <time className="blogPostSummaryDate" dateTime={blogPost.date.toDateString()}>{blogPost.date.toDateString()}</time>

      </div>

      </AnimatedDetailsSummary>

      <div className="blogPostDetailsContentWrapper">

        {blogPost.body}

      </div>

    </AnimatedDetailsWrapper>
  );

  return(
    <div className="projectsContainer">
      {blogDetails}
    </div>
  )
}