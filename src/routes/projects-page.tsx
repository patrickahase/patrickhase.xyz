import React, { useEffect } from "react";
import { projectList } from '../assets/projectList.tsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){

  /* simpleBar Containers px from top */
  let simpleBarTopPos: number = 0;
  
  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  // calculate scroll element px from top
  function updateSimpleBarTopPos(): void{
    const scrollBarElement = scrollableNodeRef.current;
    if(scrollBarElement){
      simpleBarTopPos = scrollBarElement.getBoundingClientRect().top;
    }
  }

  function scrollElementToTop(scrollToElement: HTMLElement): void{
    let scrollToElementPos = scrollToElement.getBoundingClientRect().top;
    if(scrollableNodeRef.current){
      scrollableNodeRef.current.scroll(0, scrollToElementPos - simpleBarTopPos);
    }
  }

  useEffect(() => {
    updateSimpleBarTopPos();   
    //update on resize
    window.addEventListener("resize", updateSimpleBarTopPos);
    return () => {
      window.removeEventListener("resize", updateSimpleBarTopPos);
    }
  },[]);

  const projectDetails: React.ReactElement[] = projectList.map(project => 
    <AnimatedDetailsWrapper key={project.id} detailsID={project.id}>

      <AnimatedDetailsSummary scrollToFunc={scrollElementToTop}>

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

  return(
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32} scrollableNodeProps={{ ref: scrollableNodeRef }}>
      <div className="projectsContainer">
        {projectDetails}
      </div>
    </SimpleBar>
  )
}