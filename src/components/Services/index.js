import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";

const Services = (props) => {
  useEffect(() => {
    console.log("Hello Deva", s.footerContainer);
  }, []);

  return (
    <div className="servicesContainer">
      <div className="servicesHead">
        <div className="textOne">{props.topText}</div>
        <div className="textTwo">{props.bigText1}</div>
        {props.bigText2 && <div className="textTwo">{props.bigText2}</div>}
        {props.smallText1 && <div className="textThree">
          {props.smallText1} <br />
          {props.smallText2}
        </div>}
        {!props.smallText1 && <div className="dummy">
         
        </div>}
      </div>
      <div
        className={props.isAppDev ? "appServicesSection" : "servicesSection"}
        style={{ height: `${props.heightFactor}px` }}
      >
        {props.services.map((service, index) => (
          <div
            key={index}
            className={props.clickable ? "service" : "noClickService"}
            onClick={() =>
              service.redirect_url &&
              (window.location.href = service.redirect_url)
            }
          >
            <div className="imageContainer">
              <img src={service.logo} alt={service.name} className="logo" />
            </div>
            <div className="name">{service.name}</div>
            <div className="description">{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Services);
