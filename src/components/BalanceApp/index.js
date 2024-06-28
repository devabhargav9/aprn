import React, { useRef } from "react";
import "./styles.css";
import { kcData } from "../../data";
import balance1 from "../../assets/balance1.png";
import balance2 from "../../assets/balance2.png";
import balance3 from "../../assets/balance3.png";
import balance4 from "../../assets/balance4.png";
import balance5 from "../../assets/balance5.png";
import growthImg from "../../assets/growthImage.svg";
import greenTick from "../../assets/greenTick.svg";
import topRated from '../../assets/topRated.svg';
import growthBlue from '../../assets/growthBlue.svg';
import growthYellow from '../../assets/growYellow.svg';
import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";

const BalanceApp = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="semiCircleBalance"></div>
      <div className="kcContainer">
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead">Balance</div>
            <div className="kcText">
              Meditation mobile app <br />
              for all the age groups
            </div>
            <div className="kcSubText">
              Balance is your personal meditation coach. Each day, you'll answer{" "}
              <br />
              questions about your meditation experience, goals, and <br />
              preferences.
            </div>
            <TopRated stat1={'Top Rated'} text1={'App on Appstore & Playstore'} icon1={topRated} stat2={'2x'} text2={'2x noticeable growth'} icon2={growthBlue} text3={'Enhance data analytics'} icon3={growthYellow}/>

          </div>
          <div>
            <img className="balanceimg1" src={balance1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              About the <span className="appHigh">App</span>
            </div>
            <div className="kcText1">
              YOUR PERSONAL MEDITATION COACH,
              <br />
              Balance is your personal meditation coach. Each day, you'll answer{" "}
              <br />
              questions about your meditation experience, goals, and <br />
              preferences. Using an audio library of thousands of files, Balance{" "}
              <br />
              assembles a daily meditation that's perfect for you. <br />
              The more you share over time, the more personalized and effective
              your <br />
              meditations become.
            </div>
            <div className="kcHead2">
              Problem <span className="appHigh">Statement</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  World Health Organization states that at least 6.5 per cent of{" "}
                  <br />
                  the Indian population suffers from some form of serious <br />
                  mental disorder
                </li>
                <li>
                  This includes depression, anxiety, obsessive-compulsive <br />
                  disorder (OCD), loneliness, irritable behaviour, insomnia, etc
                </li>
                <li>
                  There is an extreme shortage of mental health workers like{" "}
                  <br />
                  psychologists, psychiatrists and doctors
                </li>
                <li>
                  The average suicide rate in India is 10.9 for every lakh
                  people
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="balanceImg2" src={balance2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="balanceimg3" src={balance3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Our <span className="appHigh">Solutions</span>
            </div>
            <div className="kcText2">
              <ul>
                <li>
                  Build a mobile app, website and smartwatch app which can
                  <br />
                  give user simple solutions to all of their mental health
                  <br />
                  problems
                </li>
                <li>
                  Provide them with self healing techniques such as guided{" "}
                  <br />
                  meditation. listening to soothing music. watching motivational{" "}
                  <br />
                  videos and listening/reading to bedtime stories.
                </li>
                <li>
                  Provision to book an appointment with expert therapist and{" "}
                  <br />
                  counsellors
                </li>
              </ul>
            </div>
            {/* <div className="kcHead1">
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
            </div> */}
          </div>
        </div>
        <div className="kcCon2">
          <div>
            <img className="balanceimg4" src={balance4} />
          </div>
          <div className="lhs2">
            <div className="kcHead6">
              User <span className="appHigh">Research</span>
            </div>
            <div className="kcText3">
              <ul className="custom-list">
                <li>
                  Did this through qualitative and quantitative methodologies to
                  get better understandings about the end <br />
                  user.
                </li>
                <li>
                  Interviewed almost 10 people with different life situations.
                </li>
                <li>
                  We deliberately chose people with high levels of stress so
                  that we get quality data out of it.
                  <br /> This includes people such as a student who is giving
                  exams, an employee who's working hours are too <br />
                  long and job is stressful, a person who's career got messed
                  up, a divorcee single mother who is managing
                  <br />
                  everything on her own.
                </li>
                <li>These are some of questions we typically asked them</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kcCon3">
          <div>
            <img className="balanceimg5" src={balance5} />
          </div>
          <div className="lhs2">
            <div className="kcHead6">
              Usability <span className="appHigh">Testing</span>
            </div>
            <div className="sub6">
              I conducted usability test with my hi-fidelity wireframes to find
              out any <br />
              gaps, loopholes in the app. To do so, I finalised set of users
              resembling to <br />
              persona. I asked them to find a therapist, book an appointment and
              add it <br />
              into the calendar. Here are my observations:
            </div>
            <div className="kcText4">
              <div className="sectionItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                <div>
                  {" "}
                  For most of users navigating to find a therapist was a breeze.
                </div>
              </div>
              <div className="sectionItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                <div>
                  After deciding which therapist they want to book from a list,
                  <br /> they selected date, decided a time slot and booked
                  without <br />
                  any hassles.
                </div>
              </div>
              <div className="sectionItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                <div>
                  Payment was also straightforward for them.
                  <br />
                  'Add to calendar button was clearly visible which they did{" "}
                  <br />
                  instantaneously after booking.
                </div>
              </div>
              <div className="sectionItem">
                <img src={greenTick} className="green-tick" alt="Green Tick" />
                <div>
                  Many of them liked the idea about adding particular therapist{" "}
                  <br />
                  to their favourites.
                  <br />
                  Overall, they found app very easy to use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices}/>
    </>
  );
};

export default BalanceApp;
