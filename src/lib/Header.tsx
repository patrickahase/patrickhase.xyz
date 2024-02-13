import { Link, useLocation } from "react-router-dom";

export default function Header() {

  // find location on load
  let loc = useLocation();

  return (
    <header>

      <HeaderLogo />

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

        {/* check current pathname - update class if on that link's path */}
        {loc.pathname.includes("projects") 
          ?  <Link to={`projects/`} className="navTab activeNavTab" id="projects"> Projects </Link>
          :  <Link to={`projects/`} className="navTab" id="projects"> Projects </Link>
        }

        <div className="navGap"></div>

        {loc.pathname.includes("about") 
          ?  <Link to={`about/`} className="navTab activeNavTab" id="about"> About </Link>
          :  <Link to={`about/`} className="navTab" id="about"> About </Link>
        }

        <div className="navGap"></div>
        
        {loc.pathname.includes("blog") 
          ?  <Link to={`blog/`} className="navTab activeNavTab" id="blog"> Blog </Link>
          :  <Link to={`blog/`} className="navTab" id="blog"> Blog </Link>
        }

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

function HeaderLogo(){
  return (
    <div className="headerTextWrapper">      
      <h1 className="headerBGText">ph</h1>
      <h1 className="headerText">&#123; patrick Hase &#125;</h1>
    </div>
    
  )
}
