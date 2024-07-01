import React, { useRef } from "react";
import "./styles.css";
import { kcData } from "../../data";
import may1 from "../../assets/may1.png";
import may2 from "../../assets/may2.png";
import may3 from "../../assets/may3.png";
import may4 from "../../assets/may4.png";
import may5 from "../../assets/may5.png";
import growthImg from "../../assets/growthImage.svg";
import mayStats from "../../assets/mayStats.svg";
import growthYellow from "../../assets/growYellow.svg";

import HeadNavBar from "../HeadNavBar";
import Footer from "../Footer";
import TopRated from "../TopRated";

const MayBank = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeadNavBar />
      <div className="semiCircleMay"></div>
      <div className="mayContainer">
        <div className="kcCon1">
          <div className="lhs">
            <div className="mayHead">Maybank</div>
            <div className="kcText">
              Maybank2u Mobile <br />
              Redesign
            </div>
            <div className="kcSubText">
              Maybank2u is the internet banking portal of Maybank, Malaysia's{" "}
              <br />
              largest bank — positioning itself as the one stop portal for all{" "}
              <br />
              online financial needs such as banking, payments, insurance and{" "}
              <br />
              stock broking.
            </div>
            <div className="dev1Stats">
              <div className="dev1Lhs">
                <div
                  className="dev1Percent"
                  style={{ color: "rgba(235, 161, 15, 1)" }}
                >
                  70%
                </div>
                <div className="dev1Text">Noticable growth</div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <div
                  className="dev1Percent"
                  style={{ color: "rgba(235, 161, 15, 1)" }}
                >
                  2x
                </div>
                <div className="dev1Text">
                  Increment in customer positive feedback on the app
                </div>
              </div>
              <div className="dev1Mid"></div>
              <div className="dev1Rhs">
                <img src={growthYellow} alt="growth" />
                <div className="dev1Text">Enhance data analytics</div>
              </div>
            </div>{" "}
          </div>
          <div>
            <img className="may1" src={may1} />
          </div>
        </div>
        <div className="kcCon1">
          <div className="lhs">
            <div className="kcHead1">
              Delivering <span className="appHighMay">functional</span> value
            </div>
            <div className="kcText1">
              In the eyes of users, Maybank2u is simply a functional tool to{" "}
              <br />
              perform financial transactions. Users who come on the site often{" "}
              <br />
              have a specific goal in mind to achieve. It is our duty to
              identify <br />
              and help them achieve their goals more efficiently by means of a{" "}
              <br />
              strong human-centered design. Deeply understanding their needs{" "}
              <br />
              will therefore be this design’s top priority.
            </div>
          </div>
          <div>
            <img className="may2" src={may2} />
          </div>
        </div>
        <div className="kcCon1">
          <div>
            <img className="may3" src={may3} />
          </div>
          <div className="lhs">
            <div className="kcHead1">
              Humanising{" "}
              <span className="appHighMay">
                financial <br />
                services
              </span>
            </div>
            <div className="kcTextn">
              Banks are often seen as monotonous corporate establishments <br />
              devoid of emotions. Understanding this, Maybank wants to <br />
              humanise financial services by providing convenient access to{" "}
              <br />
              financing, and being at the heart of the community. In this
              design, <br />
              we want the users to feel as if they’re interacting with a person{" "}
              <br />
              rather than a corporate entity.
            </div>
          </div>
        </div>
        <div className="kcCon2">
          <div>
            <img className="may4" src={may4} />
          </div>
          <div className="lhsn">
            <div className="kcHead6">
              The <span className="appHighMay">Solution</span>
            </div>
            <div className="kcTextn">
              <div style={{ paddingBottom: "3px" }}>
                <strong>Hello screen // Login page</strong>
              </div>
              <div style={{ paddingBottom: "24px" }}>
                Asimple hello can mean a thousand words. For Maybank, it is to
                humanise financial
                <br />
                services. This design emphasizes greatly on human interaction,
                making Maybank feel a lot <br />
                less like a corporate entity, but more like
                <br />
                an actual human interaction.
              </div>
              <div style={{ paddingBottom: "3px" }}>
                <strong>Welcome back // Main page</strong>
              </div>
              <div style={{ paddingBottom: "24px" }}>
                As you open the page, the website greets you. You can’t help but
                feel loved.
                <br />
                Mobile users are fast. They need to be quick. And they want to
                be efficient. Maybank2u <br />
                users log on primarily to do two things: to check their balance,
                and to transfer funds/make <br />
                payments1. The result is this home page. Their balance is
                readily available, and to make a <br />
                transfer/payment is just a mere click away.
              </div>
              <div style={{ paddingBottom: "3px" }}>
                <strong>Transferring funds</strong>
              </div>
              <div style={{ paddingBottom: "24px" }}>
                Transferring funds is no longer a scary, corporate-y process.
                Everything feels simplified, <br />
                and Maybank reassures you that your transaction has been
                successful.
              </div>
            </div>
          </div>
        </div>

        <img className="may5" src={may5} />
      </div>
      <Footer showAstronaut={true} scrollToServices={scrollToServices} />
    </>
  );
};

export default MayBank;
