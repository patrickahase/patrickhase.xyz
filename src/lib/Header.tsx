import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  headerIsShrunk: boolean;
}

export default function Header({headerIsShrunk}: HeaderProps) {

  return (
    <header>

      <HeaderLogo headerIsShrunk={headerIsShrunk} />

      <nav>

        <div className="navGap"></div>

        <div className="navOrnamentBox">
          <svg className="navOrnament" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path transform="rotate(0 50 50)"
                  d=" M 55,0
                      A 22,22 0,1,1 45,0
                      L 50,10
                      z" />
            <path transform="rotate(72 50 50)"
                  d=" M 55,0
                      A 22,22 0,1,1 45,0
                      L 50,10
                      z" />
            <path transform="rotate(144 50 50)"
                  d=" M 55,0
                      A 22,22 0,1,1 45,0
                      L 50,10
                      z" />
            <path transform="rotate(216 50 50)"
                  d=" M 55,0
                      A 22,22 0,1,1 45,0
                      L 50,10
                      z" />
            <path transform="rotate(288 50 50)"
                  d=" M 55,0
                      A 22,22 0,1,1 45,0
                      L 50,10
                      z" />
          </svg>
        </div>

        <div className="navGap"></div>

        <NavLink to="projects/" className="navTab">Projects</NavLink>

        <div className="navGap"></div>

        <NavLink to="about/" className="navTab">About</NavLink>

        <div className="navGap"></div>
        
        <NavLink to="blog/" className="navTab">Blog</NavLink>

        <div className="navGap"></div>

        <div className="navOrnamentBox">
          <svg className="navOrnament" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path transform="rotate(0 50 50)"
                    d=" M 55,0
                        A 22,22 0,1,1 45,0
                        L 50,10
                        z" />
              <path transform="rotate(72 50 50)"
                    d=" M 55,0
                        A 22,22 0,1,1 45,0
                        L 50,10
                        z" />
              <path transform="rotate(144 50 50)"
                    d=" M 55,0
                        A 22,22 0,1,1 45,0
                        L 50,10
                        z" />
              <path transform="rotate(216 50 50)"
                    d=" M 55,0
                        A 22,22 0,1,1 45,0
                        L 50,10
                        z" />
              <path transform="rotate(288 50 50)"
                    d=" M 55,0
                        A 22,22 0,1,1 45,0
                        L 50,10
                        z" />
          </svg>
        </div>

        <div className="navGap"></div>
        
      </nav>

    </header>
  )
}

interface HeaderLogoProps {
  headerIsShrunk: boolean;
}

function HeaderLogo({headerIsShrunk}: HeaderLogoProps){

  const headerElementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const headerElement = headerElementRef.current;
    if(headerIsShrunk === true && headerElement){
      headerElement.classList.add("headerBGTextShrink");
    }
  }, [headerIsShrunk]);

  return (
    <div className="headerTextWrapper">  
      {headerIsShrunk
        ? <h1 className="headerBGText headerBGTextShrink">ph</h1>
        : <h1 className="headerBGText" ref={headerElementRef}>ph</h1>
      }         
      <h1 className="headerText">&#123; patrick Hase &#125;</h1>
    </div>
    
  )
}
