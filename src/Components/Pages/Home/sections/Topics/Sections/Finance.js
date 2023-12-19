import React from "react";

import undrawFinance from "../../../../../../assets/images/topics/undraw_Finance_re_gnv2.png";
import businessWomanUsingTablet from "../../../../../../assets/images/businesswoman-using-tablet-analysis.jpg";

const financeDetails = [
  {
    title: "Investment",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "30",
    image: undrawFinance,
    customClass: "col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 investment-box", // Add a custom class for Investment
  },
  {
    title: "Finance",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "25",
    image: businessWomanUsingTablet,
    customClass: "col-lg-6 col-md-6 col-12 finance-box", // Add a custom class for Finance
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
            <div className={finance.customClass} key={finance.title}>
              <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">{finance.title}</h5>
                      <p className="mb-0">{finance.description}</p>
                    </div>
                    <span className="badge bg-advertising rounded-pill ms-auto">
                      {finance.badge}
                    </span>
                  </div>
                  <img
                    src={finance.image}
                    className="custom-block-image img-fluid"
                    alt={finance.image}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Finance;
