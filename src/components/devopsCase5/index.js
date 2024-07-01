import React, { useRef } from "react";
import "./styles.css";
import devops51 from "../../assets/devops5-1.png";
import devops52 from "../../assets/devops5-2.png";
import devops53 from "../../assets/devops5-3.png";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import greenTick from "../../assets/greenTick.svg";

const DevopsCase5 = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="semiCircledev1"></div>
      <div className="mayContainer">
        <div
          className="dev1Last"
          style={{ paddingBottom: "216px", paddingTop: "40px" }}
        >
          <div className="cs4FirstSec">
            <span style={{ color: "rgba(0, 38, 153, 1)" }}>
              App Modernization
            </span>
          </div>
          <div className="cs4FirstSub">
            An American Fortune 200 provider of <br />
            multimodal transportation services and third-
            <br />
            party logistics
          </div>
          <div className="cs4FirstSub2">
            An American Fortune 200 provider of multimodal transportation
            services <br />
            and third-party logistics
          </div>
          <div className="dev1Stats">
            <div className="dev1Lhs">
              <div className="dev2Percent">37%</div>
              <div className="dev1Text" style={{ textAlign: "center" }}>
                Performance and productivity improvement
              </div>
            </div>
            <div className="dev1Mid"></div>
            <div className="dev1Rhs">
              <div className="dev2Percent">40%</div>
              <div className="dev1Text">Efforts saving </div>
            </div>
            <div className="dev1Mid"></div>
            <div className="dev1Rhs">
              <div className="dev2Percent">30%</div>
              <div className="dev1Text">Faster speed to market</div>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="devops51" src={devops51} />
          </div>
          <div className="lhs">
            <div className="kcHead1">Challenges</div>
            <div className="kcText2">
              <ul>
                <li>
                  Customer had several legacy applications hosted on Windows
                  <br /> Server 2012 Datacenter that were built using Microsoft
                  legacy <br />
                  technology stack .NET framework 4.5, .NET 3.5, Net1.1, VB6.0{" "}
                  <br /> and classical ASP (Active Server Pages).
                </li>
                <li>
                  There was an urgent need to modernize the legacy application{" "}
                  <br />
                  and migrate to Windows Server 2019.
                </li>
                <li>
                  The migration of these apps to Windows Server 2019 was <br />
                  required.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">Benifits</div>
            <div className="kcText2">
              <ul>
                <li style={{ paddingBottom: "10px" }}>
                  Availability of security patches for the holes that hackers
                  and <br />
                  malware could have exploited
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  Better support for the customer’s growing digital needs
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  Removal of outdated features and bugs that caused the <br />
                  applications to behave unexpectedly
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="devops52" src={devops52} />
          </div>
        </div>

        <img className="devops53" src={devops53} />
        <div className="dev1Last">
          <div className="cs4Last" style={{ paddingBottom: "28px" }}>
            <span style={{ color: "rgba(0, 38, 153, 1)" }}>Solutions</span>{" "}
          </div>
          <div className="numbers" style={{ paddingBottom: "40px" }}>
            <div className="numberItem">
              1. Out of 285 applications/components, 210 were identified to be
              retired and 71 applications were <br />
              set for either upgrade or complete rewrite to the new technology
              stack.
            </div>
            <div className="numberItem">
              2. Applications that were in .NET 1.x and above were upgraded to
              .NET 4.7.2
            </div>

            <div className="numberItem">
              3.Applications thaAt were in VB6.0, VB.NET, and ASP were
              completely rewritten in .NET 6.0 (.NET <br />
              core 6.0) and wherever possible, were upgraded to .NET core with
              tool-assisted migration.
            </div>

            <div className="numberItem">
              4. The upgraded or rewritten applications were hosted on Windows
              Server 2019.
            </div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </>
  );
};

export default DevopsCase5;
