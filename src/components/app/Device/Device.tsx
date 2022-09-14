import {
  faBatteryThreeQuarters,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { ReactNode } from "react";
import Spacer from "../../lib/Spacer/Spacer";
import HomeButton from "../HomeButton/HomeButton";
import "./Device.scss";

function Device({
  isDeviceOn,
  setIsDeviceOn,
  isUserInteracting,
  setIsUserInteracting,
  children,
}: {
  isDeviceOn: boolean;
  setIsDeviceOn: (is: boolean) => void;
  isUserInteracting: boolean;
  setIsUserInteracting: (is: boolean) => void;
  children: ReactNode;
}) {
  const classes = {
    Device: classNames({
      Device: true,
      isDeviceOn,
    }),
  };

  return (
    <div className={classes.Device}>
      <div className="Screen">
        <StatusBar />
        <div className="ScreenContent">
          {children}

          {isDeviceOn && !isUserInteracting && (
            <>
              <div
                className="SecretCurtain"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsUserInteracting(true);
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className="DeviceControls">
        <HomeButton isDeviceOn={isDeviceOn} setIsDeviceOn={setIsDeviceOn} />
      </div>
    </div>
  );
}

export default Device;

function StatusBar() {
  return (
    <div className="StatusBar">
      <FontAwesomeIcon icon={faSignal} color="white" />

      <Spacer />
      <FontAwesomeIcon icon={faBatteryThreeQuarters} color="green" />
    </div>
  );
}
