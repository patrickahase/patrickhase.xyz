import { Outlet, useLocation } from "react-router-dom";
import Header from "../lib/Header.tsx";

export default function Root() {

  let loc = useLocation();

  return (
    <div className="pageWrapper">
    
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

    </div>
  )
}