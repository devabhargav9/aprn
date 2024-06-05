import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./navBar.css";
import { navBarItems } from "../../data";
import aprnLogoWhite from "../../assets/aprnLogoWhite.svg";

const HeadNavBar = () => {
 
  const contactUs = () => {
    window.location.href = "/contactUs";
  }

  return (
    <div className="navBarContainer">
      <div className="navBar">
        <img src={aprnLogoWhite} alt="APRN Logo" className="aprnLogo" />
        {navBarItems.map((item, index) => (
          <div
            key={index}
            className={item.name === "Home" ? "navItemHome" : "navItem"}
            onClick={() => (window.location.href = item.redirect_url)}
          >
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="letsTalk" onClick={() => {contactUs()}}>Let's Talk</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(HeadNavBar);
