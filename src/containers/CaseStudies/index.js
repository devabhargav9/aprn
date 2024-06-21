import React from "react";
import Footer from "../../components/Footer";
import s from "./styles.css";
import HeadNavBar from "../../components/HeadNavBar";
import ClientsScrollBar from "../../components/ClientsScrollBar";

import AboutCompany from "../../components/AboutCompany";
import aboutCompanyIcon from "../../assets/aboutCompany.png";

import CaseStudiesSection from "../../components/CaseStudiesSection";

const CaseStudiesHome = () => {
  return (
    <div className="WebContainer">
        <div className="semiCircle"></div>

      <HeadNavBar />
      <CaseStudiesSection />
      <ClientsScrollBar showHeader={true}/>
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
        showCTA={true}
        isAboutUs={true}

      />
      <Footer showAstronaut={false}/>
    </div>
  );
};

export default CaseStudiesHome;
