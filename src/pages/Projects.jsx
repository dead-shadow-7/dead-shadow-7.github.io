import "./Projects.css";
import { projects } from "../data/resume";
import GithubIcon from "../components/icons/GithubIcon";

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-head reveal">
        <p className="page-prompt">
          <span className="prompt-sign">$</span> ls ~/projects
        </p>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A few things I&apos;ve built — backends, search, and AI/ML systems.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project, i) => (
          <article key={project.id} className="project-card reveal">
            <div className="project-card-head">
              <span className="project-no">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="project-card-name">{project.name}</h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`${project.name} on GitHub`}
              >
                <GithubIcon />
                <span>View code</span>
              </a>
            </div>

            <ul className="entry-points">
              {project.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>

            <div className="project-card-foot">
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
