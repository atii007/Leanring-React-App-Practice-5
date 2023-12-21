import React from "react";
import { Link } from "react-router-dom";

const contact = [
  { title: "305-240-9671", href: "tel: 305-240-9671" },
  { title: "info@company.com", href: "mailto:info@company.com" },
];

const footerInfo = [
  {
    title: "Information",
    contactInfo: contact,
  },
];

const FooterInfoSection = () => {
  return (
    <>
      {footerInfo.map((info, index) => (
        <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0" key={index}>
          <h6 className="site-footer-title mb-3">{info.title}</h6>
          {info.contactInfo.map((contact, index) => (
            <p className="text-white d-flex mb-1" key={index}>
              <Link to={contact.href} className="site-footer-link">
                {contact.title}
              </Link>
            </p>
          ))}
        </div>
      ))}
      <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
        <p className="copyright-text mt-lg-5 mt-4">
          Copyright © 2048 Topic Listing Center. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default FooterInfoSection;
