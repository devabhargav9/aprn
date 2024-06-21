import React, { useState } from "react";
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
          "At APRN, we believe in fostering a work environment that feels more like family. A Culture of Belonging means that every member of our team feels valued, respected, and supported. We have been helping businesses with their IT needs since 2010. We are provide fast, reliable, outsourced onsite and remote IT support services."
        }
        extraText2={
          "We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs. We also enjoy regular team-building activities and social events to build strong bonds."
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
      <Footer showAstronaut={false} />
    </div>
  );
};

export default AboutUs;
