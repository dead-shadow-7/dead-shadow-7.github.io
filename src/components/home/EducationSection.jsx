import { education } from "../../data/resume";

const EducationSection = () => {
  return (
    <section className="education-section reveal">
      <div className="section-header">
        <span className="section-index">03</span>
        <h2 className="section-title">Education</h2>
      </div>
      {education.map((item) => (
        <div key={item.id} className="education-item">
          <img
            src={item.logo}
            alt={item.institution}
            className="university-logo"
          />
          <div className="education-content">
            <div className="education-details">
              <h3 className="college-name">{item.institution}</h3>
              <p className="university-degree">{item.degree}</p>
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

export default EducationSection;
