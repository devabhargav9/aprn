import React from "react";
import ecomImage from "../../assets/ecomImage.png";
import cloudImage2 from "../../assets/cloudImage2.svg";
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

const Ecom = () => {
  return (
    <div className="appDevWrapper">
      <HeadNavBar />
      <div
        className="AppDevContainer"
        style={{ backgroundImage: `url(${ecomImage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">
            Effortless Integration, Endless Expansion
          </div>
          <div className="textOneapp">
            Forge Your Path to <br />
            <span style={{ color: "#002699" }}>Online Market </span>Success
          </div>
          <div className="subTextapp">
            Unleash the potential of your online store with our E-Commerce
            Services, <br />
            automating tasks, enhancing software quality, and boosting
            reliability.
          </div>
          <div className="buttonsContainerapp">
            <div className="getTouchapp">
              Get in Touch now{" "}
              <img src={arrow} alt="arrow" className="arrowapp" />
            </div>
            <div className="anyQueryapp">Any Query?</div>
          </div>
        </div>
      </div>
      <ClientsScrollBar />
      <BusinessPotential diffText={"E-commerce Services"} />
      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "At APRN, we believe in fostering a work environment that feels more like family. A Culture of Belonging means that every member of our team feels valued, respected, and supported."
        }
        extraText2={
          "We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs. We also enjoy regular team-building activities and social events to build strong bonds."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} />
    </div>
  );
};

export default Ecom;
