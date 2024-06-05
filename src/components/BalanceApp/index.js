import React from "react";
import "./styles.css";
import { kcData } from "../../data";
import balance1 from "../../assets/balance1.svg";
import balance2 from "../../assets/balance2.svg";
import balance3 from "../../assets/balance3.svg";
import balance4 from "../../assets/balance4.svg";
import balance5 from "../../assets/balance5.svg";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";

const BalanceApp = () => {
  const balanceData = [balance1, balance2, balance3, balance4, balance5];

  return (
    <>
      <HeadNavBar />
      <div className="semiCircle"></div>
      <div className="BalanceContainer">
        {balanceData.map((item, index) => (
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

export default BalanceApp;
