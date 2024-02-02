import { projectList } from '../assets/projectList.tsx';
import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){

  const projectDetails: React.ReactElement[] = projectList.map(project => 
    <AnimatedDetailsWrapper>

      <AnimatedDetailsSummary>

      <div className="projectSummaryText">

        <h3 className="projectTitle">{project.title}</h3>

        <div className="projectInfo">
          <span style={{flex:1}}>{project.role}</span>
          <span>{project.publisher}</span>
          <span>{project.year}</span>
        </div>

      </div>

      </AnimatedDetailsSummary>

      <div className="projectDetailsContentWrapper">

        <a href={project.extLink} target="_blank">{project.extLink}</a>

        <p></p>{project.description}

        <p><em>{project.title}</em> was built using {project.tech}</p>

        {project.githubURL &&
          <a href={project.githubURL} target="_blank">view source code</a>
        }

      </div>

    </AnimatedDetailsWrapper>
  );

  return(
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32}>
      <div className="projectsContainer">
        {projectDetails}
      </div>
    </SimpleBar>
  )
}