import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchPosts } from '../redux/actions';
import s from "./footer.css";
import astronautIcon from "../../assets/astronaut.png";
import aprnLogo from "../../assets/aprnLogo.svg";

import { footerLinks } from "../../data";

const Footer = (props) => {

  const renderLinks = () => {
    return Object.entries(footerLinks).map(([heading, elements]) => (
      <div key={heading} className="eachLinkSection">
        <div className="linkHead">{heading}</div>
        <ul className="link-list">
          {elements.map((element, index) => (
            <li
              key={index}
              className="link"
              onClick={() =>
                element.name === "Capabilities"
                  ? props.scrollToServices()
                  : (window.location.href = element.redirect_url)
              }
            >
              {element.name}
              {element.name === "Career with us" && (
                <span className="hiringButton">Hiring</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    ));
  };
  
  


  return (
    <div className="footerSection">
      {props.showAstronaut && <div className="footerContainer">
        {/* <img
          src={astronautIcon}
          alt="astronautIcon"
          className="astronautIcon"
        /> */}
        <div className="contactUs">
          <div className="readyText">Ready to get</div>
          <div className="readyTextStart">started?</div>
          <div className="readyDesc">At APRN, our domain expertise helps in creating and delivering value.</div>
          <div className="weStriveTop">
          You can also reach us by email - contact@aprn.co.uk
          </div>
          <div className="weStrive">We strive to respond to all emails within 24 hours.</div>
          {/* <div className="emailContainer">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <div className="sendButton">Send</div>
          </div> */}
        </div>
      </div>
}
      <div className="quickLinksSection">
      <img
          src={aprnLogo}
          alt="APRN Logo"
          className="aprnLogo"
        />
        <div className="linksSection">
        {renderLinks()}
        </div>
      </div>
      <div className="copyRightSection">
        <div className="crLHS">
        <div>©2022 Slite. All rights reserved.</div>
        </div>
       
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Footer);
