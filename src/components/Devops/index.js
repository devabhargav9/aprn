import React from "react";
import devopsImg from "../../assets/devopsImg.png";
import cloudImage2 from "../../assets/cloudImage2.svg";
import arrow from "../../assets/whiteArrow.svg";
import s from "./devopsStyles.css";
import HeadNavBar from "../HeadNavBar";
import ClientsScrollBar from "../ClientsScrollBar";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";
import Testinomials from "../Testinomials";
import BlogsList from "../BlogsList";
import Footer from "../Footer";
import BusinessPotential from "../BusinessPotential";
import { devopsServiceData } from "../../data";
import Services from "../Services";


const DevopsService = () => {
  return (
    <div className="appDevWrapper">
      <HeadNavBar />
      <div className="AppDevContainer" style={{ backgroundImage: `url(${devopsImg})`}}>
            <div className="headTextSection">
                <div className="buildText">Automation and Efficiency at Scale</div>
                <div className="textOneapp">
                    Transforming <br />
                    Businesses with <br />
                    <span className="textTwoapp">DevOps Excellence</span>
                </div>
                <div className="subTextapp">
                    Our Cloud solutions streamline processes by automating tasks,<br />
                    enhancing software quality, and boosting reliability.
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
      <BusinessPotential diffText={"DevOps Solutions"} />
      <Services services={devopsServiceData} clickable={true} heightFactor={975} topText={'Our latest services'} bigText1={'Services that help keep'} bigText2={'your organization ahead'} smallText1={'We are pioneers of the digital approach, using leading-edge technology to'} smallText2={'simplify procedures and apply executive for your business.'}/>
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
      <BlogsList />
      <Footer showAstronaut={true} />
    </div>
  );
};

export default DevopsService;
