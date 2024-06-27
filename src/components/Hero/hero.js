import React from 'react';
import './styles.css'; // Import your CSS styles
import { appScrollData } from '../../data';

const HeroSection = ({ appScrollData }) => (
  <>
    {appScrollData.map((image, index) => (
      <section key={index} className="hero">
        <div className="hero-inner" id={`section-${index}`}>
          <figure style={{ backgroundImage: image }} />
        </div>
      </section>
    ))}
  </>
);

export default HeroSection;
