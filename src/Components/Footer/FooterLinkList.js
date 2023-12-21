import React from "react";
import { Link } from "react-router-dom";

const Menu = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
  {
    title: "Popular Topics",
    href: "/TopicsListPage",
  },
];

const FooterLinkList = () => {
  return (
    <div className="col-lg-3 col-md-4 col-6">
      <h6 className="site-footer-title mb-3">Resources</h6>
      <ul className="site-footer-links">
        {Menu.map((footSec) => (
          <li className="site-footer-link-item" key={footSec.href}>
            <Link to={footSec.href} className="site-footer-link">
              {footSec.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
