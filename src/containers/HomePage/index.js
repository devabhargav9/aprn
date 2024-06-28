import React, { useRef } from "react";
import Footer from "../../components/Footer";
import s from "./styles.css";
import Services from "../../components/Services";
import HeadNavBar from "../../components/HeadNavBar";
import ClientList from "../../components/ClientList";
import ClientsScrollBar from "../../components/ClientsScrollBar";
import Facts from "../../components/Facts";
import MainHeader from "../../components/MainHeader";
import AboutCompany from "../../components/AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import BlogsList from "../../components/BlogsList";
import Testinomials from "../../components/Testinomials";
import { services } from "../../data";
import aboutCompanyIcon from "../../assets/aboutCompany.png";

const WebContainer = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="WebContainer">
      <HeadNavBar isBlue={true} />
      <MainHeader />
      <div className="detailsContainer">
        <ClientsScrollBar />
        <AboutCompany
          placeHolderImg={aboutCompanyIcon}
          headText={"About our company"}
          subText1={"Unlocking"}
          subText2={"potential for"}
          subText3={"enterprises worldwide"}
          extraText1={
            "APRN is a Digital transformation partner trusted by Fortune 500 Companies across the UK, US & MENA. As a world-class IT solutions provider, we adopt Design thinking with a customer-centric approach to deliver robust Solutions and maximising value for businesses."
          }
          extraText2={
            "Over a decade of extensive experience, with our lean agile models, domain expertise and seasoned professionals and we deliver success in comprehensive enterprise software development, IT services, and IT consulting tailored to your business needs while being cost and time effective."
          }
          extraText3={
            'At APRN, we believe in creating and delivering value for with our external and internal stakeholders as we cherish the collective growth and success with our highly supportive team.'
          }
          showCTA={true}
          isAboutUs={true}
        />
        <Facts />
        <div ref={servicesRef}>
          <Services
            services={services}
            clickable={true}
            heightFactor={640}
            topText={"Our latest services"}
            bigText1={"Our services"}
            bigText2={"your organization secure"}
            smallText1={"We are pioneers of the digital approach, using leading-edge technology to"}
            smallText2={"simplify procedures and apply executive for your business."}
          />
        </div>
        <AboutCompany
          placeHolderImg={chooseUsIcon}
          headText={"Why choose us"}
          subText1={"Accelerate your "}
          subText2={"Growth!"}
          extraText1={
            "We are empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
          }
          extraText2={
            "Our are focused in providing acclerated gorwth, customer-centric solutions, and flexible approaches that are specifically rightsized for the needs of emerging mid-market and small enterprise customers."
          }
          extraText3={
            "Streamlined the processes, and established a strong reputation for consistently delivering superior  outcomes powered with the certifed techincal team of experts. Maintaining transparent and effective communication channels."
          }
          showCTA={false}
          extraHeader={"Why Choose us?"}
        />
        <ClientList />
        <Footer showAstronaut={true} scrollToServices={scrollToServices} />
      </div>
    </div>
  );
};

export default WebContainer;
