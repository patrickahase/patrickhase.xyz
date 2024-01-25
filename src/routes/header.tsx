import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  // make sure event is passing along an element
  function linkClick(e: React.MouseEvent<HTMLAnchorElement>){
    if (e.target instanceof HTMLElement){
      addSelectedTabStyle(e.target);
    }
  }

  // add the active class to selected tab
  function addSelectedTabStyle(elem: HTMLElement): void{
    // find and remove activeNavTab from any other elements
    let previouslySelectedTabs: HTMLCollection = document.getElementsByClassName("activeNavTab");
    for (let prevSelTab of previouslySelectedTabs){
      prevSelTab.classList.remove("activeNavTab");
    }
    // add activeNavTab to selected tab
    elem.classList.add("activeNavTab");
  }

  // find location on load
  let loc = useLocation();
  // run on header load
  useEffect(() => {
    // if pathname matches one of the tabs add activeNavTab class
    switch(true){
      case loc.pathname.includes("projects"):
        let projectTab: HTMLElement | null = document.getElementById("project");
        if (projectTab){ addSelectedTabStyle(projectTab); }
        break;
      case loc.pathname.includes("about"):
        let aboutTab: HTMLElement | null = document.getElementById("about");
        if (aboutTab){ addSelectedTabStyle(aboutTab); }
        break;
      case loc.pathname.includes("blog"):
        let blogTab: HTMLElement | null = document.getElementById("blog");
        if (blogTab){ addSelectedTabStyle(blogTab); }
        break;
      default: ;
    }
  },[]);

  return (
    <header>

      <h1>Patrick Hase</h1>

      <nav>

        <div className="navOrnament"></div>

        <Link to={`projects/`} className="navTab" id="projects" onClick={linkClick}>
          Projects
        </Link>

        <Link to={`about/`} className="navTab" id="about" onClick={linkClick}>
          About
        </Link>

        <Link to={`blog/`} className="navTab" id="blog" onClick={linkClick}>
          Blog
        </Link>

        <div className="navOrnament"></div>
        
      </nav>

    </header>
  )
}
