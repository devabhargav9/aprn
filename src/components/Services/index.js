import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import s from "./styles.css";

import app1 from "../../../src/assets/software1.svg";
import app2 from "../../../src/assets/software2.svg";
import app3 from "../../../src/assets/software3.svg";
import app4 from "../../../src/assets/software3.svg";

const Services = (props) => {
  const [activeTab, setActiveTab] = useState("enterprise");
  const [displayedServices, setDisplayedServices] = useState(props.services);

  const handleTab1 = () => setActiveTab('enterprise');
  const handleTab2 = () => setActiveTab('software');

  const softwareData = [
    {
      name: "Hybrid Mobile Application Development",
      desc: "We deliver multi-purpose Cross-Platform and Hybrid Mobile applications to help businesses target multiple platforms using the same code base.",
      logo: app1,
    },
    {
      name: "Progressive Web Applications",
      desc: "Applications Delivering seamless digital experiences with Progressive Web Applications by leveraging the power of web design thinking.",
      logo: app2,
    },
    {
      name: "Experience Design (UX services)",
      desc: "Be it a digital product or service, we keep both the end- user and the business goals at forefront and craft solutions with intense User Research .",
      logo: app3,
    },
    {
      name: "Digital Application Development",
      desc: "Future-focused Enterprise App Development, Legacy App Integration, and Platform Migration services that help you respond faster.",
      logo: app4,
    },
  ];

  useEffect(() => {
    if (activeTab === "enterprise") {
      setDisplayedServices(props.services);
    } else {
      setDisplayedServices(softwareData);
    }
  }, [activeTab,props, props.services]);
  console.log("Services", displayedServices);
  return (
    <div className="servicesContainer">
      <div className="servicesHead">
        <div className="textOne">{props.topText}</div>
        <div className="textTwo">{props.bigText1}</div>
        {props.bigText2 && <div className="textTwo">{props.bigText2}</div>}
        {props.smallText1 && (
          <div className="textThree">
            {props.smallText1} <br />
            {props.smallText2}
          </div>
        )}
        {!props.smallText1 && <div className="dummy"></div>}
      </div>
      <div className="toggle-tabs-container">
        <div className="toggle-tabs">
          <button
            className={`tab ${activeTab === 'enterprise' ? 'active' : ''}`}
            onClick={handleTab1}
          >
            Enterprise
          </button>
          <button
            className={`tab ${activeTab === 'software' ? 'active' : ''}`}
            onClick={handleTab2}
          >
            Software
          </button>
        </div>
      </div>
      <div
        className={props.isAppDev ? "appServicesSection" : "servicesSection"}
        style={{ height: `${props.heightFactor}px` }}
      >
        {displayedServices && displayedServices.map((service, index) => (
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
