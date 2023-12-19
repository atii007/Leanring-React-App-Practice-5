import React from "react";

import undrawRemoteDesign from "../../../../../../assets/images/topics/undraw-Remote-design-team-re-urdx.png";

const Web = () => {
  return (
    <div className="col-lg-4 col-12 mb-4 mb-lg-0">
      <div className="custom-block bg-white shadow-lg">
        <a href="topics-detail.html">
          <div className="d-flex">
            <div>
              <h5 className="mb-2">Web Design</h5>
              <p className="mb-0">
                When you search for free CSS templates, you will notice that
                TemplateMo is one of the best websites.
              </p>
            </div>
            <span className="badge bg-design rounded-pill ms-auto">14</span>
          </div>
          <img
            src={undrawRemoteDesign}
            className="custom-block-image img-fluid"
            alt="featuredImage"
          />
        </a>
      </div>
    </div>
  );
};

export default Web;
