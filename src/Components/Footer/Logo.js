import React from "react";
import { Link } from "react-router-dom";
import handleLinkClick from "../../util/handleLinkClick";

const Logo = () => {
  return (
    <div className="col-lg-3 col-12 mb-4 pb-2">
      <Link className="navbar-brand mb-2" to="/" onClick={handleLinkClick}>
        <i className="bi bi-book-half" style={{ paddingRight: "5px" }} />
        <span>Topic</span>
      </Link>
    </div>
  );
};

export default Logo;
