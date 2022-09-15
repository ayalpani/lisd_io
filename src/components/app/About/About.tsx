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
    </div>
  );
}

export default About;
