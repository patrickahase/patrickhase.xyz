import { projectList } from '../assets/projectList.tsx';
import AnimatedDetails from '../lib/AnimatedDetails.tsx';

export default function ProjectsPage(){

  const projectDetails: React.ReactElement[] = projectList.map(project => <AnimatedDetails {...project} key={project.id} />);

  return(
    <>
      {projectDetails}
    </>
  )
}