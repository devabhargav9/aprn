import React, { useRef } from "react";
import iotImage from "../../assets/iotImage.svg";
import arrow from "../../assets/whiteArrow.svg";
import s from "../Devops/devopsStyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Testinomials from "../Testinomials";
import BlogsList from "../BlogsList";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import { iotServiceData } from "../../data";
import Services from "../Services";

const IOT = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openContact = () => {
    window.location.href = "/contactUs";
  };
  return (
    <div className="appDevWrapper">
      <HeadNavBar />
      <div
        className="AppDevContainer"
        style={{ backgroundImage: `url(${iotImage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Innovate Accelerate Dominate</div>
          <div className="textOneapp">
            Discover Our <span style={{ color: "#002699" }}>IOT</span>
            <br />
            <span style={{ color: "#002699" }}>Solutions</span> for Tomorrow
          </div>
          <div className="subTextapp">
            Developing IoT solutions & accelerators, that include end-to-end
            digital <br />
            execution capabilities
          </div>
          <div className="buttonsContainerapp">
            <div
              className="getTouchapp"
              onClick={() => {
                openContact();
              }}
            >
              Get in Touch now{" "}
              <img src={arrow} alt="arrow" className="arrowapp" />
            </div>
            <div
              className="anyQueryapp"
              onClick={() => {
                openContact();
              }}
            >
              Any Query?
            </div>
          </div>
        </div>
      </div>
      <ClientsScrollBar />
      <BusinessPotential
        diffText={"IOT Solutions"}
        subText1={
          "Accelerating businesses through innovative IoT software development services that promote seamless integration and countless possibilities. IoT solutions for residences & businesses to connect devices, gather data and analyze to gain insights and improve decision-making."
        }
        subText2={
          "As an innovative IoT app development hub, we bring the most cutting-edge technologies and techniques on board to provide you with mobile IoT software solutions that suit your business needs"
        }
      />
      <Services
        services={iotServiceData}
        clickable={true}
        heightFactor={640}
        topText={"Our latest services"}
        bigText1={"Our Services"}
        bigText2={"your organization ahead"}
        smallText1={
          "We are pioneers of the digital approach, using leading-edge technology to"
        }
        smallText2={
          "simplify procedures and apply executive for your business."
        }
        gridItems={3}
      />
      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "Internet of Things (IoT) has emerged as the key technology enabler for digital transformation and proved to be a growth driver for businesses across industries."
        }
        extraText2={
          "Accelerating the business growth with array of IOT solutions while focusing on monitoring and discovering insights as we predict and optimize operations while transforming the businesses. Our IOT solutions helps to connect devices, gather data and analyse to gain insights and improve decision-making."
        }
        extraText3={
          "APRN is empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default IOT;
