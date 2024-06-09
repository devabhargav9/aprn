import React from "react";
import "./styles.css";
import caseStudiesHead from "../../assets/caseStudiesHead.svg";
import balanceCS from "../../assets/balanceCS.svg";
import kcCS from "../../assets/kcCS.svg";
import malayCs from "../../assets/malayCs.svg";

const CaseStudiesSection = () => {
  const redirectToCaseStudy = (caseStudy) => {
    return () => {
      window.location.href = `/caseStudies/${caseStudy}`;
    };
  };

  return (
    <div className="caseStudiesContainer">
      <img
        src={caseStudiesHead}
        alt="caseStudiesHead"
        className="caseStudiesHead"
      />
      <div className="caseSudiesSection">
        <img
          src={balanceCS}
          alt="Balance Case Study"
          className="balanceImage"
          onClick={redirectToCaseStudy("balance-app")}
        ></img>
        <img
          src={malayCs}
          alt="Malaysian airlines Case Study"
          className="balanceImage"
          onClick={redirectToCaseStudy("malaysia-airlines")}
        ></img>

        <img
          src={kcCS}
          alt="KC overseas Case Study"
          className="balanceImage"
          onClick={redirectToCaseStudy("kc-overseas")}
        ></img>
         <img
          src={kcCS}
          alt="KC overseas Case Study"
          className="balanceImage"
          onClick={redirectToCaseStudy("maybank")}
        ></img>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
