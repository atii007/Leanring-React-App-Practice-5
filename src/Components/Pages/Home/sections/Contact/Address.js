import React from "react";
import { Link } from "react-router-dom";

const address = [
  {
    title: "Head Office",
    description: "Bay Larkin St, San Francisco, CA 94109, United States",
    contact: [
      {
        title: "Phone",
        href: "tel: 305-240-9671",
        description: "305-240-9671",
      },
      {
        title: "Email",
        href: "mailto:info@company.com",
        description: "info@company.com",
      },
    ],
  },
  {
    title: "Dubai Office",
    description: "Burj Park, Downtown Dubai, United Arab Emirates",
    contact: [
      {
        title: "Phone",
        href: "tel: 110-220-3400",
        description: "110-220-3400",
      },
      {
        title: "Email",
        href: "mailto:info@company.com",
        description: "info@company.com",
      },
    ],
  },
];

const Address = () => {
  return (
    <>
      {address.map((adr, index) => (
        <div
          className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto"
          key={index}
        >
          <h4 className="mb-3">{adr.title}</h4>
          <p>{adr.description}</p>
          <hr />
          {adr.contact.map((con, index) => (
            <p className="d-flex align-items-center mb-1" key={index}>
              <span className="me-2">{con.title}</span>
              <Link to={con.href} className="site-footer-link">
                {con.description}
              </Link>
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default Address;
