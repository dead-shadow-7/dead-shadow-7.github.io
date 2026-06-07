import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="page-head reveal">
        <p className="page-prompt">
          <span className="prompt-sign">$</span> ls ~/blog
        </p>
        <h1 className="page-title">Blog</h1>
      </header>

      <div className="blog-empty reveal">
        <p className="blog-empty-line">
          <span className="blog-comment">// no posts yet — writing soon.</span>
        </p>
        <p className="blog-empty-sub">
          I&apos;m planning to write about backends, search, and the AI/ML
          systems I build. Check back later.
        </p>
        <Link to="/" className="blog-back">
          <span className="prompt-sign">$</span> cd ~
        </Link>
      </div>
    </div>
  );
};

export default Blog;
