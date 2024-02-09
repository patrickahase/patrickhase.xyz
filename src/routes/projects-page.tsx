import React, { useEffect } from "react";
import { projectList } from '../assets/projectList.tsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){
  
  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  const projectDetails: React.ReactElement[] = projectList.map(project => 
    <AnimatedDetailsWrapper key={project.id} detailsID={project.id}>

      <AnimatedDetailsSummary scrollableDivRef={scrollableNodeRef}>

      <div className="projectSummaryText" id={project.id}>

        <h3 className="projectSummaryTitle">{project.title}</h3>

        <div className="projectSummaryInfo">

          <span className="projectSummaryInfoRole">{project.role}</span>
          <div>
            <span>{project.publisher}&nbsp;</span>
            <span>{project.year}</span>
          </div>
          
        </div>

      </div>

      </AnimatedDetailsSummary>

      <div className="projectDetailsContentWrapper">

        <a href={project.extLink} target="_blank">{project.extLink}</a>

        {project.description}

        <p><em>{project.title}</em> was built using {project.tech}</p>

        {project.githubURL &&
          <p><a href={project.githubURL} target="_blank">view source code</a></p>
        }

      </div>

    </AnimatedDetailsWrapper>
  );

  function shrinkHeaderText(): void {
    const headerTextWrapper = document.getElementsByClassName("headerBGText")[0];
    const scrollableDiv = scrollableNodeRef.current;
    const firstAnimatedDetails = document.getElementsByClassName("animatedDetailsSummary")[0];
    if(headerTextWrapper && scrollableDiv && firstAnimatedDetails){
      headerTextWrapper.classList.add("headerBGTextShrink");
      scrollableDiv.removeEventListener("scroll", shrinkHeaderText);
      firstAnimatedDetails.removeEventListener("click", shrinkHeaderText);
    }
  }

  useEffect(() => {
    const scrollableDiv = scrollableNodeRef.current;
    const firstAnimatedDetails = document.getElementsByClassName("animatedDetailsSummary")[0];
    if(scrollableDiv && firstAnimatedDetails){
      scrollableDiv.addEventListener("scroll", shrinkHeaderText);
      firstAnimatedDetails.addEventListener("click", shrinkHeaderText);
    }
  },[]);

  return(
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32} scrollableNodeProps={{ ref: scrollableNodeRef }}>
      <div className="projectsContainer">
        {projectDetails}
      </div>
    </SimpleBar>
  )
}