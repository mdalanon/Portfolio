import "./styles/global.css";

import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Education  from "./components/Education";
import { Skills, Projects }          from "./components/SkillsProjects";
import DesignSection                 from "./components/DesignSection";
import ContactSection              from "./components/ContactSection";
import { Experience, Leadership }    from "./components/ExperienceLeadership";
import Events                        from "./components/Events";
import { Achievements, Footer }      from "./components/AchievementsContact";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <DesignSection />
      <Experience />
      <Leadership />
      <Events />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
}
