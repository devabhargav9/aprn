import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import s from "./facts.css"; // Assuming you have your CSS file imported
import { facts } from "../../data"; // Assuming facts is your data array

const Facts = () => {
  const [counters, setCounters] = useState(facts.map(() => 0));

  useEffect(() => {
    const factsContainer = document.querySelector(".facts-container");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 1 } // Trigger when at least 50% of the element is visible
    );

    if (factsContainer) {
      observer.observe(factsContainer);
    }

    return () => {
      if (factsContainer) {
        observer.unobserve(factsContainer);
      }
    };
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounters = prevCounters.map((count, index) => {
          if (count < facts[index].value) {
            return count + 1;
          } else {
            return facts[index].displayText;
          }
        });

        if (newCounters.every((count, index) => count === facts[index].value)) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, 10); // Adjust the interval as needed
  };

  return (
    <div className="facts-container">
      <div className="factsLhs">
        <div className="factsSubHead">
          <span className="factsBlue">Facts</span> about our<br/>company
        </div>
      </div>
      
      <div className="factsRhs">
        <div className="factsHeader">
          {facts.map((fact, index) => (
            <div className="numbersContainer" key={index}>
              <img src={fact.icon} alt="fact" className="fact-icon" />
              <div className="fact-value">{counters[index]}</div>
              <div className="fact-name">{fact.name}</div>
            </div>
          ))}
        </div>
        <div className="factStats">*Stats based on the growth delivered to our clients</div>
      </div>
    </div>
  );
};

export default Facts;
