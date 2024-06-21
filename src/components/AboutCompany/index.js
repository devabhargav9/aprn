import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import arrow from "../../assets/whiteArrow.svg";


const AboutCompany = (props) => {
  useEffect(() => {
    console.log("Hello Deva");
  }, []);

  const handleLearnMore  = () => {
    window.location.href = '/aboutUs';
  }

  return (
    <div className="aboutCompanyContainer">
     <img src={props.placeHolderImg}/>
     <div className="aboutContent">
      {props.isAboutUs ?
      (<div className="topContentDiffAbtUs">
      <div className="abtcontent1">{props.headText}</div>
      { <div className="subText2"><span className="content2Blue">{props.subText1}</span> {' '}{props.subText2}</div>}
      <div className="abtcontent2">{props.subText3}</div>
      </div>) :  (<div className="topContentDiff">
      <div className="abtcontent1">{props.headText}</div>
      <div className="abtcontent2">{props.subText1}</div>
      {props.extraHeader ? <div className="subText2">{props.subText3} {' '}<span className="content2Blue">{props.subText2}</span></div> : <div className="subText2"><span className="content2Blue">{props.subText2}</span> {' '}{props.subText3}</div>}
      </div>)}
      <div className="extraContent">
        { props.extraHeader && <div className="extraHeader">{props.extraHeader}</div>}
        <div className="extraContent1">{props.extraText1}</div>
        <br/>
        <div className="extraContent2">{props.extraText2}</div>
        {props.showCTA && <div className="learnMore" onClick={() => handleLearnMore()}>Learn More <img src={arrow} className="whiteArrow" /></div>}
      </div>
     </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(AboutCompany);
