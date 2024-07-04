import React, { useRef } from "react";
import cloudImage from "../../assets/cloudImage.png";
import cloudImage2 from "../../assets/cloudImage2.svg";

import arrow from "../../assets/whiteArrow.svg";
import s from "./cloudStyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Testinomials from "../Testinomials";
import BlogsList from "../BlogsList";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import { cloudScrollData, cloudServiceData } from "../../data";
import Services from "../Services";
import ScrollableComponent from "../IntersectionScroller";

const CloudService = () => {
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
        style={{ backgroundImage: `url(${cloudImage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Build. Test. Deploy</div>
          <div className="textOneapp">
            Drive Growth and <br />
            Efficiency with Our <br />
            <span className="textTwoapp">Cloud Solutions</span>
          </div>
          <div className="subTextapp">
            Creating an optimal cloud strategy, streamline IT architecture, and
            <br />
            achieve desired business results
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
        diffText={"Cloud Solutions"}
        subText1={
          "Take advantage of our cloud computing solutions to streamline your processes, enhance scalability and flexibility, and reduce IT costs. We work with leading cloud providers such as Microsoft Azure, AWS, and GCP."
        }
        subText2={
          "We help Companies become digitally transformed by leveraging a cloud-first approach to increase efficiency, unleash new capabilities, and quickly create, richer, and scalable applications"
        }
      />
      <Services
        services={cloudServiceData}
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
          "Optimize the migration and modernization scope with APRN's framework for cost optimization strategies, transformation services, and flexible approaches that are rightsized for your business. Take advantage of our cloud computing solutions to streamline your processes, enhance scalability and flexibility, and reduce IT costs. We work with leading cloud providers such as Microsoft Azure, AWS, and GCP."
        }
        extraText2={
          "We help Companies become digitally transformed by leveraging a cloud-first approach to increase efficiency, unleash new capabilities, and quickly create, richer, and scalable applications."
        }
        extraText3={
          "APRN is empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      <ScrollableComponent data={cloudScrollData} setScrolling={() => {}}/>

      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default CloudService;
