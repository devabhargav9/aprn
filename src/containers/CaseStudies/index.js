import React, { useRef } from "react";
import Footer from "../../components/Footer";
import s from "./styles.css";
import HeadNavBar from "../../components/HeadNavBar";
import ClientsScrollBar from "../../components/ClientsScrollBar";

import AboutCompany from "../../components/AboutCompany";
import aboutCompanyIcon from "../../assets/aboutCompany.png";

import CaseStudiesSection from "../../components/CaseStudiesSection";

const CaseStudiesHome = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          "APRN is a Digital transformation partner trusted by Fortune 500 Companies across the UK, US & MENA. As a world-class IT solutions provider, we adopt Design thinking with a customer-centric approach to deliver robust Solutions and maximising value for businesses."
        }
        extraText2={
          "Over a decade of extensive experience, with our lean agile models, domain expertise and seasoned professionals and we deliver success in comprehensive enterprise software development, IT services, and IT consulting tailored to your business needs while being cost and time effective."
        }
        extraText3={'At APRN, we believe in creating and delivering value for with our external and internal stakeholders as we cherish the collective growth and success with our highly supportive team.'}
        showCTA={true}
        isAboutUs={true}

      />
      <Footer showAstronaut={false} scrollToServices={scrollToServices}/>
    </div>
  );
};

export default CaseStudiesHome;
