import React, { useState } from 'react';
import './aboutUs.css';
import aboutUsIcon from "../../assets/aboutUs.svg";
import HeadNavBar from '../HeadNavBar';
import aboutUsArt from "../../assets/aboutUsArt.svg";
import joinUs from "../../assets/joinUs.svg";

import ClientsScrollBar from '../ClientsScrollBar';
import Footer from '../Footer';




const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <HeadNavBar />
        <div className="semiCircle"></div>
        {/* <div className="semiCircleRight"></div> */}
        <img src={aboutUsIcon} alt='About Us' className='aboutUsIcon' />
        <img src={aboutUsArt} alt='About Us Art' className='aboutUsArt' />
        <ClientsScrollBar showHeader={true}/>
        <img src={joinUs} alt='joinUs' className='joinUsIcon' />
        <Footer showAstronaut={false}/>
    </div>
  )
};

export default AboutUs;
