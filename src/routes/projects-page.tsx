import React from "react";
import { projectList } from '../assets/projectList.tsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){
  
  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  function scrollElementToTop(scrollToElement: HTMLElement): void{
    /* parent element to scroll */
    const scrollBarElement = scrollableNodeRef.current;
    /* distance to top for element scrolling to */
    let scrollToElementPos = scrollToElement.getBoundingClientRect().top;
    if(scrollBarElement){
      /* scrollBarElement.scroll(0, scrollBarElement.scrollTop + (scrollToElementPos - scrollBarElement.getBoundingClientRect().top)); */
      scrollBarElement.scroll({
        top: scrollBarElement.scrollTop + (scrollToElementPos - scrollBarElement.getBoundingClientRect().top),
        left: 0,
        behavior: "smooth"
      });
    }
  }

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