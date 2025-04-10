import React, { useState, useEffect, useRef } from "react";
import "./CounterSection.css"; // Import CSS file

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 1;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="counter-box">
      <h2 className="counter-number">{count}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-section">
      <div className="counter-container">
        <h2 className="counter-title">
          Welcome to Vinayaka Mission's Community
        </h2>
        <div className="counter-grid">
          <Counter end={25} label="Schools and Colleges" />
          <Counter end={45} label="Research Centres" />
          <Counter end={4000} label="Faculty" />
          <Counter end={19000} label="Students" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
