import React from "react";
import { blogPostList } from '../assets/blogList.tsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function BlogPage(){

  const scrollableNodeRef = React.createRef<HTMLDivElement>();
 
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
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32}>
      <div className="projectsContainer">
        {blogDetails}
      </div>
    </SimpleBar>
  )
}