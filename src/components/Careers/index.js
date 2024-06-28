import React, { useRef } from "react";
import s from "./styles.css";
import ContactForm from "../../components/ContactUs";
import contactUs from "../../assets/contactUs.svg";
import HeadNavBar from "../../components/HeadNavBar";
import AboutCompany from "../../components/AboutCompany";
import email from "../../assets/email.svg";
import careersImg from "../../assets/careersRhs.png";

import aboutCompanyIcon from "../../assets/aboutCompany.png";
import Footer from "../Footer";

const Careers = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="careersContainer">
        <div className="careersTop">
          <div className="careersTopLhs">
            <div className="aprnCareer">APRN CAREERS</div>
            <div className="shape">
              Shape the Future of <br />
              Technology with
            </div>
            <div className="shapeSupport">
              At APRN, with our highly supporting team, we foster a culture of
              belonging for a <br />
              supportive and interactive engagement.
              <br />
              <br />
              We focus on proactive problem solving and work to stay on the{" "}
              <br />
              leading edge of new technologies.
            </div>
            <div className="weApp">
              We appreciate your interest, you can also mail us on <br />
              <div className="mailCont">
                <img src={email} className="email" /> contact@aprn.co.uk
              </div>
            </div>
          </div>
          <div className="careersTopRhs">
            <img src={careersImg} className="careersRhsImg" />
          </div>
        </div>
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
          showCTA={true}
          isAboutUs={true}
        />
        <Footer showAstronaut={true} scrollToServices={scrollToServices} />
      </div>
    </>
  );
};

export default Careers;
