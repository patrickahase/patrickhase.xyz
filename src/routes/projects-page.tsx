import React, { useEffect, useState } from "react";
import { projectList, projectType } from '../assets/projectList.tsx';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';
import { useOutletContext, useParams } from "react-router-dom";
import { RootContextType } from "./root.tsx";

export default function ProjectsPage(){

  const projectIDParams = useParams();

  const RootContext: RootContextType = useOutletContext();

  const currentProjectList = projectList.map(
                             project => project.id === projectIDParams.projectID ?
                                        {...project, startOpen: true}          
                                        : project
  );

  const projectDetails: React.ReactElement[] = currentProjectList.map(project => 
    <AnimatedDetailsWrapper key={project.id} detailsID={project.id} startOpen={project.startOpen} scrollableNodeRef={RootContext.scrollableNodeRef}>

      <AnimatedDetailsSummary rootContext={RootContext}>

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
    <div className="projectsContainer">
      {projectDetails}
    </div>
  )
}