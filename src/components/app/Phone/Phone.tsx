import {
  faBatteryThreeQuarters,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { ReactNode } from "react";
import Spacer from "../../lib/Spacer/Spacer";
import "./Phone.scss";

function Phone({
  isPhoneOn,
  setIsPhoneOn,
  children,
}: {
  isPhoneOn: boolean;
  setIsPhoneOn: (is: boolean) => void;
  children: ReactNode;
}) {
  const classes = {
    Phone: classNames({
      Phone: true,
      isPhoneOn,
    }),
  };

  return (
    <div className={classes.Phone}>
      <div className="Screen">
        <StatusBar />

        <div className="ScreenContent">{children}</div>
      </div>
      <div className="Controls">
        <div className="HomeButton" onClick={() => setIsPhoneOn(!isPhoneOn)} />
      </div>
    </div>
  );
}

export default Phone;

function StatusBar() {
  return (
    <div className="StatusBar">
      <FontAwesomeIcon icon={faSignal} color="rgba(0,0,0,0,1)" />

      <Spacer />
      <FontAwesomeIcon icon={faBatteryThreeQuarters} color="rgba(0,128,0,1)" />
    </div>
  );
}
