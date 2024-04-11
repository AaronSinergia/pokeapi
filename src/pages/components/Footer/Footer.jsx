import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logos_rrss_div">
          <a
            href="https://github.com/AaronSinergia"
            alt="github"
            target="_blank"
          >
            <img
              src="../../../../public/GitHubLogo.png"
              alt="github_logo"
              className="github_logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-carrasco-romero/"
            alt="linkedin"
            target="_blank"
          >
            <img
              src="../../../../public/linkedin.png"
              alt="linkedin_logo"
              className="linkedin_logo"
            />
          </a>
          <a
            href="https://app.netlify.com/teams/aaronsinergia/overview"
            alt="netlify"
            target="_blank"
          >
            <img
              src="../../../../public/netlify_logo_icon_169924.png"
              alt="netlify_logo"
              className="netlify_logo"
            />
          </a>
        </div>
        <h3 className="footer_title">
          © Creado por Aaron Carrasco Romero - 2024
        </h3>
      </footer>
    </>
  );
};

export default Footer;
