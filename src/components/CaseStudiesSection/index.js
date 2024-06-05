import React from "react";
import "./styles.css";
import caseStudiesHead from '../../assets/caseStudiesHead.svg';
import  balanceCS from '../../assets/balanceCS.svg';


const CaseStudiesSection = () => {
    const redirectToCaseStudy = (caseStudy) => {
        return () => {
        window.location.href = `/caseStudies/${caseStudy}`;
        }
    }

  return (
    <div className="caseStudiesContainer">
        <img src={caseStudiesHead} alt="caseStudiesHead" className="caseStudiesHead" />
        <div className="caseSudiesSection">
            <img src={balanceCS} alt="Balance Case Study" className="balanceImage" onClick={redirectToCaseStudy('balance-app')}></img>
            <img src={balanceCS} alt="Balance Case Study" className="balanceImage" onClick={redirectToCaseStudy('kc-overseas')}></img>
        </div>
    </div>
  );
};

export default CaseStudiesSection;
