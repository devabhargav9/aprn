import React from "react";
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
  return (
    <div className="WebContainer">
      <HeadNavBar isBlue={true}/>
      <MainHeader />
      <div className="detailsContainer">
      <ClientsScrollBar />
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
           <Services services={services} clickable={true} heightFactor={640} topText={'Our latest services'} bigText1={'Services that help keep'} bigText2={'your organization secure'} smallText1={'We are pioneers of the digital approach, using leading-edge technology to'} smallText2={'simplify procedures and apply executive for your business.'}/> 

       <AboutCompany
        placeHolderImg={chooseUsIcon}
        headText={"Why choose us"}
        subText1={"We promise high"}
        subText2={"IT services"}
        subText3={"quality"}
        extraText1={
          "At APRN, we believe in fostering a work environment that feels more like family. A Culture of Belonging means that every member of our team feels valued, respected, and supported."
        }
        extraText2={
          "We celebrate our differences through our Employee Resource Groups and learn from each other through mentorship programs. We also enjoy regular team-building activities and social events to build strong bonds."
        }
        showCTA={false}
        extraHeader={"Why Choose us?"}
      />
      <ClientList />
      <Facts />
      {/* <Testinomials /> */}
      {/* <BlogsList /> */}
      <Footer showAstronaut={true}/>
      </div>
    </div>
  );
};

export default WebContainer;
