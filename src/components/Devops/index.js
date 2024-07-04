import React, { useRef } from "react";
import devopsImg from "../../assets/devopsImg.png";
import cloudImage2 from "../../assets/cloudImage2.svg";
import arrow from "../../assets/whiteArrow.svg";
import s from "./devopsStyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Testinomials from "../Testinomials";
import BlogsList from "../BlogsList";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import { devopsScrollData, devopsServiceData } from "../../data";
import Services from "../Services";
import ScrollableComponent from "../IntersectionScroller";

const DevopsService = () => {
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
        style={{ backgroundImage: `url(${devopsImg})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Automate. Scale. Modernize</div>
          <div className="textOneapp">
            Accelerate Your <br />
            Business With Our <br />
            <span className="textTwoapp">DevOps Excellence</span>
          </div>
          <div className="subTextapp">
            Automate the manual infrastructure deployment to achieve <br />
            increased reliability and frequency of software releases
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
        diffText={"DevOps Solutions"}
        subText1={
          "The key to success for a successful DevOps transformation is to measure your systems and digital business impact. By leveraging our DevOps expertise, we optimize processes, enhance efficiency, and accelerate innovation, ensuring seamless integration and exceptional results across any industry vertical."
        }
        subText2={
          "Our DevOps experts will do a detailed study of the existing systems and help you visualize the results and propose solutions to achieve increased frequency and reliability of software releases for your organization"
        }
      />
      <Services
        services={devopsServiceData}
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
      />
      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "Our DevOps expertise will achieve increased frequency and reliability of software releases for your organization backed by continuous monitoring and routine updates."
        }
        extraText2={
          "APRN approach with a holistic strategy for the full SDLC and build CI/CD delivery pipeline.  Improve team collaboration and spin up on-demand virtualization testing environments through cloud-native pipeline, orchestrating pipelines that are designed to scale and uses advanced support models thus preparing for future growth."
        }
        extraText3={
          "We ensure your business growth as we optimize processes, enhance efficiency, and accelerate innovation."
        }
        extraText4={
          "APRN is empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      <ScrollableComponent data={devopsScrollData} />

      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default DevopsService;
