import React from "react";
import "./styles.css";
import growthImg from '../../assets/grow.svg';
import topRated from '../../assets/topRated.svg';

const TopRated = () => {
  return (
    <div className="topRatedContainer">
      <div className="left">
        <img src={topRated} className="topImage" />
        <div className="stats">
            <div className="topText">Top Rated</div>
            <div className="topSubText">App on Appstore</div>
        </div>
        </div>
        <div className="center"></div>
        <div className="right">
        <img src={growthImg} className="topImage" />
        <div className="stats">
            <div className="topText">90%</div>
            <div className="topSubText">Client got 90% of noticeable growth</div>
        </div>
        </div>
    </div>
  );
};

export default TopRated;
