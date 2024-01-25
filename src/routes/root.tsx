import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Root() {

  const pageWrapperStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100rem",
    margin: "0 auto"
  }
  
  const footerStyles: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    width: "100%",
    backgroundColor: "red"
  }

  return (
    <div style={pageWrapperStyles}>
    
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <footer style={footerStyles}>
        <p>By Patrick Hase</p>
      </footer>

    </div>
  )
}