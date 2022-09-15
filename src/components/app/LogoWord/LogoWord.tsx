import { ANIMATIONS_DURATION } from "../../../config/constants";
import { SimpleAnimation } from "../../lib/SimpleAnimation/SimpleAnimation";
import "./LogoWord.scss";

function LogoLetter({
  color,
  index = 0,
  letter,
}: {
  color: string;
  index?: number;
  letter: string;
}) {
  return (
    <SimpleAnimation
      showAnimation="bounceIn"
      showAnimationDelay={(index * ANIMATIONS_DURATION) / 5}
    >
      <span
        style={{
          color,
          transform: `rotate(${index % 2 === 0 ? "-" : ""}5deg)`,
        }}
      >
        {letter}
      </span>
    </SimpleAnimation>
  );
}

export function LogoWord() {
  return (
    <div className="LogoWord">
      <LogoLetter color="orange" letter="L" index={0} />
      <LogoLetter color="red" letter="i" index={1} />
      <LogoLetter color="green" letter="s" index={2} />
      <LogoLetter color="blue" letter="d" index={3} />
    </div>
  );
}

export default LogoWord;
