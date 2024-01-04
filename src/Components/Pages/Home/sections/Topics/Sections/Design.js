import React from "react";

import undrawRedesignFeedback from "../../../../../../assets/images/topics/undraw_Redesign_feedback_re_jvm0.png";
import colleaguesWorkingCozyOffice from "../../../../../../assets/images/topics/colleagues-working-cozy-office-medium-shot.png";
import WebBox from "../../Featured/FeaturedCards/WebBox";
import { Link } from "react-router-dom";
import handleLinkClick from "../../../../../../util/handleLinkClick";

const designDetails = [
  {
    title: "Graphic",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "100",
    image: undrawRedesignFeedback,
  },
  {
    title: "Logo Design",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "75",
    image: colleaguesWorkingCozyOffice,
  },
];

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
          <WebBox />
          {designDetails.map((des) => (
            <div
              className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
              key={des.title}
            >
              <div className="custom-block bg-white shadow-lg">
                <Link to="TopicsListPage" onClick={handleLinkClick}>
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">{des.title}</h5>
                      <p className="mb-0">{des.description}</p>
                    </div>
                    <span className="badge bg-design rounded-pill ms-auto">
                      {des.badge}
                    </span>
                  </div>
                  <img
                    src={des.image}
                    className="custom-block-image img-fluid"
                    alt={des.image}
                  ></img>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Design;
