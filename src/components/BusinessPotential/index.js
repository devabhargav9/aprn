import React from "react";
import s from "./styles.css";

const BusinessPotential = (props) => {
  return (
    <div className="businessPotential">
      <div className="howText">How we help businesses</div>
      <div className="mainText">
        Unlocking Business Potential with  <br/>our <span className="mainTextBlue">{props.diffText}</span>
      </div>
      <div className="mainSubText">
        Our expert team specializes in creating robust and scalable mobile
        applications that  <br/> redefine industry standards within the mobile-first
        landscape. Our mobile app development  <br/>services can help you confidently
        navigate the ever-evolving mobile landscape and seize  <br/>the opportunities
        that guarantee maximum ROI.
      </div>
    </div>
  );
};

export default BusinessPotential;
