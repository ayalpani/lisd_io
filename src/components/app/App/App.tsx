import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import About from "../About/About";
import LisdFrame from "../LisdFrame/LisdFrame";
import Phone from "../Phone/Phone";
import "./App.scss";

function App() {
  const [isPhoneOn, setIsPhoneOn] = useState(true);

  return (
    <div className="App">
      <div className="PhoneWrapper">
        <Phone isPhoneOn={isPhoneOn} setIsPhoneOn={setIsPhoneOn}>
          {isPhoneOn && <LisdFrame />}
          {!isPhoneOn && <About />}
        </Phone>

        <div className="Popup PopupHeader">
          <div className="animate__animated animate__bounceIn animate__delay-1s">
            <div className="PopupContent">
              <div className="PopupContentTitle">
                <span>Only For You</span>
              </div>
              <div className="PopupContentMore">
                With <strong>Lisd</strong> you safely <strong>memorize</strong>{" "}
                &amp; <strong>organize</strong> your personal life.
              </div>
            </div>
          </div>
        </div>

        <div className="Popup PopupFooter">
          <div className="animate__animated animate__rotateIn animate__delay-2s">
            <div className="PopupContent">
              <span>
                <a href="https://github.com/ayalpani/lisd5/">
                  <strong>getlisd</strong> @github
                </a>
              </span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
