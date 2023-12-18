import React from "react";

import undrawOnlineAd from "../../../../assets/images/topics/undraw_online_ad_re_ol62.png";
import undrawGroupVideo from "../../../../assets/images/topics/undraw_Group_video_re_btu7.png";
import undrawViralTweet from "../../../../assets/images/topics/undraw_viral_tweet_gndb.png";

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
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Advertising</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-advertising rounded-pill ms-auto">
                    30
                  </span>
                </div>
                <img
                  src={undrawOnlineAd}
                  className="custom-block-image img-fluid"
                  alt="undrawOnlineAd"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Video Content</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-advertising rounded-pill ms-auto">
                    65
                  </span>
                </div>
                <img
                  src={undrawGroupVideo}
                  className="custom-block-image img-fluid"
                  alt="undraw_Group_video"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Viral Tweet</h5>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <span className="badge bg-advertising rounded-pill ms-auto">
                    50
                  </span>
                </div>
                <img
                  src={undrawViralTweet}
                  className="custom-block-image img-fluid"
                  alt="undraw_viral_tweet"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
