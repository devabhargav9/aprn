import React from "react";
import addDevPage from "../../assets/appDevPage.svg";
import addDev3 from "../../assets/appDev3.svg";

import arrow from "../../assets/whiteArrow.svg";
import s from "./appstyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Testinomials from "../Testinomials";
import BlogsList from "../BlogsList";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import Services from "../Services";
import { AppDevServiceData } from "../../data";
import ScrollableComponent from "../IntersectionScroller";

const AppDevelopment = () => {
  return (
    <div className="appDevWrapper">
      <HeadNavBar />
      <div className="AppDevContainer">
        <img src={addDevPage} className="addDevPage" />
        <div className="headTextSection">
          <div className="textOneapp">
            Futuristic <br />
            Approach to <br />
            <span className="textTwoapp">App Modernisation</span>
          </div>
          <div className="subTextapp">
            We are your one-for-all Business and Technology Consultants,
            offering customised, <br />
            secure solutions to suit your project needs.
          </div>
          <div className="buttonsContainerapp">
            <div className="getTouchapp">
              Get in Touch now{" "}
              <img src={arrow} alt="arrrow" className="arrowapp" />
            </div>
            <div className="anyQueryapp">Any Query?</div>
          </div>
        </div>
      </div>
      <ClientsScrollBar />
      <BusinessPotential diffText={"App Development"} />
      <Services services={AppDevServiceData} clickable={false} isAppDev={true}/>
      <ScrollableComponent />
      <img src={addDev3} className="addDev3" />
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
      <Testinomials />
      <BlogsList />
      <Footer showAstronaut={true} />
    </div>
  );
};

export default AppDevelopment;
