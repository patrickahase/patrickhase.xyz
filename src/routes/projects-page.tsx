import { projectList } from '../assets/projectList.tsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AnimatedDetailsSummary, AnimatedDetailsWrapper } from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){

  const projectDetails: React.ReactElement[] = projectList.map(project => 
    <AnimatedDetailsWrapper>

      <AnimatedDetailsSummary>

      <div className="projectSummaryText">

        <h3 className="projectSummaryTitle">{project.title}</h3>

        <div className="projectSummaryInfo">
          <span style={{flex:1}}>{project.role}</span>
          <span>{project.publisher}</span>
          <span>{project.year}</span>
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
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32}>
      <div className="projectsContainer">
        {projectDetails}
      </div>
    </SimpleBar>
  )
}