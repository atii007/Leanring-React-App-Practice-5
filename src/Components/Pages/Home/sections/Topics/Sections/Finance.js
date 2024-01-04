import React from "react";

import undrawFinance from "../../../../../../assets/images/topics/undraw_Finance_re_gnv2.png";
import undrawEducatorRe from "../../../../../../assets/images/topics/undraw_Educator_re_ju47.png";
import { Link } from "react-router-dom";
import handleLinkClick from "../../../../../../util/handleLinkClick";

const financeDetails = [
  {
    title: "Investment",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "30",
    image: undrawFinance,
  },
  {
    title: "Finance",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "25",
    image: undrawEducatorRe,
  },
];

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
          {financeDetails.map((finance) => (
            <div
              className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3"
              key={finance.title}
            >
              <div className="custom-block bg-white shadow-lg">
                <Link to="TopicsListPage" onClick={handleLinkClick}>
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">{finance.title}</h5>
                      <p className="mb-0">{finance.description}</p>
                    </div>
                    <span className="badge bg-education rounded-pill ms-auto">
                      {finance.badge}
                    </span>
                  </div>
                  <img
                    src={finance.image}
                    className="custom-block-image img-fluid"
                    alt={finance.image}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Finance;
