import React from "react";

import TopicsList from "./TopicsList";
import Design from "./Sections/Design";
import Marketing from "./Sections/Marketing";
import Finance from "./Sections/Finance";
import { Link } from "react-router-dom";

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

        <TopicsList />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <Design />
                <Marketing />
                <Finance />
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <p>
                Want to See more?
                <Link
                  to="TopicsListPage"
                  className="btn custom-btn custom-border-btn ms-3"
                >
                  Check Out the List
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
