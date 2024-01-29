import { projectList } from '../assets/projectList.tsx';
import AnimatedDetails from '../lib/AnimatedDetails.tsx';
import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';

export default function ProjectsPage(){

  const projectDetails: React.ReactElement[] = projectList.map(project => <AnimatedDetails {...project} key={project.id} />);

  return(
    <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32}>
      <div className="projectsContainer">
        {projectDetails}
      </div>
    </SimpleBar>
  )
}