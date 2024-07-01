import React, { useRef } from "react";
import digitalAnalytics from "../../assets/digitalAnalytics.png";

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
import Services from "../Services";
import { digitalServiceData } from "../../data";

const DigitalAnalytics = () => {
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
        style={{ backgroundImage: `url(${digitalAnalytics})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Data Research Dashboards</div>
          <div className="textOneapp">
            Leveraging <span className="textTwoapp">Data</span> to take <br />
            <span className="textTwoapp">Future</span> Decisions
          </div>
          <div className="subTextapp">
            Creating impactful solutions with deep analysis to make predictive
            decisions and <br />
            measurable outcomes
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
        diffText={"Digital Analytics"}
        subText1={
          "We utilize the potential of numerous data sets to unearth past and untapped insights that can leverage businesses from different regions/industries and help make better decisions to obtain competitive advantages."
        }
        subText2={
          "We help you to analyze the business needs through intuitive dashboards and transform data into powerful insights that can offer your business the required mileage in the competitive market"
        }
      />
      <Services
        services={digitalServiceData}
        clickable={true}
        heightFactor={320}
        topText={"Our latest services"}
        bigText1={"Our Services"}
        bigText2={"your organization ahead"}
        smallText1={
          "We are pioneers of the digital approach, using leading-edge technology to"
        }
        smallText2={
          "simplify procedures and apply executive for your business."
        }
      />

      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "Maximise the impact of data with a high pace growth of digitalisation!"
        }
        extraText2={
          "It’s crucial to have a robust data foundation in place for your business, with our deep expertise in digital analytics and business intelligence, APRN will help you navigate the business complexities and build and scale new data capabilities that are required in this new environment of digitalisation and emerging AI."
        }
        extraText3={
          "We utilize the potential of numerous data sets to unearth past and untapped insights that can leverage businesses from different regions/industries and help make better decisions to obtain competitive advantages."
        }
        extraText4={
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

export default DigitalAnalytics;
