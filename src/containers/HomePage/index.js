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
import whyChoseUs from "../../assets/whyChoseUs.svg";
import weAreBest from "../../assets/weAreBest.svg";



const WebContainer = () => {
  return (
    <div className="WebContainer">
      <HeadNavBar />
      <MainHeader />
      <div className="detailsContainer">
      <ClientsScrollBar />
      <AboutCompany
       image={whyChoseUs}
      />
     <Services services={services} clickable={true}/> 
      <AboutCompany
       image={weAreBest}
      />
      <ClientList />
      <Facts />
      <Testinomials />
      <BlogsList />
      <Footer showAstronaut={true}/>
      </div>
    </div>
  );
};

export default WebContainer;
