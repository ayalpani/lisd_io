import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { isMobileBrowser } from "../../../libs/isMobileBrowser";
import { SimpleAnimation } from "../../lib/Spacer/SimpleAnimation/SimpleAnimation";
import About from "../About/About";
import LisdFrame from "../LisdFrame/LisdFrame";
import Phone from "../Phone/Phone";
import "./App.scss";

function App() {
  const [isPhoneOn, setIsPhoneOn] = useState(true);
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
      <div className="PhoneWrapper">
        <Phone isPhoneOn={isPhoneOn} setIsPhoneOn={setIsPhoneOn}>
          {isPhoneOn && <LisdFrame />}
          {!isPhoneOn && <About />}
        </Phone>

        <div className="Popup PopupHeader">
          <SimpleAnimation
            doShow={!isUserInteracting}
            showAnimation="bounceIn"
            hideAnimation="zoomOut"
          >
            <div className="PopupContent">
              <div className="PopupContentTitle">
                <span>Only For You</span>
              </div>
              <div className="PopupContentMore">
                With <strong>Lisd</strong> you safely <strong>memorize</strong>{" "}
                &amp; <strong>organize</strong> your personal life.
              </div>
            </div>
          </SimpleAnimation>
        </div>

        <div className="Popup PopupFooter">
          <SimpleAnimation
            doShow={!isUserInteracting}
            showAnimation=""
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

        {!isUserInteracting && (
          <>
            <div
              className="SecretCurtain"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsUserInteracting(true);
              }}
            />

            <div className="Popup PopupFinger">👈</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
