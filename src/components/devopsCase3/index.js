import React, { useRef } from "react";
import "./styles.css";
import appcs1 from "../../assets/appcs1.png";
import appcs2 from "../../assets/appcs2.png";
import appcs3 from "../../assets/appcs3.png";
import appcs4 from "../../assets/appcs4.png";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import greenTick from "../../assets/greenTick.svg";

const DevopsCase3 = () => {
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
        <div className="kcCon1">
          <div className="lhs">
            <div className="dev1Head" style={{ paddingBottom: "10px" }}>
              Application Modernization
            </div>
            <div className="kcText">
              E-Comm Application
              <br />
              Assessment
            </div>
            <div className="kcSubText">
              The MOS application is built on Microsoft’s .NET platform <br />
              leveraging ASP .NET MVC , SQL Server and hosted on Microsoft{" "}
              <br />
              Azure.
            </div>
            <div className="dev1Stats" style={{paddingTop: '36px'}}>
              <div className="dev1Lhs">
                <div className="dev1Percent">30%</div>
                <div className="dev1Text">
                Reduction in operational cost
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">35%</div>
                <div className="dev1Text">
                Performance and productivity improvement
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">40%</div>
                <div className="dev1Text">
                Efforts Saving
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="appcs1" src={appcs1} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="appcs2" src={appcs2} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Project <span className="devHighCol">Objective</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Take stock of the application and define a strategy for the{" "}
                  <br />
                  future evolution. (Refactor Vs Rewrite Vs Replace).
                </li>
                <li>Study the code maintainability of the application.</li>
                <li>Understand where are the main risk of the application.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              The <span className="devHighCol">Problem</span>
            </div>
            <div className="kcText2">
              <ul>
                <li style={{ paddingBottom: "10px" }}>
                  E-Comm platform is going through pains including Scalability,
                  <br />
                  Reliability , Performance and high running cost on Azure.
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  Customer’s IT leadership intend to do an independent <br />
                  assessment of it’s E-Com application code with following{" "}
                  <br />
                  objectives.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="appcs3" src={appcs3} />
          </div>
        </div>

        <img className="appcs4" src={appcs4} />
        <div className="dev1Last">
          <div className="kcTextFinal" style={{ paddingTop: "62px" }}>
            <div className="kcText2" style={{ paddingRight: "92px" }}>
              <div className="lastHead">
                APRN <span className="devHighCol">Solution</span>
              </div>
              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />{" "}
                APRN evaluated Azure as a preferred choice for Public cloud.
              </div>
              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />{" "}
                Overall Software Development Life Cycle Maturity of E-com
                <br />
                platform.
              </div>

              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />{" "}
                Maintainability & Reliability of the code and the technical
                <br /> base.
              </div>
              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />{" "}
                Recommendations.
              </div>
            </div>
            <div className="kcText2">
              <div className="lastHead">
                APRN <span className="devHighCol">Assessment</span>
              </div>
              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />{" "}
                APRN’s Application Development Maturity Assessment
                <br />
                Framework.
              </div>
              <div className="lastItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                System level analysis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices}/>
    </>
  );
};

export default DevopsCase3;
