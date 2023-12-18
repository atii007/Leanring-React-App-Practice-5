import React from "react";

import undrawRemoteDesign from "../../../../assets/images/topics/undraw-Remote-design-team-re-urdx.png";
import undrawRedesignFeedback from "../../../../assets/images/topics/undraw_Redesign_feedback_re_jvm0.png";
import colleaguesWorkingCozyOffice from "../../../../assets/images/topics/colleagues-working-cozy-office-medium-shot.png";

const Design = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="design-tab-pane"
        role="tabpanel"
        aria-labelledby="design-tab"
        tabIndex={0}
      >
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Web Design</h5>
                    <p className="mb-0">
                      Topic Listing Template based on Bootstrap 5
                    </p>
                  </div>
                  <span className="badge bg-design rounded-pill ms-auto">
                    14
                  </span>
                </div>
                <img
                  src={undrawRemoteDesign}
                  className="custom-block-image img-fluid"
                  alt="undraw_Remote_design"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Graphic</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-design rounded-pill ms-auto">
                    75
                  </span>
                </div>
                <img
                  src={undrawRedesignFeedback}
                  className="custom-block-image img-fluid"
                  alt="undrawRedesignFeedback"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Logo Design</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-design rounded-pill ms-auto">
                    100
                  </span>
                </div>
                <img
                  src={colleaguesWorkingCozyOffice}
                  className="custom-block-image img-fluid"
                  alt="colleaguesWorkingCozyOffice"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
