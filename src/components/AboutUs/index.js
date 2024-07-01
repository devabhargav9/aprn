import React, { useRef, useState } from "react";
import "./aboutUs.css";
import HeadNavBar from "../HeadNavBar";
import joinUs from "../../assets/joinUs.svg";
import aboutUs from "../../assets/aboutUs.svg";
import ClientsScrollBar from "../ClientsScrollBar";
import Footer from "../Footer";
import Services from "../Services";
import { aboutUsServicesData } from "../../data";
import AboutCompany from "../AboutCompany";
import aboutCompanyIcon from "../../assets/aboutCompany.png";
import arrow from "../../assets/blackArrow.svg";

const AboutUs = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="aboutUs">
      <HeadNavBar />
      <div className="semiCircle"></div>
      {/* <div className="semiCircleRight"></div> */}
      <div className="aboutUsSection">
        <div className="abtUs">About us</div>
        <div className="welcomeText">
          <span className="welcomeBlue">Welcome to APRN</span>, Empowering{" "}
          <br />
          Your Digital Future
        </div>
        <div className="supportText">
          At APRN, we believe in the transformative power of technology. Since
          our inception, we <br />
          have been committed to delivering innovative IT solutions that drive
          business growth, <br />
          streamline operations, and enhance user experiences.
        </div>
        <img src={aboutUs} alt="aboutUs" className="aboutUsIcon" />
      </div>
      <Services
        services={aboutUsServicesData}
        clickable={true}
        heightFactor={305}
        topText={"What makes us different"}
        bigText1={"The Art of Tech Transformation"}
      />
      <ClientsScrollBar showHeader={true} />
      <AboutCompany
        placeHolderImg={aboutCompanyIcon}
        headText={"About our company"}
        subText1={"Unlocking"}
        subText2={"pontential for"}
        subText3={"enterprises worldwide"}
        extraText1={
          "APRN is a Digital transformation partner trusted by Fortune 500 Companies across the UK, US & MENA. As a world-class IT solutions provider, we adopt Design thinking with a customer-centric approach to deliver robust Solutions and maximising value for businesses."
        }
        extraText2={
          "Over a decade of extensive experience, with our lean agile models, domain expertise and seasoned professionals and we deliver success in comprehensive enterprise software development, IT services, and IT consulting tailored to your business needs while being cost and time effective."
        }
        extraText3={
          "At APRN, we believe in creating and delivering value for with our external and internal stakeholders as we cherish the collective growth and success with our highly supportive team."
        }
        showCTA={false}
        isAboutUs={true}
      />
      <div className="joinUsSection">
        <div className="joinTextSection">
          <div className="joinText">
            Let’s work together, <br />
            Join our Team
          </div>
          <div className="openings">
            Checkout openings <img src={arrow} className="openArrow" />
          </div>
        </div>
      </div>
      <Footer showAstronaut={false} scrollToServices={scrollToServices} />
    </div>
  );
};

export default AboutUs;
