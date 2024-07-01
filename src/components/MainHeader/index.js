import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import { navBarItems } from "../../data";
import mainHeaderImage from "../../assets/mainHeader.png";
import arrow from "../../assets/arrow.svg";

const MainHeader = () => {
  const openContact = () => {
    window.location.href = "/contactUs";
  };
  return (
    <div className="MainHeaderContainer">
      <div className="headerContent">
        <div className="content1">Integrate. Accelerate. Dominate. </div>
        <div className="content2">
          Empowering
          <br />
          Modern Businesses with
          <br />
          Digital Enablement
          <br />
        </div>
        <div className="content2-5">
          Agile | Secure  |  Reliable  |  Scalable
        </div>
        <div className="content3">
          We are empowered to help customers modernize their IT operations,{" "}
          <br />
          accelerate their business transformations, and build a strong digital
          core
        </div>
        <div className="buttonsContainer">
          <div
            className="getTouch"
            onClick={() => {
              openContact();
            }}
          >
            Get in Touch now <img src={arrow} alt="arrow" className="arrow" />
          </div>
          <div
            className="anyQuery"
            onClick={() => {
              openContact();
            }}
          >
            Any Query?
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(MainHeader);
