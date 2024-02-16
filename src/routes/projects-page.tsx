import React from "react";
import { projectList } from '../assets/projectList.tsx';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';
import { useOutletContext } from "react-router-dom";
import { RootContextType } from "./root.tsx";

interface ProjectsPageProps {
  openProjectID?: string;
}

export default function ProjectsPage({openProjectID}: ProjectsPageProps){

  const RootContext: RootContextType = useOutletContext();

  const currentProjectList = 
        projectList.map(project => project.id === openProjectID 
        ? {...project, startOpen: true}
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