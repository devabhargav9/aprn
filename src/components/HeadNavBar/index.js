import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import s from "./navBar.css";
import { navBarCapabilities, navBarItems } from "../../data";
import aprnLogoWhite from "../../assets/aprnLogoWhite.svg";
import aprnLogo from "../../assets/aprnLogo.svg";

const HeadNavBar = (props) => {
  const [showBottomBar, setShowBottomBar] = useState(false);
  const topNavigationBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        topNavigationBarRef.current &&
        !topNavigationBarRef.current.contains(event.target)
      ) {
        setShowBottomBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseOver = (event) => {
    event.target.classList.add("transitioning");
  };

  const handleTransitionEnd = (event) => {
    event.target.classList.remove("transitioning");
  };

  const contactUs = () => {
    window.location.href = "/contactUs";
  };

  const redirectToPage = (item) => {
    if (item.name === "Capabilities") {
      setShowBottomBar(true);
    } else {
      window.location.href = item.redirect_url;
    }
  };

  const navBarcolorWhite = () => {
    if (showBottomBar) {
      return false;
    } else {
      return props.isBlue;
    }
  };

  return (
    <div className="topNavigationBar" ref={topNavigationBarRef}>
      <div
        className={
          navBarcolorWhite() ? "navBarContainer" : "navBarContainerWhite"
        }
      >
        <div className={navBarcolorWhite() ? "navBar" : "navBarWhite"}>
          <img
            src={navBarcolorWhite() ? aprnLogoWhite : aprnLogo}
            alt="APRN Logo"
            className="aprnLogo"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          {navBarItems.map((item, index) => (
            <div
              key={index}
              className={"navItem"}
              data-content={`${item.name}`}
              onClick={() => redirectToPage(item)}
              onMouseOver={handleMouseOver}
              onTransitionEnd={handleTransitionEnd}
            >
              <div className="itemName" data-content={`${item.name}`}>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={navBarcolorWhite() ? "letsTalk" : "letsTalkWhite"}
          onClick={contactUs}
        >
          Let's Talk
        </div>
      </div>
      {showBottomBar && (
        <div className="bottomBarContainer">
          <div className="capabilitiesHead">Capabilities</div>
          <div className="capabilityContainer">
            <div className="row">
              {navBarCapabilities.slice(0, 5).map((item, index) => (
                <div className="eachCapability" key={index}>
                  <img className="capLogo" src={item.logo} alt="cap-logo" />
                  <div className="capHead">{item.name}</div>
                  <div
                    className="capTodo"
                    onClick={() => (window.location.href = item.redirect_url)}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {navBarCapabilities.slice(5).map((item, index) => (
                <div className="eachCapability" key={index}>
                  <img className="capLogo" src={item.logo} alt="cap-logo" />
                  <div className="capHead">{item.name}</div>
                  <div
                    className="capTodo"
                    onClick={() => (window.location.href = item.redirect_url)}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(HeadNavBar);
