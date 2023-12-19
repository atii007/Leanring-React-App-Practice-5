import React, { useState, useEffect } from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="sticky-wrapper "
        className={`sticky-wrapper ${isSticky ? "is-sticky" : ""}`}
        style={{ height: "99px" }}
      >
        <nav
          className={`navbar navbar-expand-lg ${isSticky ? ".is-sticky" : ""}`}
          style={{ position: "fixed", top: "0", width: "100%" }}
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <i className="bi-back" />
              <span>Topic</span>
            </a>
            <div className="d-lg-none ms-auto me-4">
              <a href="#top" className="navbar-icon bi-person smoothscroll" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavbarList />
              <div className="d-none d-lg-block">
                <a href="#top" className="navbar-icon bi-person smoothscroll" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
