import { useEffect, useRef } from 'react';

export default function AboutPage(){

  const localDate = new Date(BUILD_TIMESTAMP);
  const dateString = localDate.toLocaleString("en-GB", {dateStyle: "short", timeZone: "Australia/Melbourne"});

  /* reference to email link element */
  const emailElementRef = useRef<HTMLAnchorElement>(null);
  /* update email to stop scraping */
  function replaceEmail():void{
    const emailElement = emailElementRef.current;
    let user: string = "patrickahase";
    let domain: string = "gmail.com";
    if(emailElement instanceof HTMLAnchorElement){
      emailElement.href = `mailto: ${user}@${domain}`;
      emailElement.innerHTML = `${user}@${domain}`;
    }    
  }
  
  /* on init */
  useEffect(() => {
    replaceEmail();
  },[]);

  return(
      <div className="aboutContainer">
        <figure className="aboutIMGWrapper">
          <img  src="/patrick-hase.gif" alt="animated pixel art portrait of Patrick Hase" />
          <figcaption>
            Portrait by <a href="https://www.bachelorsoft.com/" target="_blank">Bachelor Soft</a>
          </figcaption>
        </figure>
        <p>
          I'm a media artist and researcher focused on digital interaction design in full-stack audio/visual web development.
        </p>
        <p>
          I live and work on unceded <a href='https://www.wurundjeri.com.au/' target='_blank'>Wurundjeri</a> Country. Always 
          Was, Always Will Be Aboriginal Land.
        </p>
        <p>
          My practice often leads to the construction of playful and collaborative browser-based interfaces grounded through my 
          previous experiences working in music production & performance, 3D animation and VR. 
        </p>
        <p>
          I'm currently focused on my creative practice PhD at RMIT.
        </p>
        <p>
          hmu via <a href="" ref={emailElementRef}>email</a>
        </p>
        <p>
          This website's design includes the fonts: 
          <ul className='aboutList'>
            <li>Work sans by Wei Huang.</li>
            <li>BianZhiDai by Xiaoyuan Gao, notyourtypefoundry. Distributed by velvetyne.fr.</li>
          </ul>          
        </p>
        <p>Last updated {dateString}</p>
      </div>
  )
}