import React from "react";

import undrawOnlineAd from "../../../../../../assets/images/topics/undraw_online_ad_re_ol62.png";
import undrawGroupVideo from "../../../../../../assets/images/topics/undraw_Group_video_re_btu7.png";
import undrawViralTweet from "../../../../../../assets/images/topics/undraw_viral_tweet_gndb.png";
import { Link } from "react-router-dom";

const marketingDetails = [
  {
    title: "Advertising",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "65",
    image: undrawOnlineAd,
  },
  {
    title: "Video Content",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "50",
    image: undrawGroupVideo,
  },
  {
    title: "Viral Tweet",
    description: "Lorem Ipsum dolor sit amet consectetur",
    badge: "30",
    image: undrawViralTweet,
  },
];

const Marketing = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="marketing-tab-pane"
        role="tabpanel"
        aria-labelledby="marketing-tab"
        tabIndex={0}
      >
        <div className="row">
          {marketingDetails.map((mark) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
              <div className="custom-block bg-white shadow-lg">
                <Link to="TopicsListPage">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">{mark.title}</h5>
                      <p className="mb-0">{mark.description}</p>
                    </div>
                    <span className="badge bg-advertising rounded-pill ms-auto">
                      {mark.badge}
                    </span>
                  </div>
                  <img
                    src={mark.image}
                    className="custom-block-image img-fluid"
                    alt={mark.image}
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

export default Marketing;
