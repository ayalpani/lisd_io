import {
  faBatteryThreeQuarters,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spacer from "../../lib/Spacer/Spacer";

function DeviceStatusBar() {
  return (
    <div className="StatusBar">
      <FontAwesomeIcon icon={faSignal} color="white" />

      <Spacer />
      <FontAwesomeIcon icon={faBatteryThreeQuarters} color="green" />
    </div>
  );
}

export default DeviceStatusBar;
