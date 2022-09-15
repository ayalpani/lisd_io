import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { isMobileBrowser } from "../../../libs/isMobileBrowser";
import { SimpleAnimation } from "../../lib/SimpleAnimation/SimpleAnimation";
import About from "../About/About";
import Device from "../Device/Device";
import LisdFrame from "../LisdFrame/LisdFrame";
import LogoWord from "../LogoWord/LogoWord";
import "./App.scss";

function App() {
  const [isDeviceOn, setIsDeviceOn] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  if (isMobileBrowser) {
    return (
      <div className="App isMobileBrowser">
        <LisdFrame />
      </div>
    );
  }

  return (
    <div className="App" onClick={() => setIsUserInteracting(false)}>
      <div className="DeviceWrapper">
        <Device
          isDeviceOn={isDeviceOn}
          setIsDeviceOn={setIsDeviceOn}
          isUserInteracting={isUserInteracting}
          setIsUserInteracting={setIsUserInteracting}
        >
          {isDeviceOn && <LisdFrame />}
          {!isDeviceOn && <About />}
        </Device>

        {isDeviceOn && (
          <>
            <div className="Popup PopupHeader">
              <SimpleAnimation
                doShow={!isUserInteracting}
                showAnimation="bounceIn"
                hideAnimation="zoomOut"
              >
                <div className="PopupContent">
                  <div className="PopupContentTitle">
                    <LogoWord />
                  </div>
                  <div className="PopupContentMore">
                    <strong>memorize</strong> &amp; <strong>organize</strong>{" "}
                    your personal life.
                  </div>
                </div>
              </SimpleAnimation>
            </div>

            <div className="Popup PopupFooter">
              <SimpleAnimation
                doShow={!isUserInteracting}
                showAnimation="lightSpeedInLeft"
                showAnimationDelay={1000}
                hideAnimation="fadeOut"
              >
                <div className="PopupContent">
                  <span>
                    <a href="https://github.com/ayalpani/lisd5/">
                      <strong>Get Lisd</strong> @github
                    </a>
                  </span>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
              </SimpleAnimation>
            </div>
          </>
        )}

        {isDeviceOn && !isUserInteracting && (
          <div className="Popup PopupFinger">👈</div>
        )}
        {/* PhoneWrapper */}
      </div>
      {/* App */}
    </div>
  );
}

export default App;
