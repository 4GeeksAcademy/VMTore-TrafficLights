import React, { useState } from "react";
//include images into your bundle
import "../../styles/index.css";
import Light from "./Light";

//create your first component

//import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [turnLight, setTurnLight] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  return (
    <div className="traffic-light-container">
      <div className="pole"></div>
      <div className="traffic-light">
        <div
          onClick={() => setTurnLight("red")}
          className={"light red" + (turnLight === "red" ? " shine" : "")}
        ></div>
        <div
          onClick={() => setTurnLight("yellow")}
          className={"light yellow" + (turnLight === "yellow" ? " shine" : "")}
        ></div>
        <div
          onClick={() => setTurnLight("green")}
          className={"light green" + (turnLight === "green" ? " shine" : "")}
        ></div>
        {showPurple && (
          <div
            onClick={() => setTurnLight("purple")}
            className={
              "light purple" + (turnLight === "purple" ? " shine" : "")
            }
          ></div>
        )}
      </div>
      <button
        className="btn btn-dark mt-3"
        onClick={() => setShowPurple(!showPurple)}
      >
        Secret Light
      </button>
    </div>
  );
}

export default Home;
