import React from "react";
import businesswomanImage from "../../../assets/images/businesswoman-using-tablet-analysis.jpg";
import undrawRemoteDesign from "../../../assets/images/topics/undraw-Remote-design-team-re-urdx.png";

const Featured = () => {
  return (
    <>
      <section className="featured-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">Web Design</h5>
                      <p className="mb-0">
                        When you search for free CSS templates, you will notice
                        that TemplateMo is one of the best websites.
                      </p>
                    </div>
                    <span className="badge bg-design rounded-pill ms-auto">
                      14
                    </span>
                  </div>
                  <img
                    src={undrawRemoteDesign}
                    className="custom-block-image img-fluid"
                    alt="featuredImage"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="custom-block custom-block-overlay">
                <div className="d-flex flex-column h-100">
                  <img
                    src={businesswomanImage}
                    className="custom-block-image img-fluid"
                    alt="featuredImage"
                  />
                  <div className="custom-block-overlay-text d-flex">
                    <div>
                      <h5 className="text-white mb-2">Finance</h5>
                      <p className="text-white">
                        Topic Listing Template includes homepage, listing page,
                        detail page, and contact page. You can feel free to edit
                        and adapt for your CMS requirements.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
