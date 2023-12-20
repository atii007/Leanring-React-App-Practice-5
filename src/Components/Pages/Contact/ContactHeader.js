import React from "react";

const ContactHeader = () => {
  return (
    <header className="site-header d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Homepage</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Form
                </li>
              </ol>
            </nav>
            <h2 className="text-white">Contact Form</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
