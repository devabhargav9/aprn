import React from "react";
import "./styles.css";
import { kcData } from "../../data";
import malay1 from "../../assets/malay1.png";
import malay2 from "../../assets/malay2.png";
import malay3 from "../../assets/malay3.png";
import malay4 from "../../assets/malay4.png";
import malay5 from "../../assets/malay5.png";
import growthImg from "../../assets/growthImage.svg";
import malayStats from "../../assets/malayStats.svg";

import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";

const MalayAirlines = () => {
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
              for <br />
              diverse generations
            </div>
            <img className="malayStats" src={malayStats} />
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
                  99% had answered airlines/flight booking website
                </strong>
              </div>
              <div className="ques">
                2. What’s your first impression of the site? Describe it.
                <br />
                <strong>
                  89% answered user-friendly and clean but the banner was
                  distracting
                </strong>
              </div>
              <div className="ques">
                3. What did you like best/least about the design?
                <br />
                <strong>
                  90% said the design was straight-forward and liked the
                  sections while some <br />
                  participants mentioned it’s too plain
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="malay5" src={malay5} />
          </div>
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
        </div>
      </div>
      <Footer showAstronaut={true} />
    </>
  );
};

export default MalayAirlines;