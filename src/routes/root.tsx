import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Root() {

  return (
    <div className="pageWrapper">
    
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      {/* <footer style={footerStyles}>
        <p>By Patrick Hase</p>
      </footer> */}

    </div>
  )
}