import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import aboutCompany from "../../assets/aboutCompany.png";
import whiteArrow from "../../assets/whiteArrow.svg";

const AboutCompany = (props) => {
  useEffect(() => {
    console.log("Hello Deva");
  }, []);

  return (
    <div className="aboutCompanyContainer">
      <img
        src={props.placeHolderImg}
        alt="About Company"
        className="aboutCompanyImage"
      />
      <div className="aboutContent">
        <div className="abtcontent1">{props.headText}</div>
        <div className="abtcontent2">
          {props.subText1} <br />
          <span className="content2Blue">{props.subText2}</span>{" "}
          {props.subText3}
        </div>
        <div className="extraContent">
          {props.extraHeader && (
            <div className="extraHeader">{props.extraHeader}</div>
          )}
          <div className="extraContent1">{props.extraText1}</div>
          <div className="extraContent2">{props.extraText2}</div>
          {props.showCTA && (
            <div className="learnMore">
              Learn More{" "}
              <img src={whiteArrow} alt="whiteArrow" className="whiteArrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(AboutCompany);
