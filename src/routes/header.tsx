import { Link, useLocation } from "react-router-dom";

export default function Header() {

  // find location on load
  let loc = useLocation();

  return (
    <header>

      <h1>Patrick Hase</h1>

      <nav>

        <div className="navOrnament"></div>

        {/* check current pathname - update class if on that link's path */}
        {loc.pathname.includes("projects") 
          ?  <Link to={`projects/`} className="navTab activeNavTab" id="projects"> Projects </Link>
          :  <Link to={`projects/`} className="navTab" id="projects"> Projects </Link>
        }

        {loc.pathname.includes("about") 
          ?  <Link to={`about/`} className="navTab activeNavTab" id="about"> About </Link>
          :  <Link to={`about/`} className="navTab" id="about"> About </Link>
        }
        
        {loc.pathname.includes("blog") 
          ?  <Link to={`blog/`} className="navTab activeNavTab" id="blog"> Blog </Link>
          :  <Link to={`blog/`} className="navTab" id="blog"> Blog </Link>
        }

        <div className="navOrnament"></div>
        
      </nav>

    </header>
  )
}
