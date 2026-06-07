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
        21, a CS undergrad who likes understanding{" "}
        <span className="accent-text">how systems work</span>, not just making
        them work. I build backends and AI/ML systems — APIs, search engines,
        and RAG pipelines — and care about the tradeoffs behind real-world
        software. If you've got something cool to build, let's talk.
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
