import React from "react";
import TypingText from "./TypingText";

function Projects() {
  const projects = [
    {
      name: "License to Grill",
          description: "For my 2025 major-production project, I worked in Unreal Engine 5 (C++) as a weapons and gameplay programmer, while also assisting my teammates with various Blueprinting tasks. Over the course of six months, my team successfully developed and released the project on Steam and Itch, and showcased it at PAX and SIX.",
      image: "./images/license-to-grill.jpg",
      links:[
        {
          "name": "Download on Steam",
          "link": "https://store.steampowered.com/app/3884700/License_to_Grill/"
         },
        {
          "name": "Download on Itch",
          "link": "https://aieseattle.itch.io/licensetogrill"
        },
        {
         "name": "Trailer (YouTube)",
         "link": "https://www.youtube.com/watch?v=oEpllBueFLw&ab_channel=DavidD"
        }
      ]
    },

    {
        name: "Get Off My Cloud!",
        description: "My Game Design and Production course gave me the opportunity to exercise my design skills with this fast-paced, local-multiplayer brawler. My main focus on the team was designing and engineering the player controller and player-versus-player interactions, emphasizing tense, 'push-pull' style combat.",
        image: "./images/get-off-my-cloud.jpg",
        links: [
            {
                "name": "Download on Itch",
                "link": "https://aieseattle.itch.io/get-off-my-cloud"
            },
            {
                "name": "Gameplay Footage (YouTube)",
                "link": "https://www.youtube.com/watch?v=XtbV7RN_fQU"
            }
        ]
    },


    {
      name: "Lobster Roll",
          description: "For my 2024 class project, I collaborated with a team of nine designers and artists to develop a game in Unity (C#) and release it to Itch within a tight 4 month deadline. I served as Lead Programmer, overseeing core systems and supporting the team throughout development. The project strengthed my teamwork and leadership skills while deepening my experience with Git and Perforce for version control.",
      image: "./images/lobster-roll.jpg",
      links:[
        {
          "name": "Download on Itch",
          "link": "https://aieseattle.itch.io/lobsterroll"
         },
        {
         "name": "Trailer (YouTube)",
         "link": "https://www.youtube.com/watch?v=qynrLnakn_E&ab_channel=DavidD"
        }
      ]
    },
  ]

  // Create project link tags
  for (let proj of projects) {
    const linkTags = (
      <>{
        proj.links.map((linkObj, i) => (  
          <React.Fragment key={linkObj.name}>{i > 0 ? <span className="divider"> | </span> : ""}
            <a href={linkObj.link} target="_blank" rel="noreferrer">{linkObj.name}</a>
          </React.Fragment>
        ))
      }</>
    )
    proj.linkTags = linkTags;
  }

  return (
    <div id="projects" className="background">
      <TypingText className="heading" timeLimit={0.5}>Completed Projects</TypingText>
      <div className="container">
        <div className="row">

          {projects.map(({name, description, image, linkTags}) => (
            <div key={name} className="project shadow-large">
              <div className="project-image">
                <img src={image} className="shadow-large" alt={name} />
              </div>
              {/* <!-- End .project-image --> */}
              <div className="project-info">
                <h3>{name}</h3>
                <p>{description}</p>
                {linkTags}
              </div>
              {/* <!-- End .project-info --> */}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects;
