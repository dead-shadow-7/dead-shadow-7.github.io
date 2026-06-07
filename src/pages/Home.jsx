import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import ExperienceSection from "../components/home/ExperienceSection";
import EducationSection from "../components/home/EducationSection";
import SkillTags from "../components/common/SkillsTags";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ExperienceSection />
      <section className="skills-section reveal">
        <div className="section-header">
          <span className="section-index">02</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <SkillTags />
      </section>
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Home;
