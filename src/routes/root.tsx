import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../lib/Header.tsx";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export interface RootContextType {
  scrollableNodeRef: React.RefObject<HTMLDivElement>;
  shrinkHeaderText: Function;
  headerIsShrunk: boolean;
  setHeaderIsShrunk: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Root() {

  const [headerIsShrunk, setHeaderIsShrunk] = useState<boolean>(false);

  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  const scrollListenerAbort = useRef(new AbortController());

  function shrinkHeaderText(): void {
    const headerTextWrapper = document.getElementsByClassName("headerBGText")[0];
    if(headerTextWrapper){
      headerTextWrapper.classList.add("headerBGTextShrink");
      setHeaderIsShrunk(true);      
    }
  }

  useEffect(() => {
    if(headerIsShrunk === true){
      scrollListenerAbort.current.abort();
    }
  }, [headerIsShrunk]);

  useEffect(() => {
    const scrollableDiv = scrollableNodeRef.current;
    if(scrollableDiv){
      scrollableDiv.addEventListener("scroll", shrinkHeaderText, { signal: scrollListenerAbort.current.signal });
    }
    return () => {
      scrollListenerAbort.current.abort();
    }
  },[]);

  return (
    <div className="pageWrapper">
    
      <Header />

      <main id="main-content">
        <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32} scrollableNodeProps={{ ref: scrollableNodeRef }}>
          <Outlet context={{scrollableNodeRef, shrinkHeaderText, headerIsShrunk, setHeaderIsShrunk} satisfies RootContextType} />
        </SimpleBar>
      </main>

    </div>
  )
}