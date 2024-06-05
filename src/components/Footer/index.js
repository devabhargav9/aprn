import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchPosts } from '../redux/actions';
import s from "./footer.css";
import astronautIcon from "../../assets/astronaut.png";
import aprnLogo from "../../assets/aprnLogo.svg";

import { footerLinks } from "../../data";

const Footer = (props) => {
  useEffect(() => {
    console.log("Hello Deva", s.footerContainer);
  }, []);

  const renderLinks = () => {
    return Object.entries(footerLinks).map(([heading, elements]) => (
      <div key={heading} className="eachLinkSection">
        <div className="linkHead">{heading}</div>
        <ul className="link-list">
          {elements.map((element, index) => (
            <ul key={index} className="link">{element} {element === 'Careers' && <span className="hiringButton">Hiring</span>}</ul> 
          ))}
        </ul>
      </div>
    ));
  };


  return (
    <div className="footerSection">
      {props.showAstronaut && <div className="footerContainer">
        <img
          src={astronautIcon}
          alt="astronautIcon"
          className="astronautIcon"
        />
        <div className="contactUs">
          <div className="readyText">Ready to get</div>
          <div className="readyTextStart">started?</div>
          <div className="readyDesc">We’re available for 8 hours a day!</div>
          <div className="readyDesc">
            Contact to require a detailed analysis of your plan.
          </div>
          <div className="emailContainer">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <div className="sendButton">Send</div>
          </div>
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
        <span className="copyRightItem">Privacy</span>
        <span className="copyRightItem">Security</span>
        <span className="copyRightItem">User terms</span>
        <span className="copyRightItem">Customer terms</span>
        </div>
        <div>©2022 Slite. All rights reserved.</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Footer);
