// import React from 'react'
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Explore your future product</h1>
          <p className="hero__text">Create our iconic moment</p>
          <a className="hero__btn" href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
