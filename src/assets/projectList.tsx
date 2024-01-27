export interface project {
  id: string;
  title: string;
  publisher: string;
  year: string;
  imgSrc: string;
  imgAlt: string;
  role: string;
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
    extLink: "https://www.liminalmag.com/sanctuary/being-a-body",    
    tech: "Javascript",
    githubURL: ""
  },
  
  {
    id: "time-absorbs-feelings",
    title: "<i>time absorbs the feelings it produces</i>",
    publisher: "Arts House",
    year: "2021",
    imgSrc: "/projectImgs/time-absorbs-feelings.png",
    imgAlt: "image of time absorbs the feelings it produces website",
    role: "Interaction Design for Nikki Lam",
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
    extLink: "https://room2.fm/",    
    tech: "Unity3D, Ableton Live",
    githubURL: ""
  }
]