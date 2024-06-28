import React from "react";
import "./styles.css";


const TopRated = (props) => {
  return (
    <div>
    <div className="topRatedContainer">
      <div className="left">
        <img src={props.icon1} className="topImage" />
        <div className="stats">
            <div className="topText">{props.stat1}</div>
            <div className="topSubText">{props.text1}</div>
        </div>
        </div>
        <div className="center"></div>
        <div className="right">
        <img src={props.icon2} className="topImage" />
        <div className="stats">
            <div className="topText">{props.stat2}</div>
            <div className="topSubText">{props.text2}</div>
        </div>
        </div>
    </div>
    <div className="right" style={{paddingTop: '15px'}}>
        <img src={props.icon3} className="topImage" />
        <div className="stats">
            <div className="topSubText" style={{width: '70%'}}>{props.text3}</div>
        </div>
        </div>
    </div>
  );
};

export default TopRated;
