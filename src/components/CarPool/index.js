import React, { useRef } from "react";
import "./styles.css";
import carpool1 from "../../assets/carpool1.png";
import carpool2 from "../../assets/carpool2.png";
import carpool3 from "../../assets/carpool3.png";
import carpool4 from "../../assets/carpool4.png";
import carpool5 from "../../assets/carpool5.png";
import orangeDown from "../../assets/orangeDown.svg";
import carpoolPink from "../../assets/carpoolPink.svg";

import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";
import redUp from "../../assets/redUp.svg";
import greenTick from "../../assets/greenTick.svg";
import growthBlue from "../../assets/growthBlue.svg";
import growthYellow from "../../assets/growYellow.svg";


const CarPool = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="semiCircleMalay"></div>
      <div className="kcContainer">
        <div className="kcCon1">
          <div className="lhs">
            <div className="poolHead">PoolDo</div>
            <div className="kcText">
              Carpool B2C <br />
              Application Project
            </div>
            <div className="kcSubText">
              Pooldo is carpooling IOS app which is based in <br />
              Bangalore, India
            </div>
            <TopRated
              stat1={"90%"}
              text1={"Higher conversion rates"}
              icon1={growthBlue}
              stat2={"45%"}
              text2={"Faster Speed to market"}
              icon2={orangeDown}
              text3={"Enhance data analytics"}
              icon3={redUp}
            />
          </div>
          <div>
            <img className="carpool1" src={carpool1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              About the <span className="appHighpool">App</span>
            </div>
            <div className="kcText1">
              To provide a safe journey with an affordable pleasant ride anytime{" "}
              <br />
              in a Bangalore city to start with while expanding to other metro{" "}
              <br />
              cities in India. <br />
              It will help people getting trusted rides while making sure the{" "}
              <br />
              travel to be most comfortable and joyous
              <br />
              "Save your fuel and money, build an eco-friendly environment"
            </div>
          </div>
          <div>
            <img className="carpool2" src={carpool2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="carpool3" src={carpool3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">Problems </div>
            <div className="kcText2">
              <ul>
                <li>All work will be billed monthly</li>
                <li>
                  Consultants can bill up to 45hour per week without approval{" "}
                  <br />
                  but anything more than that shall be approved by the <br />
                  customers.
                </li>
                <li>
                  Invoices will be generated on a monthly basis, based on the ​{" "}
                  <br />
                  number of effort hour
                </li>
                <li>
                  If there are any discrepancies in the invoice then customer​{" "}
                  <br />
                  shall contact to the carpool team within Ten (10) business
                  days​ <br />
                  of the receipt, otherwise invoices will be deemed as approved.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon2">
          <div className="kcHead6">Design for PoolDo</div>
          <div>
            <img className="carpool4" src={carpool4} />
          </div>
          <div className="lhs2">
            <img className="carpool5" src={carpool5} />
          </div>
        </div>
        <div className="carPoolBottom">
          <div className="bottomCarpool1">
            <img className="carpoolPink" src={carpoolPink} />
            <span className="pinkLeftText">
              Our approach for this app design was focused on providing a better{" "}
              <br /> user experience. We produced the app design in quick
              turnaround <br />
              time saving significant time for the client.
            </span>
          </div>
          <div className="bottomCarpool1">
            <img className="carpoolPink" src={carpoolPink} />
            <span className="pinkLeftText">
              We have used some design elements from freepik unsplash, pixels,{" "}
              <br />
              Xdguru, Flashicon and shutterstock.{" "}
            </span>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </>
  );
};

export default CarPool;
