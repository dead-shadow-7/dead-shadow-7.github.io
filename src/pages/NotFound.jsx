import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const pages = [
  { label: "~", to: "/", hint: "home" },
  { label: "projects", to: "/projects" },
  { label: "blog", to: "/blog" },
];

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="not-found">
      <div className="terminal reveal">
        <div className="terminal__bar">
          <span className="terminal__dot red" />
          <span className="terminal__dot yellow" />
          <span className="terminal__dot green" />
          <span className="terminal__title">shivam@portfolio: ~</span>
        </div>

        <div className="terminal__body">
          <p className="term-line">
            <span className="term-prompt">$</span> cd
            <span className="term-path"> {pathname}</span>
          </p>
          <p className="term-out">
            bash: cd: <span className="term-path">{pathname}</span>: No such file
            or directory
          </p>

          <p className="term-line term-spaced">
            <span className="term-prompt">$</span> ls
          </p>
          <ul className="term-list">
            {pages.map((page) => (
              <li key={page.to}>
                <span className="term-arrow">→</span>
                <Link to={page.to} className="term-link">
                  {page.label}
                </Link>
                {page.hint && <span className="term-hint"># {page.hint}</span>}
              </li>
            ))}
          </ul>

          <p className="term-line term-spaced">
            <span className="term-prompt">$</span>
            <span className="term-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
