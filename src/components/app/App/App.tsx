import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ANIMATIONS_DURATION } from "../../../config/constants";
import { isMobileBrowser } from "../../../libs/isMobileBrowser";
import {
  actionSetIsDeviceOn,
  useSubscribeIsDeviceOn,
} from "../../../state/isDeviceOn";
import {
  actionSetIsUserInteracting,
  useSubscribeIsUserInteracting,
} from "../../../state/isUserInteracting.state";
import { SimpleAnimation } from "../../lib/SimpleAnimation/SimpleAnimation";
import About from "../About/About";
import Device from "../Device/Device";
import LisdFrame from "../LisdFrame/LisdFrame";
import LogoWord from "../LogoWord/LogoWord";
import "./App.scss";

function App() {
  const isDeviceOn = useSubscribeIsDeviceOn();
  const isUserInteracting = useSubscribeIsUserInteracting();

  if (isMobileBrowser) {
    return (
      <div className="App isMobileBrowser">
        <LisdFrame />
      </div>
    );
  }

  return (
    <div
      className="App"
      onClick={() => {
        actionSetIsDeviceOn(true);
        actionSetIsUserInteracting(false);
      }}
    >
      <div className="DeviceWrapper">
        <Device>
          {isDeviceOn && <LisdFrame />}
          {!isDeviceOn && <About />}
        </Device>

        <SimpleAnimation doShow={isUserInteracting}>
          <div className="Popup PopupHeader">
            <SimpleAnimation
              doShow={!isUserInteracting}
              showAnimation="bounceIn"
              hideAnimation="fadeOut"
            >
              <div className="PopupContent">
                <div className="PopupContentTitle">
                  {!isUserInteracting && <LogoWord />}
                </div>
                <div className="PopupContentMore">
                  <strong>memorize</strong> &amp; <strong>organize</strong> your
                  personal life.
                </div>
              </div>
            </SimpleAnimation>
          </div>

          <div className="Popup PopupFooter">
            <SimpleAnimation
              doShow={!isUserInteracting}
              showAnimation="lightSpeedInLeft"
              showAnimationDelay={ANIMATIONS_DURATION / 2}
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
        </SimpleAnimation>

        {!isUserInteracting && <div className="Popup PopupFinger">👈</div>}
        {/* PhoneWrapper */}
      </div>
      {/* App */}

      {/* <br />
      isUserInteracting:{isUserInteracting ? "yes" : "no"}
      <br />
      <br />
      isDeviceOn:{isDeviceOn ? "yes" : "no"} */}
    </div>
  );
}

export default App;
