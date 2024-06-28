import React, { useRef } from "react";
import "./styles.css";
import devops1 from "../../assets/devops1-1.png";
import devops2 from "../../assets/devops1-2.png";
import devops3 from "../../assets/devops1-3.png";
import devops4 from "../../assets/devops1-4.png";
import devops5 from "../../assets/devops1-5.png";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";

const DevopsCase1 = () => {
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
            <div className="dev1Head">DevOps Case Study</div>
            <div className="kcText">
              Application <span className="devHighCol">Modernization</span> &{" "}
              <br />
              <span className="devHighCol">Migration</span> – Equipment
              <br />
              Manufacturing
            </div>
            <div className="kcSubText">
              Application Modernization & Migration.{" "}
            </div>
            <div className="dev1Stats">
              <div className="dev1Lhs">
                <div className="dev1Percent">42%</div>
                <div className="dev1Text">
                  Cost reduction in hosting infrastructure
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">3x</div>
                <div className="dev1Text">
                Time saved on manual operational requests
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">30%</div>
                <div className="dev1Text">
                Performance and productivity improvement
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="devops1-1" src={devops1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              <span className="devHighCol">Mission</span> Statement
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Modernize and migrate applications from On-Premise to <br />{" "}
                  Azure.{" "}
                </li>
                <li>
                  Mission to move towards modernize complete application <br />
                  SDLC lifecycle and reduce operating cost of complete platform{" "}
                  <br />
                  with implementation of new technologies.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="devops1-2" src={devops2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="devops1-3" src={devops3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Multiple On-premise
              <br />
              application for{" "}
              <span className="devHighCol">
                organization’s <br />
                financial platform
              </span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Azure cloud service and create a sustainable platform for{" "}
                  <br /> development and deployment of these applications.{" "}
                </li>
                <li>
                  To serve the core financial activities by accuracy and high{" "}
                  <br />
                  availability of applications.
                </li>
              </ul>
            </div>
            <div className="kcHead1" style={{ paddingTop: "10px" }}>
              Address Technology
              <br />
              challenges in <span className="devHighCol">Automation</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Need of Containerization strategy to host applications on{" "}
                  <br /> cloud infrastructure through automation.{" "}
                </li>
                <li>
                  Need to create a highly available platform to host multiple{" "}
                  <br />
                  microservices applications and deploy them seamlessly.
                </li>
                <li>
                  Automation tools to be able to successfully reduce time to{" "}
                  <br />
                  market for the product delivery.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              ROI on the<span className="devHighCol">solution</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Seamless transition of applications from on-premise to cloud{" "}
                  <br /> infrastructure.{" "}
                </li>
                <li>
                  Containerize infrastructure – For saving cost on resources and{" "}
                  <br />
                  Azure Cloud.{" "}
                </li>
                <li>
                  End-to-end automation for migration + modernization process{" "}
                  <br />
                  for 40+ applications with architecture.{" "}
                </li>
                <li>
                  Centralized Release process – for streamlining application{" "}
                  <br />
                  deployment.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="devops1-4" src={devops4} />
          </div>
        </div>

        <img className="devops1-5" src={devops5} />
        <div className="dev1Last">
          <div className="kcHeaddev1">
            <span className="devHighCol">Solution</span> and APRN Role
          </div>
          <div className="kcHeaddev">
            APRN Teams were involved as the end-to-end service provider in the
            development, <br />
            DevOps, Support in this engagement; details as below:
          </div>
          <div className="kcText2">
            <ul>
              <li>
                Setting up multiple environments for development through
                Infrastructure Automation (infra-as-code).
              </li>
              <li>
                Part of application architecture team for modernizing and
                migration of application and create factory
                <br /> model for similar engagements.
              </li>
              <li>
                Leveraging Azure Cloud services to have a stable, highly
                available, reliable environments for applications.
              </li>
              <li>
                Containerization & Kubernetes to deploy microservices and
                maintain stable platform.
              </li>
              <li>
                DevSecOps/DevTestOps based setup for all applications to keep
                them in standardized environments till <br />
                production.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices}/>
    </>
  );
};

export default DevopsCase1;
