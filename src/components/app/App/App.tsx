import React, { useState } from "react";
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

        <div className="Popup PopupTitle animate__animated animate__bounceIn animate__delay-1s">
          Lisd - For You
        </div>
      </div>
    </div>
  );
}

export default App;
