import React, { useRef } from "react";
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
import Services from "../Services";
import { teamsServiceData } from "../../data";

const DevTeams = () => {
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
        style={{ backgroundImage: `url(${itSquad})` }}
      >
        <div className="headTextSection">
          <div className="buildText">Assess Deploy Excel</div>
          <div className="textOneapp">
            Exceeding expectations <br />
            by <span style={{ color: "#002699" }}>Delivering Value </span>
          </div>
          <div className="subTextapp">
            Meticulously trained domain experts in dedicated to provide superior
            development support
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
        diffText={"Dedicated Dev Team"}
        subText1={
          "With our refined staff augmentation model, hire our skilled IT professionals on a contract basis for short or long-term projects, allowing you to quickly scale your resource pool with zero operational efforts."
        }
        subText2={
          "We are your strategic People partner in building a diverse team when you need the most. Our in-house technologists help you find rare skill sets to meet your needs, delivering a dynamic, team on your timeline."
        }
      />
      <Services
        services={teamsServiceData}
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
          "We are your strategic partners helping you stay agile in the dynamic market - delivering refined dedicated dev team model, if you are in need of fully managed teams or individual software engineers/ developers, we can provide an immediate resource/ team as required to keep up your business requirements."
        }
        extraText2={
          "Our in-house technologists help you find rare skill sets to meet your needs, delivering a dynamic, team on your timeline with a highly cost-effective structure.."
        }
        extraText3={
          "Hire our skilled IT professionals on a contract basis for short or long-term projects, allowing you to quickly scale your resource pool with zero operational efforts."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </div>
  );
};

export default DevTeams;
