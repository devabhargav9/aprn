import React, { useRef } from "react";
import "./styles.css";
import { kcData } from "../../data";
import malay1 from "../../assets/malay1.png";
import malay2 from "../../assets/malay2.png";
import malay3 from "../../assets/malay3.png";
import malay4 from "../../assets/malay4.png";
import malay5 from "../../assets/malay5.png";
import growthBlue from "../../assets/growthBlue.svg";

import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";

const MalayAirlines = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="semiCircleMalay"></div>
      <div className="kcContainer">
        <div className="kcCon1">
          <div className="lhs">
            <div className="malayHead">Malaysia Airlines</div>
            <div className="kcText">
              Redesigning Malaysia <br />
              Airlines Homepage
            </div>
            <div className="kcSubText">
              The design case study is to transform the homepage of Malaysia{" "}
              <br />
              Airlines that with combination of functionality and ease of use
              for diverse generations
            </div>
            <div className="dev1Stats">
              <div className="dev1Lhs">
                <div
                  className="dev1Percent"
                  style={{ color: "rgba(93, 130, 177, 1)" }}
                >
                  3x
                </div>
                <div className="dev1Text">
                  More amount of time <br />
                  spent exploring the app
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div
                  className="dev1Percent"
                  style={{ color: "rgba(93, 130, 177, 1)" }}
                >
                  45%
                </div>
                <div className="dev1Text">
                  Time deduction in <br />
                  payment processing
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "16px" }}>
              <img src={growthBlue} alt="growth" />
              <div className="dev1Text">Enhance data analytics</div>
            </div>
          </div>
          <div>
            <img className="malay1" src={malay1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              Bringing <span className="appHighMalay">Malaysia</span> Forward
            </div>
            <div className="kcText1">
              Malaysia Airlines has operated for as long as any Malaysians could{" "}
              <br />
              remember. As the new era of generation rises, the market has{" "}
              <br />
              shifted. The oldest members of Generation Z may represent a <br />
              small portion of the customers today but gradually they will be an{" "}
              <br />
              important customer segment in the future for Malaysian
              <br />
              Airlines.
            </div>
          </div>
          <div>
            <img className="malay2" src={malay2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="malay3" src={malay3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              The <span className="appHighMalay">Goal</span>
            </div>
            <div className="kcText2">
              By examining the specific strategies, challenges, and outcomes of{" "}
              <br />
              the redesign, we can gain valuable insights into the airline{" "}
              <br />
              industry's dynamics and the potential for successful brand <br />
              ransformations.
            </div>
          </div>
        </div>
        <div className="kcCon2">
          <div>
            <img className="malay4" src={malay4} />
          </div>
          <div className="lhs2">
            <div className="kcHead6">
              The Five <span className="appHighMalay">Second Tests</span>
            </div>
            <div className="kcText3">
              <div className="ques">
                1. What is this website for? <br />
                <strong>
                  <span style={{paddingLeft: '16px'}}>99% had answered airlines/flight booking website</span>
                </strong>
              </div>
              <div className="ques">
                2. What’s your first impression of the site? Describe it.
                <br />
                <strong>
                <span style={{paddingLeft: '16px'}}>89% answered user-friendly and clean but the banner was
                  distracting</span>
                </strong>
              </div>
              <div className="ques">
                3. What did you like best/least about the design?
                <br />
                <strong>
                <span style={{paddingLeft: '16px'}}>90% said the design was straight-forward and liked the
                  sections while some <br />
                  <span style={{paddingLeft: '16px'}}>participants mentioned it’s too plain</span></span>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              The <span className="appHighMalay">Outcome</span>
            </div>
            <div className="kcText2">
              In the redesigned homepage, I addressed users’ pain points by
              adding
              <br /> sections to the content for users to easily browse and find
              content that is <br />
              relevant to them. Due to the pandemic, most countries have
              different entry <br />
              requirements, which is also a pain point for users because they
              wish the <br />
              information was more accessible.
              <br />
              <br />
              Hence, I put a clear label to indicate its level of restriction.{" "}
            </div>
          </div>
          <div>
            <img className="malay5" src={malay5} />
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </>
  );
};

export default MalayAirlines;
