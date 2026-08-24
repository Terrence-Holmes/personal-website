import TypingText from "./TypingText";
import React from "react";

function Experience() {
  const jobs = [
    {
      employer: "Softlock Studio LLC",
      jobTitle: "Co-Founder | Chief Software Officer",
      date: "September 2025 - Present",
      image: "/images/softlock-studio.jpg",
      description: [
          "Collaborate across disciplines teams to design, build and deploy Unreal Engine 5 games to Steam and the Epic Game Store using C++.",
          "Engineer modular tools and systems to streamline design workflows and encourage studio creatity.",
          "Create comprehensive documentation detailing system architecture and core mechanics.",
          "Managed programming task pipelines and worked with Production to keep projects on target."
      ],
    },
    {
      employer: "Academy of Interactive Entertainment",
      jobTitle: "Game Design and Production",
      date: "August 2025 - Present",
      image: "/images/aie.jpg",
      description: [
          "Build and refine engaging, memorable levels across a variety of genres.",
          "Iterate rapidly on gameplay feel and system balance to deliver a polished player experience.",
          "Design and pitch original game concepts to peers and leadership.",
          "Script responsive character controllers, level events, and core gameplay mechanics using UE5 Blueprints and C++."
      ],
    },
    {
    employer: "Academy of Interactive Entertainment",
    jobTitle: "Computer Science for Games",
    date: "August 2023 - July 2025",
    image: "/images/aie.jpg",
    description: [
        "Develop gameplay systems and mechanics primarily using C#, C++ and UE5 Blueprints using the Unity and Unreal 5 game engines.",
        "Collaborate with a team game designers, artists and other programmers to collaberate on group projects using version control systems including Git and Perforce.",
        "Navigate the full development and production process, progressing projects from initial concept to final release on Steam and Itch.io.",
        "Rapidly prototype and develop complete games within a strict 24-hour time constraint during various game jam exercises."
      ],
    },
  ];

  return (
    <div id="experience" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>
        Experience
      </TypingText>
      <div id="experience-timeline">
        {jobs.map(({ employer, jobTitle, date, image, description }) => (
          <React.Fragment key={date}>
            <div
              className="vtimeline-icon"
              style={{ background: "transparent", border: "none" /*Remove this line to return the blue circle image background*/}}
            >
              {/*<i className="fa fa-map-marker"></i>*/}
              <img
                src={image}
                alt={'${employer} logo'}
                style={{width: "100%", height: "100%", objectFit: "contain"}}
              />
            </div>
            <div className="vtimeline-point">
              <span className="vtimeline-date">{date}</span>
              <div className="vtimeline-block">
                <div className="vtimeline-content">
                  <h3>{jobTitle}</h3>
                  <h4>{employer}</h4>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    <ul>
                      {description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Experience;
