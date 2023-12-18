import React from "react";

import TopicsList from "./TopicsList";
import Design from "./Sections/Design";
import Marketing from "./Sections/Marketing";
import Finance from "./Sections/Finance";

const Topics = () => {
  return (
    <>
      <section className="explore-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Browse Topics</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <TopicsList />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <Design />
                <Marketing />
                <Finance />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
