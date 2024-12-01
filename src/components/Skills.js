import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "C#",
    "C/C++",
    "Unreal Blueprints",
    "GDScript",
    "Python",
    "GML",
    "LUA",
    "Unity",
    "Unreal",
    "Godot",
    "GameMaker: Studio",
    "Git",
    "Parsec",
    "Microsoft Office",
    "Audacity",
    "Cakewalk by Bandlab",
    "Graphic Design",
    "Video Editting",
  ]
  
  return (
    <div id="skills" className="background">
      <TypingText className="heading" timeLimit={0.5}>Skills</TypingText>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skills;
