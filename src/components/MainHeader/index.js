import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import { navBarItems } from "../../data";
import mainHeaderImage from "../../assets/mainHeader.png";
import arrow from "../../assets/arrow.svg";

const MainHeader = () => {
  return (
    <div className="MainHeaderContainer">
      <img src={mainHeaderImage} alt="Header Image" className="headerImage" />
        <div className="headerContent">
          <div className="content1">Automate. Integrate. Dominate. </div>
          <div className="content2">
            Future of DevOps & <br />
            Mobile Development is Here
          </div>
          <div className="content3">
            We are your one-for-all Business and Technology Consultants,
            offering customised, <br />
            secure solutions to suit your project needs.
          </div>
          <div className="buttonsContainer">
            <div className="getTouch">
              Get in Touch now{" "}
              <img src={arrow} alt="arrrow" className="arrow" />
            </div>
            <div className="anyQuery">Any Query?</div>
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(MainHeader);
