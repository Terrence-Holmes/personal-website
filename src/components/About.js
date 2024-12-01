import TypingText from "./TypingText";

function About() {
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
          <div className="col-md-8">
            <p>
               Hello, world!
            </p>
            <p>
              My name is Terrence Holmes. I'm a passionate
              and excitable game programmer (and player) who's always eager to level-up
              my skillset! I've been creating games as a hobbyist for 12+ years and I'm
              currently attending AIE (Academy of Interactive Entertainment)
              to turn my lifelong passion into a career.
              I have expertise in several programming languages and game engines
              including Unity, Unreal, Godot, etc. and I'm quick to pick up on new ones.
              I'm a fast learner, highly adaptive to unfamiliar software, a dedicated team
              player and always striving to excel at the task at hand.
            </p>
            <p>
              I love to learn new things and I'm constantly looking to build onto my skillset.
              Aside from programming, I also have experience in game design, audio engineering, 
              music production, graphic design and film editing.
              When I'm not creating, I'm usually either playing games or cooking delicious meals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
