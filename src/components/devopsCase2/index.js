import React, { useRef } from "react";
import "./styles.css";
import cloudcs1 from "../../assets/cloudcs1.png";
import cloudcs2 from "../../assets/cloudcs2.png";
import cloudcs3 from "../../assets/cloudcs3.png";
import cloudcs4 from "../../assets/cloudcs4.png";
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import greenTick from "../../assets/greenTick.svg";

const DevopsCase2 = () => {
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
              Cloud Case Study
            </div>
            <div className="kcText">
              <span className="devHighCol">Cloud Migration</span> with <br />
              Cloud first Strategy and
              <br />
              R-Lane
            </div>
            <div className="dev1Stats" style={{paddingTop: '36px'}}>
              <div className="dev1Lhs">
                <div className="dev1Percent">35%</div>
                <div className="dev1Text">
                  Faster Implementation
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">38%</div>
                <div className="dev1Text">
                Reduction in Infrastructure Costs
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div className="dev1Percent">2x</div>
                <div className="dev1Text">
                Reduced Complexity
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="cloudcs1" src={cloudcs1} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="cloudcs2" src={cloudcs2} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Project <span className="devHighCol">Objective</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>“Cloud First” Strategy.</li>
                <li>Migration of 74 Application.</li>
                <li>4 data centers, 2 in USA, 2 in UK/EU.</li>
                <li>Automation of Infrastructure and Application provision.</li>
                <li>Prefer Multicloud, Platform Agnostics, DevOps. </li>
                <li>Zero data loss and HA DC required. </li>
                <li>Improved and automated application release with CI/CD. </li>
                <li>build, test and release management. </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              <span className="devHighCol">Challenges</span> we Faced
            </div>
            <div className="kcText2">
              <ul>
                <li style={{ paddingBottom: "10px" }}>
                  End of life hardware, End of Support OS and Databases.
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  14 applications do not have ISV support.
                </li>
                <li>In-house to Centralize Support team.</li>
              </ul>
            </div>
          </div>
          <div>
            <img className="cloudcs3" src={cloudcs3} />
          </div>
        </div>

        <img className="cloudcs4" src={cloudcs4} />
        <div className="dev1Last">
          <div className="kcHeaddev1" style={{paddingBottom: '30px', paddingTop: '40px'}}>
          APRN<span className="devHighCol"> Solution </span>Highlights
          </div>
          <div className="kcTextFinal">
          <div className="kcText2" style={{paddingRight: '36px'}}>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> APRN evaluated Azure as a preferred choice for Public cloud.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> LRS, ZRS enabled for storage replication in UK-S to UK-N <br/>and US-E to US-W workloads.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> Refactor applications architected on 12 factor based <br/>microservices.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> Azure ExpressRoute connected for primary connectivity from <br/>on-prem DC and S2S VPN connectivity as an alternate <br/>connectivity.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> SQL Always availability on feature will be replicating the data <br/>apart from LRS and ZRS.</div>
          </div>
          <div className="kcText2">
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> Azure US East and US West are target DC for US workloads <br/> and Azure UK south and North for European workloads.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/>VNET peering enabled between Azure UK both DCs <br/>and Azure US DCs.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> Azure PaaS services used to optimize, consolidate app, web<br/> and DBs.</div>
            <div className="lastItem"><img src={greenTick} className="green-tick" alt="Green Tick"/> Shared Core Services in management VLAN.</div>
          </div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices}/>
    </>
  );
};

export default DevopsCase2;
