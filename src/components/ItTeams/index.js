import React from "react";
import itSquad from "../../assets/itSquad.png";
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

const DevTeams = () => {
  return (
    <div className="appDevWrapper">
      <HeadNavBar />
      <div className="AppDevContainer" style={{ backgroundImage: `url(${itSquad})`}}>
            <div className="headTextSection">
                <div className="buildText">Expert team delivers innovative solutions</div>
                <div className="textOneapp">
                    Clever <span style={{ color: "#002699" }}>IT Squad</span> <br />
                    Shaping Digital Future
                </div>
                <div className="subTextapp">
                    Our IT team thrives on collaboration, innovation, and problem-solving, ensuring <br />
                    seamless technology integration and unparalleled support
                </div>
                <div className="buttonsContainerapp">
                    <div className="getTouchapp">
                        Get in Touch now{" "}
                        <img src={arrow} alt="arrow" className="arrowapp" />
                    </div>
                    <div className="anyQueryapp">Any Query?</div>
                </div>
            </div>
        </div>
      <ClientsScrollBar />
      <BusinessPotential diffText={"Dedicated Dev Team"} />
      <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high quality"}
        subText2={"IT services"}
        subText3={""}
        extraText1={
          "At APRN, we believe in fostering a work environment that feels more like family. A Culture of Belonging means that every member of our team feels valued, respected, and supported."
        }
        extraText2={
          "We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs. We also enjoy regular team-building activities and social events to build strong bonds."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} />
    </div>
  );
};

export default DevTeams;
