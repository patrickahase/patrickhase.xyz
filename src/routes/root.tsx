import React, { useEffect, useRef, useState } from "react";
import { Outlet, useMatches, RouteObject } from "react-router-dom";
import Header from "../lib/Header.tsx";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export interface RootContextType {
  scrollableNodeRef: React.RefObject<HTMLDivElement>;
  headerIsShrunk: boolean;
  setHeaderIsShrunk: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Root() {

  const routeMatches = useMatches();

  const matchesHandle: RouteObject["handle"] | undefined = routeMatches[1].handle;

  const [headerIsShrunk, setHeaderIsShrunk] = 
        matchesHandle.openProject === true
        ? useState<boolean>(true)
        : useState<boolean>(false);

  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  const scrollListenerAbort = useRef(new AbortController());

  useEffect(() => {
    if(headerIsShrunk === true){
      scrollListenerAbort.current.abort();
    }
  }, [headerIsShrunk]);

  useEffect(() => {
    const scrollableDiv = scrollableNodeRef.current;
    if(scrollableDiv && !headerIsShrunk){
      scrollableDiv.addEventListener("scroll", () => {
        setHeaderIsShrunk(true);
      }, { signal: scrollListenerAbort.current.signal });
    }
    return () => {
      scrollListenerAbort.current.abort();
    }
  },[]);

  return (
    <div className="pageWrapper">
    
      <Header headerIsShrunk={headerIsShrunk} />

      <main id="main-content">
        <div className="scrollGradientFade"></div>
        <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32} scrollableNodeProps={{ ref: scrollableNodeRef }}>
          <Outlet context={{scrollableNodeRef, headerIsShrunk, setHeaderIsShrunk} satisfies RootContextType} />
        </SimpleBar>
      </main>

    </div>
  )
}