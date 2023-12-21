import React, { useState, useEffect } from "react";
import NavbarList from "./NavbarList";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink className="navbar-brand" to="/">
              <i className="bi-back" />
              <span>Topic</span>
            </NavLink>
            <div className="d-lg-none ms-auto me-4">
              <Link to="/" className="navbar-icon bi-person smoothscroll" />
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
                <Link
                  to="register"
                  className="navbar-icon bi-person smoothscroll"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
