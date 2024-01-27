import { project } from "../assets/projectList";


export default function AnimatedDetails(projectProps: project) {
  return (
    <details>
      <summary>

        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="detailsDisclosure">
          <line x1="10" y1="30" x2="90" y2="30" stroke="black" stroke-width="5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="black" stroke-width="5" />
          <line x1="10" y1="70" x2="90" y2="70" stroke="black" stroke-width="10" />
        </svg>

        <div className="summaryText">        
          <span>{projectProps.title}</span>

          <span>{projectProps.year}</span>
        </div>

      </summary>
    </details>
  )
}
