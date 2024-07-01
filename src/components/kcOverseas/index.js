import React, { useRef } from "react";
import "./styles.css";
import { kcData } from "../../data";
import kcImage1 from "../../assets/kcImage1.png";
import kcImage2 from "../../assets/kcImage2.png";
import kcImage3 from "../../assets/kcImage3.png";
import kcImage4 from "../../assets/kcImage4.png";
import kcImage5 from "../../assets/kcImage5.png";
import growthImg from "../../assets/grow.svg";
import greenTick from "../../assets/greenTick.svg";
import growthBlue from "../../assets/growthBlue.svg";
import growthYellow from "../../assets/growYellow.svg";

import topRated from "../../assets/topRated.svg";

import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";

const KCOverSeas = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const lastSecContent = [
    "Enhanced customer engagement through rewarding campaigns",
    "Average time spent on the app exceeded industry benchmarks",
    "Successful monetization through in-app purchase of bonus rewards",
    "Widespread appreciation from clients for quantifiable marketing ROI",
  ];
  return (
    <>
      <HeadNavBar />
      <div className="semiCircle"></div>
      <div className="kcContainer">
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead">KC Overseas</div>
            <div className="kcText">
              Abroad Education App <br />
              for Students
            </div>
            <div className="kcSubText">
              KC Overseas offers a smart digital solution for the <br />
              students planning to study abroad
            </div>
            <TopRated
              stat1={"60%"}
              text1={"Higher conversion rates"}
              icon1={growthBlue}
              stat2={"40%"}
              text2={"Faster Speed to market"}
              icon2={growthImg}
              text3={"Enhance data analytics"}
              icon3={growthYellow}
            />
          </div>
          <div>
            <img className="kcImg1" src={kcImage1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              About the <span className="appHigh">App</span>
            </div>
            <div className="kcText1">
              KC Overseas is such a platform which helps students who want to{" "}
              <br />
              study abroad can find information about universities in various{" "}
              <br />
              countries, the application process, and the visa process in a
              single <br />
              app. This app has varied services and features such as Explore{" "}
              <br />
              University, Get Consultation, IELTS Course, Professional Course,{" "}
              <br />
              Community.
            </div>
            <div className="kcHead2">Problems</div>
            <div className="kcText2">
              <ul>
                <li>
                  People can't get authentic information and suggestions to go{" "}
                  <br />
                  abroad to study.
                </li>
                <li>
                  People are mislead and cheated by fraud student consultation{" "}
                  <br />
                  agencies.
                </li>
                <li>
                  It is difficult to find a good IELTS course or instructor for{" "}
                  <br />
                  students outside the city.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="kcImg2" src={kcImage2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="kcImg3" src={kcImage3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Our <span className="appHigh">Solutions</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  A trustworthy app that provides all the essential information,{" "}
                  <br />
                  suggestions you need to study abroad.
                </li>
                <li>
                  Consult with experts about university admission, visa <br />
                  applications.
                </li>
                <li>
                  We offer a complete guideline IELTS online course from <br />
                  renowned instructors across the country.
                </li>
              </ul>
            </div>
            <div className="kcHead1">
              Design <span className="appHigh">Process</span>
            </div>
            <div className="kcText1">
              We chose the design thinking process to solve this problem. In{" "}
              <br />
              design thinking, teams create innovative solutions by questioning{" "}
              <br />
              assumptions, developing prototypes, and testing them iteratively{" "}
              <br />
              to understand users, challenge assumptions, and redefine <br />
              problems.
            </div>
          </div>
        </div>
        <div className="kcCon2">
          <div>
            <img className="kcImg4" src={kcImage4} />
          </div>
          <div className="lhs2">
            <div className="kcHead6">
              App Survey <span className="appHigh">Insights</span>
            </div>
            <div className="kcText3">
              <ul className="custom-list">
                <li>
                  Responses indicated a variety of problems, including
                  insufficient authentic information, fraud agencies,
                  <br /> and the absence of quality IELTS courses outside the
                  city.
                </li>
                <li>
                  88.5% of people prefer to use an app for study abroad
                  services.
                </li>
                <li>
                  We find that the majority of students are willing to go abroad
                  for higher studies, which is their major <br />
                  priority, in addition, they are looking for a better career
                  and a more secure future.
                </li>
                <li>
                  We find that the majority of students are willing to go abroad
                  for higher studies, which is their major <br />
                  priority, in addition, they are looking for a better career
                  and a more secure future.
                </li>

                <li>
                  Our survey analysis shows that most people ranked Canada as
                  their top choice, followed by the USA and <br />
                  then Australia.
                  <br />
                  As well as these three major countries, they inform us about
                  some European countries like Germany, <br />
                  England, and Ireland. Their education policies convinced them
                  to choose these countries.
                </li>
                <li>
                  The vast majority of people in our survey feel our app will be
                  helpful for them when they consider the <br />
                  reliability/necessity of our app.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon2">
          <div>
            <img className="kcImg5" src={kcImage5} />
          </div>
          <div className="lhs2">
            <div className="kcHead6">
              Project <span className="appHigh">Results</span>
            </div>
            <div className="kcText4">
              {lastSecContent.map((item, index) => (
                <div className="sectionItem" key={index}>
                  <img
                    src={greenTick}
                    className="green-tick"
                    alt="Green Tick"
                  />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </>
  );
};

export default KCOverSeas;
