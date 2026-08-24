import React from "react";
import TypingText from "./TypingText";

function CurrentProject() {
  const projects = [
    {
      name: "Bounty Hunter Bartender",
          description: "My current project is the debut title from Softlock Studio LLC, an independent studio co-founded by close collaborators and myself. The game is in active development using Unreal Engine 5, targeting a 2027 release. I collaborate with my team to design and engineer interactive gameplay mechanics and create clear documentation to ensure seamless communication across disciplines.",
      image: "./images/bhb-verticle.jpg",
      links:[
        {
          "name": "Website",
          "link": "https://www.softlockstudiollc.com/games"
         },
        {
          "name": "Instagram",
          "link": "https://www.instagram.com/softlockstudio/"
        },
        {
         "name": "YouTube",
         "link": "https://www.youtube.com/@SoftlockStudio"
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
    <div id="projects" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>Current Project</TypingText>
      <div className="container">
        <div className="row">

          {projects.map(({name, description, image, linkTags}) => (
            <div key={name} className="project project-large shadow-large">
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

export default CurrentProject;
