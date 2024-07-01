import React, { useState } from "react";
import "./contact.css";
import AboutCompany from "../AboutCompany";
import chooseUsIcon from "../../assets/chooseUs.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AboutCompany
      placeHolderImg={chooseUsIcon}
      headText={"Why choose us"}
      subText1={"Accelerate your"}
      subText2={"Growth!"}
      subText3={""}
      extraText1={
        "We are empowered to help customers modernize their IT operations, enhancing their business operations and transformations, and build a strong digital core."
      }
      extraText2={
        "Our are focused in providing acclerated gorwth, customer-centric solutions, and flexible approaches that are specifically rightsized for the needs of emerging mid-market and small enterprise customers."
      }
      extraText3={
        "Streamlined the processes, and established a strong reputation for consistently delivering superior  outcomes powered with the certifed techincal team of experts. Maintaining transparent and effective communication channels."
      }
      showCTA={false}
      extraHeader={"Why Choose us?"}
    />
  );
};

export default ContactForm;
