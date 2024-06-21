import React from "react";
import "./styles.css";
import caseStudiesHead from "../../assets/caseStudiesHead.svg";
import balanceCS from "../../assets/balanceCS.svg";
import kcCS from "../../assets/kcCS.svg";
import malayCs from "../../assets/malayCs.svg";
import mayBankCS from "../../assets/mayBankcs.svg";
import carPool from '../../assets/carPoolcs.svg';
import devopscs1 from '../../assets/devopscs1.svg';
import devopscs2 from '../../assets/devopscs2.svg';
import devopscs3 from '../../assets/devopscs3.svg';
import devopscs4 from '../../assets/devopscs4.svg';
import devopscs5 from '../../assets/devopscs5.svg';





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
         {/* <img
          src={mayBankCS}
          alt="KC overseas Case Study"
          className="balanceImage"
          onClick={redirectToCaseStudy("maybank")}
        ></img> */}
      </div>
      <div className="caseSudiesSection2">
        <img
          src={carPool}
          alt="Balance Case Study"
          className="carPoolImg"
          onClick={redirectToCaseStudy("balance-app")}
        ></img>
        <img
          src={mayBankCS}
          alt="KC overseas Case Study"
          className="mayImage"
          onClick={redirectToCaseStudy("maybank")}
        ></img>

        <img
          src={devopscs1}
          alt="KC overseas Case Study"
          className="carPoolImg"
          onClick={redirectToCaseStudy("kc-overseas")}
        ></img>
        
      </div>
      <div className="caseSudiesSection2">
        <img
          src={devopscs2}
          alt="Balance Case Study"
          className="devopsCS2"
          onClick={redirectToCaseStudy("balance-app")}
        ></img>
        <img
          src={devopscs3}
          alt="KC overseas Case Study"
          className="devopsCS3"
          onClick={redirectToCaseStudy("maybank")}
        ></img>        
      </div>
      <div className="caseSudiesSection2">
        <img
          src={devopscs4}
          alt="KC overseas Case Study"
          className="devopsCS3"
          onClick={redirectToCaseStudy("maybank")}
        ></img>   
         <img
          src={devopscs5}
          alt="Balance Case Study"
          className="devopsCS2"
          onClick={redirectToCaseStudy("balance-app")}
        ></img>     
      </div>
    </div>
  );
};

export default CaseStudiesSection;
