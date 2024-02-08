import { useEffect, useRef, ReactNode } from "react";

interface AnimatedDetailsWrapperProps {
  children: ReactNode;
  detailsID: string;
}

export function AnimatedDetailsWrapper({children, detailsID}: AnimatedDetailsWrapperProps) {
  
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
    <details className="animatedDetails" ref={detailsElementRef} id={detailsID}>

    {children}
      
    </details>
  )
}

interface AnimatedDetailsSummaryProps {
  children: ReactNode;
  scrollableDivRef: React.RefObject<HTMLDivElement>;
}

export function AnimatedDetailsSummary({children, scrollableDivRef}: AnimatedDetailsSummaryProps) {

  let detailsAnimationTime: number = 0;

  function animateScrollOnDetailsOpen(e: React.MouseEvent):void {
    /* if event on details element, that isn't open, and a scrollable div exists */
    if(scrollableDivRef){
      const scrollableDiv = scrollableDivRef.current;
      if(e.currentTarget.parentElement instanceof HTMLDetailsElement 
        && !e.currentTarget.parentElement.open
        && scrollableDiv){        
        let start: number | undefined;
        let previousTimeStamp: number | undefined;
        let done: boolean = false;
        const currentScroll: number = scrollableDiv.scrollTop;
        const scrollTarget: number = currentScroll + (e.currentTarget.parentElement.getBoundingClientRect().top - scrollableDiv.getBoundingClientRect().top);
        /* find difference then divide by time */
        const scrollIncrement: number = Math.abs(currentScroll - scrollTarget) / detailsAnimationTime;
        /* divide into two functions : up and down - so if can be on which started not run every frame */
        function scrollDownStep(timeStamp: DOMHighResTimeStamp): void {
          if (start === undefined){
            start = timeStamp;
          }
          if (start && scrollableDiv){
            const elapsed = timeStamp - start;  
            if(previousTimeStamp !== timeStamp){
              const count: number = Math.min(currentScroll + (scrollIncrement * elapsed), scrollTarget);
              scrollableDiv.scroll({left: 0, top: count, behavior: "smooth"});
              if (count === scrollTarget) {done = true;}
            }
            if (elapsed < detailsAnimationTime) {
              previousTimeStamp = timeStamp;
              if(!done){
                window.requestAnimationFrame(scrollDownStep);
              }
            }
          }
        }
        function scrollUpStep(timeStamp: DOMHighResTimeStamp): void {
          if (start === undefined){
            start = timeStamp;
          }
          if (start && scrollableDiv){
            const elapsed = timeStamp - start;  
            if(previousTimeStamp !== timeStamp){
              const count: number = Math.max(currentScroll - (scrollIncrement * elapsed), scrollTarget);
              scrollableDiv.scroll({left: 0, top: count, behavior: "smooth"});
              if (count === scrollTarget) {done = true;}
            }
            if (elapsed < detailsAnimationTime) {
              previousTimeStamp = timeStamp;
              if(!done){
                window.requestAnimationFrame(scrollUpStep);
              }
            }
          }
        }
        /* check if prefers-reduced-motion, if not then check direction of scroll */
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          /* don't love this but can't work out how to get around it running after details opened */
          setTimeout(() => {scrollableDiv.scroll(0, scrollTarget);scrollableDiv.style.backgroundColor = "red";}, 1);
          
        } else {
          if(scrollTarget > currentScroll){
            scrollableDiv.style.backgroundColor = "blue";
            window.requestAnimationFrame(scrollDownStep);
          } else {
            scrollableDiv.style.backgroundColor = "green";
            window.requestAnimationFrame(scrollUpStep);
          }
        }       
      }
    }
  }

  /* on init pull transition time */
  useEffect(() => {
    const detailsElement = document.getElementsByClassName("animatedDetails")[0];
    if(detailsElement){
      const detailsStyle = getComputedStyle(detailsElement);
      /* need to remove s then convert to float than multiple by 1000 than make int */
      detailsAnimationTime = Math.floor(parseFloat(detailsStyle.transitionDuration.replace('s',''))*1000);
    }
  })

  return (
    <summary className="animatedDetailsSummary" onClick={animateScrollOnDetailsOpen}>

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
