import React from "react";

import undrawRemoteDesignTeam from "../../../assets/images/topics/undraw-Remote-design-team-re-urdx.png";
import undrawPodcastAudience from "../../../assets/images/topics/undraw_Podcast_audience_re_4i5q.png";
import undrawOnlineAd from "../../../assets/images/topics/undraw_online_ad_re_ol62.png";
import { Link } from "react-router-dom";
const topics = [
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus",
    badge: "14",
    image: undrawRemoteDesignTeam,
    href: "TopicsListPage",
  },
  {
    title: "Advertising",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus",
    badge: "30",
    image: undrawOnlineAd,
    href: "TopicsListPage",
  },
  {
    title: "Podcast",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus",
    badge: "20",
    image: undrawPodcastAudience,
    href: "TopicsListPage",
  },
];

const Popular = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h3 className="mb-4">Popular Topics</h3>
          </div>
          <div className="col-lg-8 col-12 mt-3 mx-auto">
            {topics.map((topDet) => (
              <div
                className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5"
                key={topDet.title}
              >
                <div className="d-flex">
                  <img
                    src={topDet.image}
                    className="custom-block-image img-fluid"
                    alt={topDet.image}
                  />
                  <div className="custom-block-topics-listing-info d-flex">
                    <div>
                      <h5 className="mb-2">{topDet.title}</h5>
                      <p className="mb-0">{topDet.description}</p>
                      <Link
                        to={topDet.href}
                        className="btn custom-btn mt-3 mt-lg-4"
                      >
                        Learn More
                      </Link>
                    </div>
                    <span className="badge bg-design rounded-pill ms-auto">
                      {topDet.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
