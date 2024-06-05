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
        <div className="textOne">Our latest services</div>
        <div className="textTwo">Services that help keep</div>
        <div className="textTwo">your organization secure</div>
        <div className="textThree">
          We are pioneers of the digital approach, using leading-edge technology
          to <br />
          simplify procedures and apply executive for your business.
        </div>
      </div>
      <div className={props.isAppDev ? "appServicesSection" : "servicesSection"}>
        {props.services.map((service, index) => (
          <div key={index} className={props.clickable ? "service" : "noClickService"} onClick={()=> window.location.href = service.redirect_url}>
            <img src={service.logo} alt={service.name} className="logo" />
            <div className="name">{service.name}</div>
            <div className="desc">{service.desc}</div>
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
