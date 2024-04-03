// import React from "react";
import "./Feature.scss";
import hero__img from "../../../assets/images/feature__hero-img.webp";
import img1 from "../../../assets/images/feature__card-img.webp";
import img2 from "../../../assets/images/feature__card-img-2.webp";
import img3 from "../../../assets/images/feature__card-img-3.webp";
import img4 from "../../../assets/images/feature__card-img-4.webp";
function Feature() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-content">
          <h1 className="feature__title">Feature Products</h1>
          <div className="feature__pagination">
            <div className="page__texts">
              <p className="first__child">Stay on Trend</p>
              <p>Latest Flagship</p>
              <p>Enjoy theOutdoors</p>
              <p>Gaming Essentials</p>
            </div>
          </div>
          <div className="feature__cards">
            <div className="feature__card">
              <div className="child__card">
                <img src={hero__img} alt="img" />
              </div>
              <div className="child__card child_card">
                <h1 className="phone__title">
                  Redmi Note <p>13</p> Pro+
                  <span>5G</span>
                </h1>
                <p className="phone__name">
                  Xiaomi Fan Festival Special Edition
                </p>
                <p className="phone__info">
                  Limited availabity | Mystic Silver
                </p>
              </div>
            </div>
            <div className="feature__cards__bottom">
              <div className="feature__card__bottom">
                <img src={img1} alt="" />
                <h3>Redmi Note 13 5G</h3>
                <p>Super-clear 108MP triple camera</p>
              </div>
              <div className="feature__card__bottom">
                <img src={img2} alt="" />
                <h3>Redmi Watch 4</h3>
                <p>Ultra-large `1.97"` AMOLED display</p>
              </div>
              <div className="feature__card__bottom">
                <img src={img3} alt="" />
                <h3>Redmi Buds 5 Pro</h3>
                <p>High-resolution, Hi-Fi sound quality</p>
              </div>
              <div className="feature__card__bottom">
                <img src={img4} alt="" />
                <h3>Redmi Buds 5</h3>
                <p>Al noise reduction for calls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
