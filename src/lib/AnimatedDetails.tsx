import { useEffect, useRef, ReactNode } from "react";
import { RootContextType } from "../routes/root.tsx";

interface AnimatedDetailsWrapperProps {
  children: ReactNode;
  detailsID: string;
  startOpen: boolean;
  scrollableNodeRef: React.RefObject<HTMLDivElement>;
}

export function AnimatedDetailsWrapper({children, detailsID, startOpen, scrollableNodeRef}: AnimatedDetailsWrapperProps) {
  
  const detailsElementRef = useRef<HTMLDetailsElement>(null);

  let RO: ResizeObserver;

  function setupAnimatedAccordion(): void{    
    const setHeight = (details: HTMLDetailsElement, isOpen: boolean = false) => {
      details.open = isOpen;
      let rect: DOMRect = details.getBoundingClientRect();
      details.dataset.width = rect.width.toString();
      details.style.setProperty(isOpen ? `--expanded` : `--collapsed`, `${rect.height}px`);    
    }
    const detailsElement = detailsElementRef.current;
    if(detailsElement){
      RO = new ResizeObserver(entries => {
           entries.forEach(entry => {
            if(detailsElement.dataset.width){
              const width: number = parseInt(detailsElement.dataset.width, 10);
              if (width !== parseInt(entry.borderBoxSize[0].inlineSize.toString(), 10)){
                let nowOpen = detailsElement.open;
                detailsElement.removeAttribute('style');
                setHeight(detailsElement);
                setHeight(detailsElement, true);                
                detailsElement.open = nowOpen;
              }
            } else {
              let nowOpen = detailsElement.open;
              detailsElement.removeAttribute('style');
              setHeight(detailsElement);
              setHeight(detailsElement, true);
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

  useEffect(() => {
    const scrollableDiv = scrollableNodeRef.current;
    if(scrollableDiv && startOpen && detailsElementRef.current){
      scrollableDiv.scroll(0, detailsElementRef.current.getBoundingClientRect().top - scrollableDiv.getBoundingClientRect().top);      
    }
    setupAnimatedAccordion();
    return () => {
      destroyAnimatedAccordion();
    }
  }, []);

  return (
    <details className="animatedDetails" ref={detailsElementRef} id={detailsID} open={startOpen}>

      {children}
      
    </details>
  )
}

interface AnimatedDetailsSummaryProps {
  children: ReactNode;
  rootContext: RootContextType;
}

export function AnimatedDetailsSummary({children, rootContext}: AnimatedDetailsSummaryProps) {

  const RootContext = rootContext;

  const clickListenerAbort = useRef(new AbortController());

  const toggleListenerAbort = useRef(new AbortController());

  const summaryElementRef = useRef<HTMLElement>(null);

  let detailsAnimationTime: number = 0;

  function animateScrollOnDetailsOpen(e: React.MouseEvent):void {
    const scrollableDiv = RootContext.scrollableNodeRef.current;
    const detailsElement = e.currentTarget.parentElement;
    if(detailsElement instanceof HTMLDetailsElement 
      && !detailsElement.open
      && scrollableDiv){        
      let start: number | undefined, previousTimeStamp: number | undefined, done: boolean = false;
      const currentScroll: number = scrollableDiv.scrollTop;
      const scrollTarget: number = currentScroll + (detailsElement.getBoundingClientRect().top - scrollableDiv.getBoundingClientRect().top);
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
            scrollableDiv.scroll({left: 0, top: count, behavior: "auto"});
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
            scrollableDiv.scroll({left: 0, top: count, behavior: "auto"});
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
      /* callback function to scroll only after details element is opened */
      function scrollNoMotion(): void {
        if(scrollableDiv 
            && detailsElement instanceof HTMLDetailsElement 
            && detailsElement.open) {
          scrollableDiv.scroll(0, scrollTarget);
          detailsElement.removeEventListener("toggle", scrollNoMotion);   
        }
        
      }
      /* check if prefers-reduced-motion, if not then check direction of scroll */
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        detailsElement.addEventListener("toggle", scrollNoMotion, { signal: toggleListenerAbort.current.signal });                
      } else {
        if(scrollTarget > currentScroll){
          window.requestAnimationFrame(scrollDownStep);
        } else {
          window.requestAnimationFrame(scrollUpStep);
        }
      }       
    }

  }

  useEffect(() => {
    if(RootContext.headerIsShrunk === true){      
      clickListenerAbort.current.abort();
    }
  }, [RootContext.headerIsShrunk]);

  /* on init pull transition time */
  useEffect(() => {
    const detailsElement = document.getElementsByClassName("animatedDetails")[0];
    if(detailsElement){
      const detailsStyle = getComputedStyle(detailsElement);
      /* need to remove s then convert to float than multiple by 1000 than make int */
      detailsAnimationTime = Math.floor(parseFloat(detailsStyle.transitionDuration.replace('s',''))*1000);
    }
    if(!RootContext.headerIsShrunk && summaryElementRef.current){
      summaryElementRef.current.addEventListener("click", () => {RootContext.setHeaderIsShrunk(true)}, { signal: clickListenerAbort.current.signal });
    }
    return () => {
      if(!RootContext.headerIsShrunk){
        clickListenerAbort.current.abort();
        toggleListenerAbort.current.abort();
      }
    }
  },[]);

  return (
    <summary className="animatedDetailsSummary" ref={summaryElementRef} onClick={animateScrollOnDetailsOpen}>

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
