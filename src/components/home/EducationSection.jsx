import { education } from "../../data/resume";

const EducationSection = () => {
  return (
    <section id="education" className="education-section reveal">
      <div className="section-header">
        <span className="section-index">05</span>
        <h2 className="section-title">Education</h2>
      </div>
      {education.map((item) => (
        <div key={item.id} className="entry">
          <img
            src={item.logo}
            alt={item.institution}
            className="entry-logo"
          />
          <div className="entry-body">
            <div className="entry-head">
              <div>
                <h3 className="entry-title">{item.institution}</h3>
                <p className="entry-subtitle">
                  {item.degree}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
              <span className="entry-meta">{item.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
