import { useEffect, useRef } from "react";
import { project } from "../assets/projectList";


export default function AnimatedDetails(projectProps: project) {
  
  /* reference to details element */
  const detailsElementRef = useRef<HTMLDetailsElement>(null);
  /* setup resize observer var at this scope */
  let RO: ResizeObserver;

  function setupAnimatedAccordion(): void{
    const detailsElement = detailsElementRef.current;
    // takes detail element and works out height based on isOpen state
    const setHeight = (details: HTMLDetailsElement, isOpen: boolean = false) => {
      // update open status
      details.open = isOpen;
      // measure element
      let rect: DOMRect = details.getBoundingClientRect();
      // set custom width attr : used in RO to check for retrigger
      details.dataset.width = rect.width.toString();
      // set relevant custom CSS property based on isOpen
      details.style.setProperty(isOpen ? `--expanded` : `--collapsed`, `${rect.height}px`);
    }
    /* if ref assigned */
    if(detailsElement){
      RO = new ResizeObserver(entries => {
        return entries.forEach(entry => {
          /* if dataset attr exists */
          if(detailsElement.dataset.width){
            /* find width */
            const width: number = parseInt(detailsElement.dataset.width, 10);
            if (width !== parseInt(entry.borderBoxSize[0].inlineSize.toString(), 10)){
              // save current open state
              let nowOpen = detailsElement.open;
              // unset inline height
              detailsElement.removeAttribute('style');
              // measure closed and open heights
              setHeight(detailsElement);
              setHeight(detailsElement, true);
              // change back to original state
              detailsElement.open = nowOpen;
            }
          } else {
            /* if no dataset attr exists run for first time */
            // save current open state
            let nowOpen = detailsElement.open;
            // unset inline height
            detailsElement.removeAttribute('style');
            // measure closed and open heights
            setHeight(detailsElement);
            setHeight(detailsElement, true);
            // change back to original state
            detailsElement.open = nowOpen;
          }          
        });
      });
      RO.observe(detailsElement);
    }
  }
  function destroyAnimatedAccordion(): void{
    if(RO && detailsElementRef.current){
      RO.unobserve(detailsElementRef.current);
    }
  }

  /* init effect */
  useEffect(() => {
    setupAnimatedAccordion();
    return () => {
      destroyAnimatedAccordion();
    }
  }, []);

  return (
    <details ref={detailsElementRef}>

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

      <a href={projectProps.extLink} target="_blank">{projectProps.extLink}</a>

      <p></p>{projectProps.description}

      <p>{projectProps.title} was built using {projectProps.tech}</p>

    </details>
  )
}
