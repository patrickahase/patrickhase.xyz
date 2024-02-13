import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../lib/Header.tsx";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Root() {

  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  function shrinkHeaderText(): void {
    const headerTextWrapper = document.getElementsByClassName("headerBGText")[0];
    const scrollableDiv = scrollableNodeRef.current;
    //const firstAnimatedDetails = document.getElementsByClassName("animatedDetailsSummary")[0];
    if(headerTextWrapper && scrollableDiv){
      headerTextWrapper.classList.add("headerBGTextShrink");
      scrollableDiv.removeEventListener("scroll", shrinkHeaderText);
      //firstAnimatedDetails.removeEventListener("click", shrinkHeaderText);
    }
  }

  useEffect(() => {
    const scrollableDiv = scrollableNodeRef.current;
    //const firstAnimatedDetails = document.getElementsByClassName("animatedDetailsSummary")[0];
    if(scrollableDiv){
      scrollableDiv.addEventListener("scroll", shrinkHeaderText);
      //firstAnimatedDetails.addEventListener("click", shrinkHeaderText);
    }
    // handle first animated details
  },[]);

  return (
    <div className="pageWrapper">
    
      <Header />

      <main id="main-content">
        <SimpleBar style={{ height: "100%" }} forceVisible="y" autoHide={false} scrollbarMinSize={32} scrollableNodeProps={{ ref: scrollableNodeRef }}>
          <Outlet context={scrollableNodeRef} />
        </SimpleBar>
      </main>

    </div>
  )
}