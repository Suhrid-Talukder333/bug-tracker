import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Buttons from "../../components/Buttons/Buttons";
import HeroImg from "../../assets/plan.svg";
import "./HomePage_styles.css";

const HomePage = () => {
  return (
    <>
      <Navbar brandName="BugTracker" />
      <section className="hero-section">
        <div className="hero-text-container">
          <div className="hero-headline">
            <h1 className="hero-headline-text">Save The Bugs</h1>
          </div>
          <div className="hero-paragraph">
            <p className="hero-paragraph-text">
              Bugs are important, that is why <br />
              you should monitor and save them nicely.
            </p>
          </div>
          <div className="hero-buttons-container">
            <Buttons title="Create Account" url="login" bg="white" />
            <Buttons title="Learn More" url="#" bg="rgb(0, 200, 235)" />
          </div>
        </div>
        <div className="hero-img-container">
          <img src={HeroImg} alt="hero" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
