import TypingText from "./TypingText";

function About() {
    const skills = [
    "C#",
    "C++",
    "Unreal Blueprints",
    "GDScript",
    "GameMaker Language",
    "Unreal Engine",
    "Godot",
    "Unity ",
    "GameMaker: Studio",
    "Game Design",
    "Git",
    "Perforce",
    "Microsoft Office",
    "Digital Audio Workstations",
    "Video Editing",
  ]

  return (
    <div id="about" className="background">
      <div className="container">



          <div className="row">
            <div className="col-md-4">
              <TypingText className="heading" timeLimit={0.5}>
                About Me
              </TypingText>
              <img src="./images/profile-pic-sm.jpg" alt="profile pic" />
            </div>
            <div className="col-md-4">
              <p>
                 Hello, world!
              </p>
              <p>
                My name is Terrence Holmes. I'm a passionate game developer, specializing in gameplay and systems programming.
                I've been creating games for over 14 years and officially transitioned my lifelong hobby into a career in 2023.
                I earned an advanced diploma in Computer Science for Games from the Academy of Interactive Entertainment (AIE, Seattle) in 2025
                and expect to receive a second advanced diploma (for Game Design and Production) in 2027.
              </p>
              <p>
                Outside of my studies at AIE, I am a co-founder and Chief Software Officer at Softlock Studio LLC,
                where I design and program core gameplay systems for our debut title, <i>Bounty Hunter Bartender</i>.
              </p>

              <a 
              href="https://www.softlockstudiollc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="banner-link"
            >
              <img 
                src="./images/softlock-banner.jpg" 
                alt="Softlock Studio Banner" 
                className="img-fluid banner-img" 
                style={{ width: "100%", height: "auto", borderRadius: "60px", border: "2px solid #4A7FA0"}}
              />
            </a>

            </div>
            <div className="col-md-4">
              <TypingText className="heading" timeLimit={0.5}>
                Skills
              </TypingText>
             <div id="skills" className="background">
              <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
              </div>
            </div>
          </div>



      </div>
    </div>
  );
}

export default About;


