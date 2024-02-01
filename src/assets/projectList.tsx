export interface project {
  id: string;
  title: string;
  publisher: string;
  year: string;
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
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",

    description:
      <>
        <p>
          <em>room2</em> was a pair of works, <em>live</em> and <em>async</em>, co-created with Anuraag 
          Bhatia and commissioned by Arts House as part of the international BLEED festival. <em>room2 live</em> 
          was a series of durational interactive live performances by four different sets of cross-disciplinary 
          creative collaborations curated by Bhatia and myself. <em>room2 async</em> consisted of nine unique 
          cycles of interactive audio-visual-textural work, with music provided by a range of contributors, 
          words provided by Bhatia and visuals provided by myself. The works were presented through a custom 
          interactive platform, including user interfaces and underlying technical structures, which I implemented 
          with additional contributions by <a href="https://localtime.place/" target="_blank">Kirby Fary</a>.
        </p>
        <p>
          <em>room2 live</em> contributers:&nbsp;
          <a href="https://ambydowns.bandcamp.com/" target="_blank">amby downs</a>,&nbsp; 
          <a href="https://joelsherwoodspring.com/" target="_blank">Joel Spring</a>,&nbsp;
          <a href="https://heizhima.bandcamp.com/album/h-i-zh-ma-and-friends" target="_blank">黑芝麻 (Hēi zhī ma)</a>,&nbsp;
          <a href="https://pandawong.mmm.page/" target="_blank">Panda Wong</a>,&nbsp;
          <a href="https://weiweihuanghuang.github.io/" target="_blank">Wei Huang</a>,&nbsp;
          <a href="https://mohamedchamas.itch.io/" target="_blank">Mohamed Chamas</a>,&nbsp;
          <a href="https://aartijadu.bandcamp.com/" target="_blank">Aarti Jadu</a>,&nbsp;
          <a href="https://efishpool1.bandcamp.com/" target="_blank">e fishpool</a>,&nbsp;
          <a href="https://www.instagram.com/heavensupermarket/" target="_blank">Sam Miers</a>,&nbsp;
          <a href="https://daisart.bandcamp.com/" target="_blank">j</a> (DJ),&nbsp;
          <a href="https://www.kayzar.com.au/" target="_blank">Kayzar</a> (lighting),&nbsp;
          Jack Burton (spatial design),&nbsp;
          <a href="https://www.instagram.com/fel__yang/" target="_blank">Felicity Yang</a> (flowers),&nbsp;
          <a href="http://www.kategeck.com/" target="_blank">Kate Geck</a> (poster) &&nbsp;
          <a href="https://localtime.place/" target="_blank">Kirby Fary</a> (chat mod)
        </p>
        <p>
          <em>room2 async</em> contributers:&nbsp;
          <a href="https://daisart.bandcamp.com/" target="_blank">j</a>,&nbsp; 
          <a href="https://aartijadu.bandcamp.com/" target="_blank">Aarti Jadu</a>,&nbsp;
          <a href="https://ambydowns.bandcamp.com/" target="_blank">amby downs</a>,&nbsp;
          <a href="https://alexandraspence.net/" target="_blank">Alexandra Spence</a>,&nbsp;
          <a href="https://ninabuchananmusic.bandcamp.com/" target="_blank">Nina Buchanan</a>,&nbsp;
          <a href="https://www.instagram.com/ShaYu.wav/" target="_blank">莎瑜ShāYú</a>,&nbsp;
          <a href="https://salllvage.bandcamp.com/" target="_blank">salllvage</a>,&nbsp;
          <a href="https://www.instagram.com/r_rebeiro/" target="_blank">R. Rebeiro</a> &&nbsp;
          <a href="http://www.hannahwu.com.au/" target="_blank">Hannah Wu</a>&nbsp;
        </p>
      </>,

    extLink: "https://bleedonline.net/program/room2/#live",
    tech: "Javascript, React, WebGL, Express, SQL & Azure Streaming",
    githubURL: "https://github.com/patrickahase/room2.fm"
  },
  
  {
    id: "being-a-body",
    title: "being, a body",
    publisher: "LIMINAL",
    year: "2022",
    role: "Interaction Design for Anuraag Bhatia",

    description: 
      <p>
      <em>being, a body</em> is an audio-visual-textual essay by Anuraag Bhatia and commissioned 
      by Liminal and supported by Multicultural Arts Victoria as part of its Ahead of the Curve 
      Commisions. I implemented Bhatia’s concept into a custom dynamic audio mixing system for 
      web browsers that allows for users to scroll between a selection of music while they read 
      the text.
     </p>,

    extLink: "https://www.liminalmag.com/sanctuary/being-a-body",    
    tech: "Javascript"
  },
  
  {
    id: "time-absorbs-feelings",
    title: "time absorbs the feelings it produces",
    publisher: "Arts House",
    year: "2021",
    role: "Interaction Design for Nikki Lam",
    
    description: 
      <p>
        <em>time absorbs the feelings it produces</em> is an interative digital essay 
        by <a href="https://nikkilam.info/" target="_blank">Nikki Lam</a> and commissioned by Arts House 
        as part of their Makeshift Publics critical response series. I implemented Lam’s concept 
        into an interactive browser based format developed to provide a custom approach to non-linear 
        narrative presentation.
      </p>,

    extLink: "https://www.time-absorbs-feelings.xyz/",
    tech: "Javascript & React",
    githubURL: "https://github.com/patrickahase/times-produces-feelings"
  },

  {
    id: "the-longest-hum",
    title: "thelongesthum.world",
    publisher: "Cementa",
    year: "2021",
    role: "Interaction Design for Tina Stefanou",
    
    description: 
      <p>
        <em>thelongesthum.world</em> is an interactive browser based voice work 
        by <a href="https://www.tinastefanou.com/" target="_blank">Tina Stefanou</a> and commissioned by Cementa 
        as part of their online Spirit of ‘21 Festival. I implemented Stefanou's concept into a browser based 
        format including a custom audio system that modulates over 21 years, procedurally animated interactive 
        visualisation and a back end system for remotely storing and retrieving the collected hums. Additional form 
        design was contribtued by Alisa Blakeney.
      </p>,

    extLink: "https://thelongesthum.world/",    
    tech: "Javascript, React, Express & MongoDB",
    githubURL: "https://github.com/patrickahase/longest-hum"
  },

  {
    id: "sunkland-xyz",
    title: "SUNKLAND.XYZ",
    publisher: "Arts House",
    year: "2022",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
        <em>SUNKLAND.XYZ</em> is an interactive browser based sound work co-created 
        with <a href="https://www.amiashanley.com/" target="_blank">Amias Hanley</a> and commissioned by Liquid 
        Architecture's Disclaimer Journal. The work is an adaptation of one of Hanley's prior multi-channel audio 
        compositions into an interactive digital space for web browsers. We collaborated together on the overall 
        design and I implemented the custom movement and visualisation system.
      </p>,

    extLink: "https://sunkland.xyz/",    
    tech: "Unity3D, Javascript & React"
  },

  {
    id: "room2-fm",
    title: "room2.fm",
    publisher: "Various",
    year: "2021 => 22",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <>
        <p>
          <em>room2.fm</em> is an ephemeral browser based interactive audio-visual-textural work co-created with 
          Anuraag Bhatia and originally commissioned by <a href="https://www.vidyasrajan.com/" target="_blank">Vidya Rajan</a>&nbsp;
          for Darebin Arts' program Exhibiting Culture Online. The work consisted of nine unique cycles of interactive 
          audio-visual-textural work, with music provided by a range of contributors, words provided by Bhatia and visuals 
          provided by myself. room2.fm was presented through a custom interactive platform, including user interfaces and 
          underlying technical structures, which I implemented. This first run was capped off with a live event presented 
          through the online interface.
        </p>
        <p>
          <em>room2.fm</em> has since run on multiple occassions, inlcuding an independant six show season during the 
          lockdown of late 2021, and co-presentations with Cool Room, Today Design.
        </p>
        <p>
          <em>room2.fm initial run</em> contributers:&nbsp;
          <a href="https://daisart.bandcamp.com/album/uneven-specks-of-dust-that-which-we-cannot-ever-expect-to-see/" target="_blank">ju ca</a>,&nbsp;
          <a href="https://melodyastruth.bandcamp.com/album/crude-tracer/" target="_blank">Tourist Kid</a>,&nbsp;
          <a href="https://hex-tape.bandcamp.com/" target="_blank">Hextape</a>,&nbsp;
          <a href="https://acopia.bandcamp.com/" target="_blank">Acopia</a>,&nbsp;
          <a href="https://aartijadu.bandcamp.com/" target="_blank">Aarti Jadu</a>,&nbsp;
          <a href="https://en.wikipedia.org/wiki/Diana,_Princess_of_Wales" target="_blank">Princess Diana of Wales</a>,&nbsp;
          <a href="https://fiafiell.bandcamp.com/" target="_blank">Fia Fiell</a>,&nbsp;
          <a href="https://ar53productions.bandcamp.com/album/uzi" target="_blank">R. Rebeiro</a>,&nbsp;
          <a href="https://ambydowns.bandcamp.com/" target="_blank">amby downs</a>,&nbsp;
          <a href="https://soundcloud.com/anuraag69" target="_blank">Anuraag</a> (DJ),&nbsp;
          <a href="https://daisart.bandcamp.com/" target="_blank">j</a> (DJ) &&nbsp;
          <a href="https://music-corin.bandcamp.com/" target="_blank">Corin</a> (DJ)
        </p>
        <p>
          <em>room2.fm lockdown season</em> contributers:&nbsp;
          <a href="https://soundcloud.com/anuraag69" target="_blank">Anuraag</a>,&nbsp; 
          <a href="https://fiafiell.bandcamp.com/" target="_blank">Fia Fiell</a>,&nbsp;
          <a href="https://soundcloud.com/c-frim" target="_blank">C.FRIM</a>,&nbsp;
          <a href="https://mirasia.bandcamp.com/" target="_blank">Mirasia</a>,&nbsp;
          <a href="https://localtime.place/" target="_blank">Local Time</a>,&nbsp;
          <a href="https://salllvage.bandcamp.com/" target="_blank">salllvage</a>,&nbsp;
          <a href="https://soundcloud.com/cloudyku" target="_blank">Cloudy Ku</a>,&nbsp;
          <a href="https://soundcloud.com/iv-dripp" target="_blank">Ivy</a>,&nbsp;
          <a href="https://femalewizard.bandcamp.com/" target="_blank">Female Wizard</a>,&nbsp;
          <a href="https://marcusianmckenzie.com/" target="_blank">Marcus Ian McKenzie</a>,&nbsp;
          <a href="https://alexandraspence.net/" target="_blank">Alexandra Spence</a>,&nbsp;
          <a href="https://rhunterrrr.bandcamp.com/" target="_blank">r hunter</a>,&nbsp;
          <a href="https://ar53productions.bandcamp.com/album/uzi" target="_blank">R. Rebeiro</a>,&nbsp;
          <a href="https://soundcloud.com/siri-sirasith" target="_blank">siri</a>,&nbsp;
          <a href="https://efishpool1.bandcamp.com/" target="_blank">e fishpool</a>,&nbsp;
          <a href="https://lowflung.bandcamp.com/" target="_blank">Low Flung</a>,&nbsp;
          <a href="https://melaniehuang.com/" target="_blank">Mel Huang</a>,&nbsp;
          <a href="https://soundcloud.com/mgmldrm" target="_blank">miscmeg</a>,&nbsp;
          <a href="https://emilefrankel.xyz/" target="_blank">Emile Frankel</a>,&nbsp;
          <a href="https://soundcloud.com/hani-r" target="_blank">Hani Hanbali</a>,&nbsp;
          <a href="https://soundcloud.com/izabel_caligiore" target="_blank">Izabel</a>,&nbsp;
          <a href="http://www.hannahwu.com.au/" target="_blank">Hannah Wu</a>,&nbsp;
          <a href="https://pandawong.mmm.page/" target="_blank">Panda Wong</a>, &&nbsp;
          <a href="https://mochamas.itch.io/" target="_blank">Mohamed Chamas</a>&nbsp;
        </p>
      </>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React, WebGL, Express & SQL",
    githubURL: "https://github.com/patrickahase/room2.fm"
  },

  {
    id: "object-animacy",
    title: "Object Animacy",
    publisher: "Arts House",
    year: "2022",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",

    description: 
      <p>
        <em>Object Animacy</em> is a browser based interactive audio-visual-textural work for browsers co-created 
        with <a href="https://rhunterrrr.bandcamp.com/" target="_blank">Asher Elazary</a> and commissioned by 
        Avantwhatever as part of Avantwhatever Festival 2020. We collaborated together on the overall 
        design and its implemention.
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Javascript, React & WebGL"
  },

  {
    id: "music-videos",
    title: "Music Videos",
    publisher: "Various",
    year: "2018 => 20",
    role: "Direction and VFX",
    
    description: 
      <>
        <p>
          I directed, edited and did on VFX for a number of different music videos including:
        </p>
        <a href="https://youtu.be/O7dGP5DEK7o?si=g7C4LhFd-73NUzd1" target="_blank">Caustic Grip – Nothing At All</a>
        <a href="https://youtu.be/aRPKSQW5ZCM?si=NVs6oJe49lCWAE-G" target="_blank">Lupa J - Pull Me Under</a>
        <a href="https://youtu.be/Do5gGpjbqZM?si=hZjQlzbTMQRglIdW" target="_blank">Golden Eye - Poltergeist</a>
        <a href="https://youtu.be/ZNZaNb9x22U?si=Q0N2gCbBs4EheDvW" target="_blank">Hextape - Yubaba</a>
        <a href="https://youtu.be/GJ3FLLoVWjE?si=bQGasGxrzg5rdHo7" target="_blank">Rebel Yell - Next Exit</a>
      </>,

    extLink: "https://room2.fm/",    
    tech: "Premiere, After Effects, Cinema 4D & Unity3D"
  },

  {
    id: "infinite-fluke",
    title: "Infinite Fluke",
    publisher: "Arts House",
    year: "2022",
    role: "Technical Direction and Co-Creator w/ Anuraag Bhatia",
    
    description: 
      <p>
        <em>Infinite Fluke</em> was a VR installation created as a capstone project as part of my undergraduate degree 
        which was subsequently show as part of Wondercore Island's Good Island festival. The work explored embodied spatiality 
        in digital experiences by experimenting with shifting perspective. I designed and implemented the narrative, audio and 
        visuals with additional 3D modeling, textures and animations contributioned by Lanyca Leng and Giorgia Fichera.
      </p>,

    extLink: "https://room2.fm/",    
    tech: "Unity3D & Ableton Live"
  }
]