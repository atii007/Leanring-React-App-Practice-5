import { Link } from "react-router-dom";
import WorkingList from "./WorkingLists";

const Work = () => {
  return (
    <>
      <section className="timeline-section section-padding" id="section_3">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white mb-4">How does it work?</h2>
            </div>
            <WorkingList />
            <div className="col-12 text-center mt-5">
              <p className="text-white">
                Want to learn more?
                <Link to="/" className="btn custom-btn custom-border-btn ms-3">
                  Check out Youtube
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
