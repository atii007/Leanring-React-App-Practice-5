import React from "react";

import Web from "./FeaturedCards/Web";
import FinanaceBox from "./FeaturedCards/Finance";

const Featured = () => {
  return (
    <>
      <section className="featured-section">
        <div className="container">
          <div className="row justify-content-center">
            <Web />
            <FinanaceBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
