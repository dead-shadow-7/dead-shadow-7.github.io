import { experience } from "../../data/resume";

const ExperienceSection = () => {
  return (
    <section className="experience-section reveal">
      <div className="section-header">
        <span className="section-index">01</span>
        <h2 className="section-title">Experience</h2>
      </div>
      {experience.map((item) => (
        <div key={item.id} className="experience-item">
          <img src={item.logo} alt={item.company} className="company-logo" />
          <div className="experience-content">
            <div className="experience-details">
              <h3 className="company-name">{item.company}</h3>
              <p className="role-title">{item.role}</p>
              {item.description && (
                <p className="item-description">{item.description}</p>
              )}
            </div>
            <div className="duration">{item.duration}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
