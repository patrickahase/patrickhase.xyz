import { project } from "../assets/projectList";


export default function AnimatedDetails(projectProps: project) {
  return (
    <details>

      <summary>

        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="detailsDisclosure">
          <line x1="10" y1="30" x2="90" y2="30" stroke="black" strokeWidth="5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="5" />
          <line x1="10" y1="70" x2="90" y2="70" stroke="black" strokeWidth="10" />
        </svg>

        <div className="summaryText">

          <h3 className="projectTitle">{projectProps.title}</h3>

          <div className="projectInfo">
            <span style={{flex:1}}>{projectProps.role}</span>
            <span>{projectProps.publisher}</span>
            <span>{projectProps.year}</span>
          </div>

        </div>

      </summary>

      <p></p>

      <p><a href={projectProps.extLink} target="_blank">{projectProps.extLink}</a></p>

      <p>{projectProps.title} was built using {projectProps.tech}</p>

    </details>
  )
}
