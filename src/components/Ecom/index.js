import React, { useRef } from "react";
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
import Services from "../Services";
import { ecomScrollData, ecomServiceData } from "../../data";
import ScrollableComponent from "../IntersectionScroller";

const Ecom = () => {
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
        style={{ backgroundImage: `url(${ecomImage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Customers. Marketing. Experience</div>
          <div className="textOneapp">
            Connecting <span style={{ color: "#002699" }}>Consumers, </span>
            <br />
            retailers and brands
          </div>
          <div className="subTextapp">
            Helping e-commerce brands understand customer behavior by creating
            smarter <br />
            solutions for targeted audiences
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
        diffText={"E-commerce Services"}
        subText1={
          "As a Customer-centric organization, we offer technology solutions both conventional and Saas based models for our global e-commerce customers. E-commerce businesses of any size can gain advantage in maximizing their ROIs on digital platforms."
        }
        subText2={
          "Implementing AI to bring all e-commerce operations in one-place including warehouses, inventory and market places to help clients become more competitive and are informed about their future need."
        }
      />
      <Services
        services={ecomServiceData}
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
          "E-commerce industry is booming with an exponential growth hence we focus on the need of a strong digital core for our clients thus creating an engaging and immersive customer experience while supporting our clients become more competitive and informed about their future need."
        }
        extraText2={
          "As a customer-centric organization, we offer technology solutions both conventional and SaaS based models. E-commerce businesses of any size can gain advantage in maximizing their ROIs on digital platforms."
        }
        extraText3={
          "APRN is empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      <ScrollableComponent data={ecomScrollData} setScrolling={() => {}}/>

      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default Ecom;
