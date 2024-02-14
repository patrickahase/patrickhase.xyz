
import React, { useState } from "react";
import { blogPostList, blogPostType } from '../assets/blogList.tsx';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';
import { useOutletContext } from "react-router-dom";

export default function BlogPage(){

  const [currentBlogPostList, setCurrentBlogPostList] = useState<blogPostType[]>(blogPostList);
 
  const blogDetails: React.ReactElement[] = currentBlogPostList.map(blogPost => 
    <AnimatedDetailsWrapper key={blogPost.id} detailsID={blogPost.id} isOpen={false}>

      <AnimatedDetailsSummary context={useOutletContext()}>

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