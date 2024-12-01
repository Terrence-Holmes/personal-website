/*
    cd C:\Users\joelh\Documents\Website\personal-website

    To test:
    npm run start

    To build:
    npm run build
*/


import Nav from "./Nav";
import Lead from "./Lead";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {

    return (
        <>
            <Nav />
            <Lead />
            <div id="content">
                <About />
                <Experience />
                <Projects />
                <Education />
                <Skills />
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
