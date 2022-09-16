import { ReactNode } from "react";
import { actionSetIsUserInteracting } from "../../../state/isUserInteracting.state";
import "./Device.scss";
import DeviceControls from "./DeviceControls";
import DeviceSecretCurtain from "./DeviceSecretCurtain";
import DeviceStatusBar from "./DeviceStatusBar";

function Device({ children }: { children: ReactNode }) {
  return (
    <div
      className="Device"
      onClick={(e) => {
        e.stopPropagation();
        actionSetIsUserInteracting(true);
      }}
    >
      <div className="Screen">
        <DeviceStatusBar />

        <div className="ScreenContent">
          {children}

          <DeviceSecretCurtain />
        </div>
      </div>

      <DeviceControls />
    </div>
  );
}

export default Device;
