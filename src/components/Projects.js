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
      name: "Lobster Roll",
          description: "This game was built for my 2024 class minor-production project. I collaborated with a team of nine designers and artists to develop a game in Unity (C#) and release it to Itch within a tight 4 month deadline. I served as Lead Programmer, overseeing core systems and supporting the team throughout development. The project strengthed my teamwork and leadership skills while deepening my experience with Git and Perforce for version control.",
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
    {
        name: "Space Station Invasion",
        description: "This was a solo project written in C++ using the Raylib library to handle the drawing of graphics. The challenge of this project was creating a game without any of the tools provided by a game engine, which helped me develop a better understanding of low-level game programming.",
        image: "./images/space-station-invasion.jpg",
        links: [
            {
                "name": "Download on Itch",
                "link": "https://terrence-holmes.itch.io/space-station-invasion"
            },
            {
                "name": "Gameplay Footage (YouTube)",
                "link": "https://www.youtube.com/watch?v=xbj9HvP1JH4&ab_channel=JoelHolmes"
            },
            {
                "name": "Github",
                "link": "https://github.com/TBoneHolmes/Space-Station-Invasion"
            }
        ]
    },
    {
        name: "Lap 6",
        description: "This was a solo project made in Godot within a 4 week period. With this project, I set myself the challenge of completing it within a single month. I set deadlines and goals for each deadline, and then held myself to those deadlines, cutting down on scope when needed.",
        image: "./images/lap-6.jpg",
        links: [
            {
                "name": "Download on Itch",
                "link": "https://terrence-holmes.itch.io/lap-6"
            },
            {
                "name": "Github",
                "link": "https://github.com/Terrence-Holmes/Lap-6"
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
      <TypingText className="heading" timeLimit={0.5}>Projects</TypingText>
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
