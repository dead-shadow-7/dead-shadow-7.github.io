import { experience } from "../../data/resume";

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section reveal">
      <div className="section-header">
        <span className="section-index">01</span>
        <h2 className="section-title">Experience</h2>
      </div>
      {experience.map((item) => (
        <div key={item.id} className="entry">
          {item.logo ? (
            <img src={item.logo} alt={item.company} className="entry-logo" />
          ) : (
            <span className="entry-logo entry-logo--fallback">
              {initials(item.company)}
            </span>
          )}
          <div className="entry-body">
            <div className="entry-head">
              <div>
                <h3 className="entry-title">{item.company}</h3>
                <p className="entry-subtitle">
                  {item.role}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
              <span className="entry-meta">{item.duration}</span>
            </div>
            {item.points && (
              <ul className="entry-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
