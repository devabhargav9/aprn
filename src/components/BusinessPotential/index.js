import React from "react";
import s from "./styles.css";

const BusinessPotential = (props) => {
  return (
    <div className="businessPotential">
      <div className="howText">How we help businesses</div>
      <div className="mainText">
        Unlocking Business Potential with <br />
        our <span className="mainTextBlue">{props.diffText}</span>
      </div>
      <div className="mainSubText">
        {props.subText1} <br /> <br />
        {props.subText2}
      </div>
    </div>
  );
};

export default BusinessPotential;
