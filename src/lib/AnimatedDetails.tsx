import { useEffect, useRef, ReactNode } from "react";

interface children {
  children: ReactNode
}

export function AnimatedDetailsWrapper({children}: children) {
  
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

  /* init */
  useEffect(() => {
    setupAnimatedAccordion();
    return () => {
      destroyAnimatedAccordion();
    }
  }, []);

  return (
    <details className="animatedDetails" ref={detailsElementRef}>

    {children}
      
    </details>
  )
}

export function AnimatedDetailsSummary({children}: children) {
  return (
    <summary className="animatedDetailsSummary">

      <AnimatedDetailsDisclosure />

      {children}

    </summary>
  )
}

export function AnimatedDetailsDisclosure() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="animatedDetailsDisclosure">
      <line className="animatedDetailsDisclosureLine" x1="10" y1="30" x2="90" y2="30" strokeWidth="5" />
      <line className="animatedDetailsDisclosureLine" x1="10" y1="50" x2="90" y2="50" strokeWidth="5" />
      <line className="animatedDetailsDisclosureLine" x1="10" y1="70" x2="90" y2="70" strokeWidth="10" />
    </svg>
  )
}
