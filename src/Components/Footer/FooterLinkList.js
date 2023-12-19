import React from "react";

const Menu = [
  { title: "Home", href: "section_1" },
  { title: "Browse Topics", href: "section_2" },
  { title: "How it works", href: "section_3" },
  { title: "Contact", href: "section_5" },
];

const FooterLinkList = () => {
  return (
    <div className="col-lg-3 col-md-4 col-6">
      <h6 className="site-footer-title mb-3">Resources</h6>
      <ul className="site-footer-links">
        {Menu.map((footSec) => (
          <li className="site-footer-link-item" key={footSec.href}>
            <a href={`#${footSec.href}`} className="site-footer-link">
              {footSec.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
