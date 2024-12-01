import TypingText from "./TypingText";
import React from "react";

function Experience() {
  const jobs = [
    {
      employer: "Academy of Interactive Entertainment",
      jobTitle: "Game Programming Course",
      date: "August 2023 - Present",
      description: [
        "Programming mostly in C#, C++ and Blueprints using the Unity and Unreal 5 game engines.",
        "Worked as a part of a larger team with game designers, artists, and other programmers to collaberate on group projects.",
        "Created a game in less than 24 hours with a small team as part of a game jam exercise.",
      ],
    },
    {
    employer: "C#, C++, Blueprints",
    jobTitle: "Unity and Unreal",
    date: "2022 - Present",
    description: [
        "Developed various personal and school projects using Unity and Unreal, programmed using C#, C++ and Unreal's Blueprints.",
        "Worked with Unity and Unreal in team settings, using Github and Perforce as version control to collaborate on the same project."
      ],
    },
    {
      employer: "GDScript",
      jobTitle: "Godot",
      date: "2019 - Present",
      description: [
        "Developed personal projects in 2D and 3D using the Godot game engine and GDScript programming language.",
        "Created a game with a small team of students in Godot for our Winter Gamejam 2023 project."
      ],
    },
    {
      employer: "GML",
      jobTitle: "GameMaker: Studio",
      date: "2010 - 2020",
      description: [
        "Created various games and other projects in GameMaker 8, GameMaker: Studio and GameMaker: Studio 2 using GameMaker's custom GML scripting language, as well their node-based visual scripting system."
      ],
    },
  ];

  return (
    <div id="experience" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>
        Experience
      </TypingText>
      <div id="experience-timeline">
        {jobs.map(({ employer, jobTitle, date, description }) => (
          <React.Fragment key={date}>
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
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
