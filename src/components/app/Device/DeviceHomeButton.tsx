import classNames from "classnames";
import {
  actionSetIsDeviceOn,
  useSubscribeIsDeviceOn,
} from "../../../state/isDeviceOn";
import { actionSetIsUserInteracting } from "../../../state/isUserInteracting.state";

import { Position } from "../../lib/Position/Position";
import { SimpleAnimation } from "../../lib/SimpleAnimation/SimpleAnimation";
import "./DeviceHomeButton.scss";

function DeviceHomeButton() {
  const isDeviceOn = useSubscribeIsDeviceOn();

  const classes = {
    DeviceHomeButton: classNames("DeviceHomeButton", { isDeviceOn }),
  };

  return (
    <Position type="relative" className="DeviceHomeButton_Position">
      <SimpleAnimation
        className="DeviceHomeButton_Animation"
        doShow={isDeviceOn}
        showAnimation="bounceIn"
        hideAnimation="fadeIn"
      >
        <div
          className={classes.DeviceHomeButton}
          onClick={(e) => {
            e.stopPropagation();
            console.log("DeviceHomeButton pressed", isDeviceOn);
            actionSetIsDeviceOn(!isDeviceOn);
            actionSetIsUserInteracting(true);
          }}
        />
      </SimpleAnimation>
    </Position>
  );
}

export default DeviceHomeButton;
