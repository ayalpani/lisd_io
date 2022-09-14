import classNames from "classnames";
import { Position } from "../../lib/Spacer/Position/Position";
import { SimpleAnimation } from "../../lib/Spacer/SimpleAnimation/SimpleAnimation";
import "./HomeButton.scss";

function HomeButton({
  isDeviceOn,
  setIsDeviceOn,
}: {
  isDeviceOn: boolean;
  setIsDeviceOn: (is: boolean) => void;
}) {
  const classes = {
    HomeButton: classNames("HomeButton", {
      isDeviceOn,
    }),
  };

  return (
    <Position type="relative" className="HomeButtonPositioned">
      <SimpleAnimation
        doShow={isDeviceOn}
        showAnimation="bounceIn"
        hideAnimation="fadeIn"
      >
        <div
          className={classes.HomeButton}
          onClick={() => setIsDeviceOn(!isDeviceOn)}
        />
      </SimpleAnimation>
    </Position>
  );
}

export default HomeButton;
