import React from "react";
import { blogPostList } from '../assets/blogList.tsx';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';
import { useOutletContext } from "react-router-dom";

export default function BlogPage(){

  const scrollableNodeRef :React.RefObject<HTMLDivElement> = useOutletContext();
 
  const blogDetails: React.ReactElement[] = blogPostList.map(blogPost => 
    <AnimatedDetailsWrapper key={blogPost.id} detailsID={blogPost.id}>

      <AnimatedDetailsSummary scrollableDivRef={scrollableNodeRef}>

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