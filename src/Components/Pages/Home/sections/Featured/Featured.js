import React from "react";

import WebBox from "./FeaturedCards/WebBox";
import FinanaceBox from "./FeaturedCards/FinanceBox";

const Featured = () => {
  return (
    <>
      <section className="featured-section">
        <div className="container">
          <div className="row justify-content-center">
            <WebBox />
            <FinanaceBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
