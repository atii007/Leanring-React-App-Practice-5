import React from "react";
import { Link } from "react-router-dom";

const RegisterationHeader = () => {
  return (
    <header className="site-header d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Homepage</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Registeration Form
                </li>
              </ol>
            </nav>
            <h2 className="text-white">Registration Form</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RegisterationHeader;
