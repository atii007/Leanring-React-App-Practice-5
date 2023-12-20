import React from "react";
import FinanaceBox from "../Home/sections/Featured/FeaturedCards/FinanceBox";

const Trending = () => {
  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h3 className="mb-4">Trending Topics</h3>
          </div>
          <FinanaceBox />
        </div>
      </div>
    </section>
  );
};

export default Trending;
