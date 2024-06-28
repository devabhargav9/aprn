import React from "react";
import s from "./contactPage.css";
import ContactForm from "../../components/ContactUs";
import contactUs from "../../assets/contactUs.svg";
import HeadNavBar from "../../components/HeadNavBar";
import AboutCompany from "../../components/AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";


const ContactPage = () => {
  return (
    <>
    <HeadNavBar />
    <div className="contactContainer">
    <div className="conTopContainer">
      <div className="conHead">Contact us</div>
      <div className="conSub">At APRN, our domain expertise helps in creating and delivering value for with our external and internal stakeholders as we cherish the collective growth and success.</div>
      <div className="conEmail">You can also reach us by email - <strong>contact@aprn.co.uk</strong></div>
      <div className="conLast">We strive to respond to all emails within 24 hours.</div>
    </div>
    <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"Accelerate your"}
        subText2={"Growth!"}
        subText3={""}
        extraText1={
          "We are empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
        }
        extraText2={
          "Our are focused in providing acclerated gorwth, customer-centric solutions, and flexible approaches that are specifically rightsized for the needs of emerging mid-market and small enterprise customers."
        }
        extraText3={'Streamlined the processes, and established a strong reputation for consistently delivering superior  outcomes powered with the certifed techincal team of experts. Maintaining transparent and effective communication channels.'}
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
    </div>
    </>
  );
};

export default ContactPage;
