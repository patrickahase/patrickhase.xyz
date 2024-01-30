export interface project {
  id: string;
  title: string;
  publisher: string;
  year: string;
  imgSrc: string;
  imgAlt: string;
  role: string;
  description: JSX.Element;
  extLink: string;
  tech: string;
  githubURL?: string;
}

export const projectList: project[] = [
  {
    id: "room2-at-BLEED",
    title: "room2@BLEED",
    publisher: "Arts House",
    year: "2022",
    imgSrc: "/projectImgs/trish.png",
    imgAlt: "",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",

    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React, WebGL, Express, Azure",
    githubURL: ""
  },
  
  {
    id: "being-a-body",
    title: "being, a body",
    publisher: "LIMINAL",
    year: "2022",
    imgSrc: "/projectImgs/trish.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Interaction Design for Anuraag Bhatia",

    description: 
    <p>
     <em>being, a body</em> is an audio-visual-textual essay by Anuraag Bhatia commissioned 
     by Liminal and supported by Multicultural Arts Victoria as part of its Ahead of the Curve 
     Commisions. I implemented Bhatia’s concept into a custom dynamic audio mixing system for 
     web browsers that allows for users to scroll between a selection of music while they read 
     the text.
     </p>,

    extLink: "https://www.liminalmag.com/sanctuary/being-a-body",    
    tech: "Javascript",
    githubURL: ""
  },
  
  {
    id: "time-absorbs-feelings",
    title: "time absorbs the feelings it produces",
    publisher: "Arts House",
    year: "2021",
    imgSrc: "/projectImgs/time-absorbs-feelings.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Interaction Design for Nikki Lam",
    
    description: 
      <p>
        <i>time absorbs the feelings it produces</i> is an interative digital essay 
        by <a href="https://nikkilam.info/" target="_blank">Nikki Lam</a> commissioned by Arts House 
        as part of their Makeshift Publics critical response series. I implemented Lam’s concept 
        into an interactive browser based format developed to provide a custom approach to non-linear 
        narrative presentation.
      </p>,

    extLink: "https://www.time-absorbs-feelings.xyz/",
    tech: "Javascript, React",
    githubURL: ""
  },

  {
    id: "the-longest-hum",
    title: "thelongesthum.world",
    publisher: "Cementa",
    year: "2021",
    imgSrc: "/projectImgs/trish.png",
    imgAlt: "image of the longest hum website",
    role: "Interaction Design for Tina Stefanou",
    
    description: 
      <p>
      </p>,

    extLink: "https://thelongesthum.world/",    
    tech: "Javascript, React",
    githubURL: ""
  },

  {
    id: "sunkland-xyz",
    title: "SUNKLAND.XYZ",
    publisher: "Arts House",
    year: "2022",
    imgSrc: "/projectImgs/sunkland-xyz.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Unity3D, Javascript, React",
    githubURL: ""
  },

  {
    id: "room2.fm",
    title: "room2.fm",
    publisher: "Various",
    year: "2021 => 22",
    imgSrc: "/projectImgs/time-absorbs-feelings.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React, WebGL, Express",
    githubURL: ""
  },

  {
    id: "club-trish",
    title: "Club TRISH",
    publisher: "Arts House",
    year: "2022",
    imgSrc: "/projectImgs/trish.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React, WebGL",
    githubURL: ""
  },

  {
    id: "object-animacy",
    title: "Object Animacy",
    publisher: "Arts House",
    year: "2022",
    imgSrc: "/projectImgs/obj-ani.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",

    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React, WebGL",
    githubURL: ""
  },

  {
    id: "music-videos",
    title: "Music Videos",
    publisher: "Various",
    year: "2018 => 20",
    imgSrc: "/projectImgs/polt.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Direction and VFX",
    
    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Premiere, After Effects, Cinema 4D, Unity3D",
    githubURL: ""
  },

  {
    id: "infinite-fluke",
    title: "Infinite Fluke",
    publisher: "Arts House",
    year: "2022",
    imgSrc: "/projectImgs/infinite-fluke.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Unity3D, Ableton Live",
    githubURL: ""
  }
]