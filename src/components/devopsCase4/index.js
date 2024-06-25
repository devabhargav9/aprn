import React from "react";
import "./styles.css";
import devops41 from "../../assets/devops4-1.png";
import devops42 from "../../assets/devops4-2.png";
import devops43 from "../../assets/devops4-3.png";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import greenTick from "../../assets/greenTick.svg";

const DevopsCase4 = () => {
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
            Health Check Assessment <br />
            of FLIP Application
          </div>
          <div className="cs4FirstSub2">
            Customer had built an in-house pricing application (FLIP) to
            calculate price & <br />
            generate quotes for all the materials that they sell.
          </div>
          <div className="dev1Stats">
            <div className="dev1Lhs">
              <div className="dev1Percent">30%</div>
              <div className="dev1Text" style={{textAlign: 'center'}}>
                Performance and <br />
                productivity improvement
              </div>
            </div>
            <div className="dev1Mid"></div>
            <div className="dev1Rhs">
              <div className="dev1Percent">75%</div>
              <div className="dev1Text">Digital platform adoption</div>
            </div>
            <div className="dev1Mid"></div>
            <div className="dev1Rhs">
              <div className="dev1Percent">80%</div>
              <div className="dev1Text">Integration</div>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="devops41" src={devops41} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Project <span className="devHighCol">Objective</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Customer had built an in-house pricing application (FLIP) to{" "}
                  <br />
                  calculate price & generate quotes for all the materials that
                  they <br />
                  sell
                </li>
                <li>
                  FLIP being a business-critical application for Customer with{" "}
                  <br />
                  plans to expand application features & user base,
                </li>
                <li>
                  Customer intents to conduct an application health check to{" "}
                  <br />
                  ensure-
                </li>
              </ul>
              <div className="lastItemcs4">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                Application readiness for upcoming application enhancements
              </div>
              <div className="lastItemcs4">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                Solution sustainability
              </div>
              <div className="lastItemcs4">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                Mitigate application performance issues
              </div>
              <div className="lastItemcs4">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                Ensure scale to handle future application expansions
              </div>
              <div className="lastItemcs4">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                Overall to improve and maximize the application performance &{" "}
                <br />
                sustainability
              </div>
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
                  <span style={{ fontWeight: "600" }}>
                    Generating the price list through Price calculator
                  </span>{" "}
                  - This is a <br />
                  complex pricing engine which fetches information from <br />
                  multiple sources and builds a quote for every piece/material.
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Poor experience while loading data in the UI
                  </span>{" "}
                  - While accessing <br />
                  filter mechanism in the application to look at a subset. The{" "}
                  <br />
                  broader the filter criteria, higher is the volume of data{" "}
                  <br />
                  presented, which is painful for the application to present.
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Downloading the datasheets by the users
                  </span>
                  - Lengthy delays <br />
                  users have to face on a regular basis to download required{" "}
                  <br />
                  data.{" "}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ fontWeight: "600" }}>ETL (SSIS) Process</span>{" "}
                  – This process takes 30-45 minutes to <br />
                  merge the data into the production DB. Since it’s a global{" "}
                  <br />
                  operation, users experience slowness and/or contention for{" "}
                  <br />
                  resources.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="devops42" src={devops42} />
          </div>
        </div>

        <img className="devops43" src={devops43} />
        <div className="dev1Last">
          <div className="cs4Last">
            <span style={{ color: "rgba(0, 38, 153, 1)" }}>APRN</span>{" "}
            Deliverables
          </div>
          <div className="cs4LastSub">
            APRN assessment of the health of FLIP application and its associated
            dependencies <br />
            based on the following application attributes
          </div>
          <div className="numbers">
            <div className="numberItem">
              1. Application Architecture and suitability of Patterns.
            </div>
            <div className="numberItem">
              2. Application Performance with respect to Pricing Engine and File
              Upload/Download features.
            </div>

            <div className="numberItem">3. Page Load.</div>

            <div className="numberItem">
              4. Integration with respect to API , ETL and window services.
            </div>

            <div className="numberItem">
              5. FLIP Database assessment limited to pricing engine schema
              validation, performance and ETL jobs.
            </div>

            <div className="numberItem">6. Application Security.</div>

            <div className="numberItem">7. Application Scalability.</div>

            <div className="numberItem">8. Application Code Quality.</div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} />
    </>
  );
};

export default DevopsCase4;
