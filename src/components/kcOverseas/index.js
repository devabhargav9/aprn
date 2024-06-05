import React from "react";
import "./styles.css";
import { kcData } from "../../data";
import kcImage1 from "../../assets/kcImage1.svg";
import kcImage2 from "../../assets/kcImage2.svg";
import kcImage3 from "../../assets/kcImage3.svg";
import kcImage4 from "../../assets/kcImage4.svg";
import kcImage5 from "../../assets/kcImage5.svg";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";

const KCOverSeas = () => {
  const kcData = [kcImage1, kcImage2, kcImage3, kcImage4, kcImage5];

  return (
    <>
      <HeadNavBar />
      <div className="semiCircle"></div>
      <div className="kcContainer">
        {kcData.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="KC-overseas-image"
            className={index === 0 ? "image-padding" : "image"}
          />
        ))}
      </div>
      <Footer showAstronaut={true}/>
    </>
  );
};

export default KCOverSeas;
