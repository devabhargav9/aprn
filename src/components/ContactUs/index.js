import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className='header'>Contact us</div>
      <div className='subText'>Get in Touch with Us Today!</div>
      <div className='namesContainer'>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="styled-input" // Use className instead of class
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Jane'
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="styled-input" // Use className instead of class
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Smitherton'
          />
        </div>
      </div>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="styled-input-email" // Use className instead of class
        value={formData.email}
        onChange={handleChange}
        placeholder='email@janesfakedomain.net'
      />
      <div className='dummyDiv'></div>
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        className="styled-input" // Use className instead of class
        value={formData.message}
        onChange={handleChange}
        placeholder='Enter your question or message here..'
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
