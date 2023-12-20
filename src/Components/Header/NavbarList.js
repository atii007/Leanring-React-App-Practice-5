import { useState, useEffect } from "react";

const NavbarList = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { title: "Home", href: "section_1" },
    { title: "Browse Topics", href: "section_2" },
    { title: "How it Works", href: "section_3" },
    { title: "Find Us", href: "section_5" },
    { title: "Contact", href: "" },
    {
      title: "Popular Topics",
      href: "",
    },
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
    <ul className="navbar-nav ms-lg-5 me-lg-auto">
      {links.map((sec) => (
        <li
          key={sec.title}
          className={`nav-item ${sec.dropdownItems ? "dropdown" : ""}`}
        >
          {sec.dropdownItems ? (
            <>
              <a
                className={`nav-link dropdown-toggle ${
                  activeLink === sec.title ? "active" : ""
                }`}
                href="#pages"
                id={`navbarLightDropdownMenuLink_${sec.href}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleLinkClick(sec.title)}
              >
                {sec.title}
              </a>
            </>
          ) : (
            <a
              className={`nav-link click-scroll ${
                activeLink === sec.title ? "active" : ""
              }`}
              href={`#${sec.href}`}
              onClick={() => handleLinkClick(sec.title)}
            >
              {sec.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
