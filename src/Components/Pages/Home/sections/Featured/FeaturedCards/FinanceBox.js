import React from "react";

import businesswomanImage from "../../../../../../assets/images/businesswoman-using-tablet-analysis.jpg";

const finance = {
  title: "Finance",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus",
  Image: businesswomanImage,
  href: "topics-detail.html",
};

const FinanaceBox = () => {
  return (
    <div className="col-lg-6 col-12">
      <div className="custom-block custom-block-overlay">
        <div className="d-flex flex-column h-100">
          <img
            src={finance.Image}
            className="custom-block-image img-fluid"
            alt="featuredImage"
          />
          <div className="custom-block-overlay-text d-flex">
            <div>
              <h5 className="text-white mb-2">{finance.title}</h5>
              <p className="text-white">{finance.description}</p>
              <a href={finance.href} className="btn custom-btn mt-2 mt-lg-3">
                Learn More
              </a>
            </div>
            <span className="badge bg-finance rounded-pill ms-auto">25</span>
          </div>
          <div className="social-share d-flex">
            <p className="text-white me-4">Share:</p>
            <ul className="social-icon">
              <li className="social-icon-item">
                <a href="/" className="social-icon-link bi-twitter" />
              </li>
              <li className="social-icon-item">
                <a href="/" className="social-icon-link bi-facebook" />
              </li>
              <li className="social-icon-item">
                <a href="/" className="social-icon-link bi-pinterest" />
              </li>
            </ul>
            <a href="/" className="custom-icon bi-bookmark ms-auto" />
          </div>
          <div className="section-overlay" />
        </div>
      </div>
    </div>
  );
};

export default FinanaceBox;
