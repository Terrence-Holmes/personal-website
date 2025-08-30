import TypingText from "./TypingText";

function Education() {

  const education = [
    {
      school: "Academy of Interactive Entertainment (AIE)",
      date: "August 2023 - Present",
      degree: "Advanced Diploma - Game Programming (Acquired in 2025)",
      degree2: "Advanced Diploma - Game Design & Production (Expected to finish in 2027)",
      description: [
        "Learned C# and C++ for general purpose use, as well as in-depth video game specific implimentations.",
        "Built games using Unity, Unreal 5 and Godot 4 game engines.",
        "Built games without a game engine using C++ and the Raylib library.",
        "Collaborated on projects in team settings with other game designers, artists and programmers.",
        "Learned how to use different version control software, including Github and Perforce.",
        "Created games under tight time schedules and scrict deadlines, developing a sense of scope and priority."
      ]
    },
    {
      school: "Homeschool",
      date: "September 2012 - April 2016",
      degree: "Highschool Diploma",
      description: [
        "Got involved in several game design courses during my highschool years, and constantly built games as a hobby outside of school.",
        "Built games using GML (Game Maker Language) in GameMaker 8, GameMaker: Studio and GameMaker: Studio 2.",
        "Built games using LUA in Roblox studio.",
        "Practiced game design by making adventure maps in Minecraft and experimenting with many level editors in many different games."
      ]
    },
  ]
  
  return (
    <div id="education" className="background">
      <TypingText className="heading" timeLimit={0.5}>Education</TypingText>
      {education.map(({school, date, degree, degree2, description}) => (
        <div className="education-block" key={degree}>
          <h3>{school}</h3>
          <span className="education-date">{date}</span>
          <h4>{degree}</h4>
          <h4>{degree2}</h4>
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            <ul>{description.map(item => <li key={item}>{item}</li>)}</ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Education;