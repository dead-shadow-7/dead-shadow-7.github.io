import { skills } from "../../data/resume";

const SkillTags = () => {
  return (
    <div className="skill-groups">
      {skills.map((group) => (
        <div key={group.category} className="skill-group">
          <span className="skill-group-label">{group.category}</span>
          <div className="skill-tags">
            {group.items.map((item) => (
              <span key={item} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillTags;
