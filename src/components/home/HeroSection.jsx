import avatarImage from "../../assets/ProfileImage.png";

const HeroSection = () => {
  return (
    <header className="hero reveal">
      <img src={avatarImage} alt="Shivam Rajput" className="avatar" />
      <p className="hero-prompt">
        <span className="prompt-sign">$</span> whoami
      </p>
      <h1 className="hero-title">
        Hi, I'm Shivam.<span className="cursor" aria-hidden="true" />
      </h1>
      <p className="hero-kicker">// backend &amp; AI/ML developer</p>
      <p className="subheading">
        21, CS undergrad. I build backends and AI/ML systems: APIs, search
        engines, RAG pipelines. What I actually enjoy is figuring out{" "}
        <span className="accent-text">how things work underneath</span>. Got
        something to build? Let's talk.
      </p>
      <div className="contact-buttons">
        <a
          href="mailto:shivamrajput.dev@proton.me"
          className="contact-button primary"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/shivamrajput12119/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button secondary"
        >
          Let's connect →
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
