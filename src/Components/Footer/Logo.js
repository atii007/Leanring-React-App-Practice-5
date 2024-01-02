import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="col-lg-3 col-12 mb-4 pb-2">
      <Link className="navbar-brand mb-2" to="/">
        <i className="bi bi-book-half" style={{ paddingRight: "5px" }} />
        <span>Topic</span>
      </Link>
    </div>
  );
};

export default Logo;
