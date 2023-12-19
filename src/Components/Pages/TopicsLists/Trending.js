import React from "react";
import Web from "../Home/sections/Featured/FeaturedCards/Web";
import Finance from "../Home/sections/Featured/FeaturedCards/Finance";

const Trending = () => {
  return (
    <section class="section-padding section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <h3 class="mb-4">Trending Topics</h3>
          </div>
          <Web />
          <Finance />
        </div>
      </div>
    </section>
  );
};

export default Trending;
