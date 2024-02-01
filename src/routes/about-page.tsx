import { useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';

export default function AboutPage(){

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
    <SimpleBar style={{ height: "100%" }} autoHide={false} scrollbarMinSize={32}>
      <div className="aboutContainer">
        <img src="/patrick-hase.gif" alt="animated pixel art portrait of Patrick Hase"></img>
        <p>
          I'm a media artist and researcher focused on digital interaction design in full-stack audio/visual web development. My practice 
          often leads to the construction of playful and collaborative browser-based interfaces grounded through my previous experiences 
          working in music production & performance, 3D animation and VR. I'm currently focused on my creative practice PhD at RMIT.
        </p>
        <p>
          hmu via <a href="" ref={emailElementRef}>email</a>
        </p>
      </div>
    </SimpleBar>
  )
}