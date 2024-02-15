import React, { useEffect, useRef, useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Header from "../lib/Header.tsx";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { projectList } from '../assets/projectList.tsx';
import { blogPostList } from '../assets/blogList.tsx';

export interface RootContextType {
  idForPagePreload: string | null;
  scrollableNodeRef: React.RefObject<HTMLDivElement>;
  shrinkHeaderText: Function;
  headerIsShrunk: boolean;
  setHeaderIsShrunk: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Root() {

  const navigate = useNavigate();

  const projectIDParams = useParams();

  const idForPagePreload: string | null = findIDParamMatch();

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

  function findIDParamMatch(): string | null{
    let matchedID: string | null = null;
    if(projectIDParams.projectID){
      projectList.forEach(project => {
        if(project.id === projectIDParams.projectID){
          matchedID = project.id;
        } else {
          console.log(1);
          navigate("/projects");
        }
      });
    }
    if(projectIDParams.blogPostID){
      blogPostList.forEach(blogPost => {
        if(blogPost.id === projectIDParams.projectID){
          matchedID = blogPost.id;
        } else {
          navigate("/blog");
        }
      });
    }
    return matchedID;
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
          <Outlet context={{idForPagePreload, scrollableNodeRef, shrinkHeaderText, headerIsShrunk, setHeaderIsShrunk} satisfies RootContextType} />
        </SimpleBar>
      </main>

    </div>
  )
}