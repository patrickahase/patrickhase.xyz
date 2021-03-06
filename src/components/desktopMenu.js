import React from 'react';
import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div id="desktop-menu-wrapper">
      {/* Menu Title */}
      <Link to="/">
        <div id="desktop-menu-title-wrapper" className="PinkBorder">
          <img className="ButtonStyle TitleGif" id="title-gif-left" alt="gif of spinning 3D CPU chip" src={require("../assets/structural-images/cpu.gif")} />
          <h1 id="menu-title">Patrick <u>H</u>ase</h1>
          <img className="ButtonStyle TitleGif" alt="gif of spinning 3D CPU chip" src={require("../assets/structural-images/cpu.gif")} />      
        </div>
      </Link>
      {/* Menu Links */}
      <div id="desktop-menu-link-wrapper" className="PinkBorder">
        <Link to="/interactive">
          <button className="ButtonStyle DesktopMenuButton" id="interactive-button">
            <u>i</u>nteractive
          </button>
        </Link>
        <Link to="/video">
          <button className="ButtonStyle DesktopMenuButton" id="video-button">
            <u>v</u>ideo
          </button>
        </Link>
        <Link to="/about">
          <button className="ButtonStyle DesktopMenuButton" id="about-button">
            <u>a</u>bout
          </button>
        </Link>
      </div>
    </div>
  )
};
