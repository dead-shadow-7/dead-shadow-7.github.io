import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ProjectsSection from "../components/home/ProjectsSection";
import EducationSection from "../components/home/EducationSection";
import CertificationsSection from "../components/home/CertificationsSection";
import SkillTags from "../components/common/SkillsTags";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <section id="skills" className="skills-section reveal">
        <div className="section-header">
          <span className="section-index">03</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <SkillTags />
      </section>
      <CertificationsSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Home;
