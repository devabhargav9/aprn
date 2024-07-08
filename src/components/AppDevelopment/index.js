import React, { useRef, useEffect, useState } from "react";
import addDevPage from "../../assets/appDevPage.png";
import arrow from "../../assets/whiteArrow.svg";
import s from "./appstyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import Services from "../Services";
import { AppDevServiceData, appScrollData } from "../../data";
import ScrollableComponent from "../IntersectionScroller";

const AppDevelopment = () => {
  const [isScrolling, setScrolling] = useState(true);
  const mainContainerRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.style.overflowY = isScrolling
        ? "auto"
        : "hidden";
    }
  }, [isScrolling]);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openContact = () => {
    window.location.href = "/contactUs";
  };

  return (
    <div className="appDevWrapper" ref={mainContainerRef}>
      <HeadNavBar />
      <div
        className="AppDevContainer"
        style={{ backgroundImage: `url(${addDevPage})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Ideate. Integrate. Execute</div>
          <div className="textOneapp">
            <span className="textTwoapp">Engineering Mobile</span> & <br />
            Progressive Web Apps <br />
          </div>
          <div className="subTextapp">
            Custom application development to drive operational efficiency,{" "}
            <br />
            enhance customer engagement, and foster mobility and growth secure
            solutions to suit your project needs.
          </div>
          <div className="buttonsContainerapp">
            <div className="getTouchapp" onClick={openContact}>
              Get in Touch now{" "}
              <img src={arrow} alt="arrow" className="arrowapp" />
            </div>
            {/* <div className="anyQueryapp" onClick={openContact}>
              Any Query?
            </div> */}
          </div>
        </div>
      </div>

      <ClientsScrollBar />
      <BusinessPotential
        diffText={"App Solutions"}
        subText1={
          "Building Custom applications with the power of design thinking & a responsive approach to unleash the potential of enterprises with a customer-centric approach to drive innovation & business growth."
        }
        subText2={
          "Our Custom application development aims to develop, and maintain applications & systems to improve functionality and scalability, reduce costs, and enhance the overall customer experience on multiple platforms"
        }
      />
      <Services
        services={AppDevServiceData}
        clickable={true}
        isAppDev={true}
        heightFactor={640}
        topText={"Our latest services"}
        bigText1={"Our services"}
        bigText2={"your organization secure"}
        smallText1={
          "We are pioneers of the digital approach, using leading-edge technology to"
        }
        smallText2={
          "simplify procedures and apply executive for your business."
        }
        showToggle={true}
      />
      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "In today’s highly competitive digital world, we strongly believe that apps need to be highly strategized, customized and to be implemented seamlessly enriching customer experience with immersive app functionality thus leading to accelerated business growth. "
        }
        extraText2={
          "We offer a full cycle of application design, integration and management services. Whether it is a consumer-oriented app or a transformative enterprise-class solution, we at APRN manage end-to-end mobile app development process from ideation and concept to delivery, and to ongoing support."
        }
        extraText3={
          "APRN is empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      {/* <ScrollableComponent data={appScrollData} setScrolling={setScrolling} /> */}

      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default AppDevelopment;
