import React from "react";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="sliderContainer">
        <Slider />
      </div>
      <section className="homeAboutParagraphContainer">
        <h2 className="homeAboutParagraphContainer__heading">
          About Bubbly...
        </h2>
        <p className="homeAboutParagraphContainer__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="homeAboutParagraphContainer__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        </p>
      </section>
    </div>
  );
};

export default Home;
