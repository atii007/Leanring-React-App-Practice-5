import React from "react";

import undrawFinance from "../../../../assets/images/topics/undraw_Finance_re_gnv2.png";
import businessWomanUsingTablet from "../../../../assets/images/businesswoman-using-tablet-analysis.jpg";

const Finance = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="finance-tab-pane"
        role="tabpanel"
        aria-labelledby="finance-tab"
        tabIndex={0}
      >
        {" "}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Investment</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-finance rounded-pill ms-auto">
                    30
                  </span>
                </div>
                <img
                  src={undrawFinance}
                  className="custom-block-image img-fluid"
                  alt="undraw_Finance"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="custom-block custom-block-overlay">
              <div className="d-flex flex-column h-100">
                <img
                  src={businessWomanUsingTablet}
                  className="custom-block-image img-fluid"
                  alt="businesswoman-using-tablet-analysis"
                />
                <div className="custom-block-overlay-text d-flex">
                  <div>
                    <h5 className="text-white mb-2">Finance</h5>
                    <p className="text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint animi necessitatibus aperiam repudiandae nam omnis
                    </p>
                    <a
                      href="topics-detail.html"
                      className="btn custom-btn mt-2 mt-lg-3"
                    >
                      Learn More
                    </a>
                  </div>
                  <span className="badge bg-finance rounded-pill ms-auto">
                    25
                  </span>
                </div>
                <div className="social-share d-flex">
                  <p className="text-white me-4">Share:</p>
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter" />
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook" />
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-pinterest" />
                    </li>
                  </ul>
                  <a href="#" className="custom-icon bi-bookmark ms-auto" />
                </div>
                <div className="section-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
