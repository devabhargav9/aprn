import React from "react";
import s from "./contactPage.css";
import ContactForm from "../../components/ContactUs";
import contactUs from "../../assets/contactUs.svg";
import HeadNavBar from "../../components/HeadNavBar";

const ContactPage = () => {
  return (
    <>
    <HeadNavBar />
    <div className="contactContainer">

      <ContactForm />
      <img src={contactUs} alt="Contact Us" className="contactUsIcon" />
    </div>
    </>
  );
};

export default ContactPage;
