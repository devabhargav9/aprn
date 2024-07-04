import React, { useRef } from "react";
import aimlPage from "../../assets/aimlPage.png";

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
import { aiServiceData } from "../../data";

const AIML = () => {
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
        style={{ backgroundImage: `url(${aimlPage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Intelligence. Information. Future</div>
          <div className="textOneapp">
            Dwelling into the Future <br />
            with{" "}
            <span style={{ color: "#002699" }}>Generative AI </span>
          </div>
          <div className="subTextapp">Transformative power of AI & ML</div>
          <div className="buttonsContainerapp">
            <div
              className="getTouchapp"
              onClick={() => {
                openContact();
              }}
            >
              Get in Touch now{" "}
              <img src={arrow} alt="arrrow" className="arrowapp" />{" "}
            </div>
            {/* <div
              className="anyQueryapp"
              onClick={() => {
                openContact();
              }}
            >
              Any Query?
            </div> */}
          </div>
        </div>
      </div>

      <ClientsScrollBar />
      <BusinessPotential
        diffText={"AI/ML Solutions"}
        subText1={
          "Experience the power of Generative AI models to reconfigure your business efficiencies and speed. Our strategic AI solutions are aimed to revolutionize business operations and redefining your future business strategies."
        }
        subText2={
          "Understanding AI and corresponding data models is the key to arriving at decision-making. Our experts transform raw data, offering a new dimension of understanding consumer behaviour, market analysis, and operational efficiency"
        }
      />
      <Services
        services={aiServiceData}
        clickable={true}
        heightFactor={975}
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
          "Next wave of technological disruption is the emerging AI, and is the future of progression for the businesses.  We drive AI strategy, delivery and enablement from a business perspective to ensure meaningful, sustained outcomes."
        }
        extraText2={
          "Our strategic AI solutions are aimed to revolutionize business operations and redefining your future business strategies. Understanding AI and corresponding data models is the key to arriving at decision-making. Our experts transform raw data, offering a new dimension of understanding consumer behaviour, market analysis, and operational efficiency."
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

export default AIML;
