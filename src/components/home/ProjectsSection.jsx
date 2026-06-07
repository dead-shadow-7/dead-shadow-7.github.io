import { projects } from "../../data/resume";
import GithubIcon from "../icons/GithubIcon";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-header">
        <span className="section-index">02</span>
        <h2 className="section-title">Projects</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <div className="project-head">
            <h3 className="project-name">{project.name}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.name} on GitHub`}
            >
              <GithubIcon />
              <span>Code</span>
            </a>
          </div>
          <ul className="entry-points">
            {project.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="stack-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
