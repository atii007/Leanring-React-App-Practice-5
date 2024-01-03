import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavbarList = () => {
  // const token = useRouteLoaderData("root");
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { title: "Home", href: "/" },
    {
      title: "Popular Topics",
      href: "/TopicsListPage",
    },
    { title: "Contact", href: "/contact" },
    { title: "Authenticate", href: "/register?mode=login" },
  ];

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      links.forEach((sec) => {
        const sectionElement = document.getElementById(sec.href);

        if (
          sectionElement &&
          sectionElement.offsetTop <= scrollPosition &&
          sectionElement.offsetTop + sectionElement.offsetHeight >
            scrollPosition
        ) {
          setActiveLink(sec.title);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <ul className="navbar-nav ms-lg-5 me-lg-auto">
        {links.map((sec) => (
          <li
            key={sec.title}
            className={`nav-item ${sec.dropdownItems ? "dropdown" : ""}`}
          >
            <NavLink
              className={`nav-link click-scroll ${
                activeLink === sec.title ? "active" : ""
              }`}
              to={sec.href}
              onClick={() => handleLinkClick(sec.title)}
            >
              {sec.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* {token && (
        <Form action="/logout" method="post">
          <button className="form-control">Logout</button>
        </Form>
      )} */}
    </>
  );
};

export default NavbarList;
