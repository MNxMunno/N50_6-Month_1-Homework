// import React from "react";
import "./Explore.scss";
import explore1 from "../../../assets/images/explore-1.webp";
import explore2 from "../../../assets/images/explore-2.webp";
import explore3 from "../../../assets/images/explore-3.webp";

function Explore() {
  return (
    <section className="explore-section">
      <div className="container">
        <div className="explore-content">
          <h1 className="explore-title">Explore Xiaomi</h1>
          <div className="img__cards">
            <img src={explore2} alt="img" />
            <img src={explore1} alt="img" />
            <img src={explore3} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
