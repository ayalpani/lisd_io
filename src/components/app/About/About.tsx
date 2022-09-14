import classNames from "classnames";
import LogoWord from "../LogoWord/LogoWord";
import "./About.scss";

function About() {
  const classes = {
    About: classNames({
      About: true,
    }),
  };

  return (
    <div className={classes.About}>
      <h1>
        <LogoWord />
      </h1>
      <span>
        By <a href="mailto:arash@yalpani.de">Arash</a>
      </span>
      <span>
        Available on <a href="https://github.com/ayalpani/lisd5">GitHub</a>
      </span>
    </div>
  );
}

export default About;
