import { useState, useEffect } from "react";

const NavbarList = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const dropdown = [
    { title: "Topics Listing", href: "topics-listing.html" },
    { title: "Contact Form", href: "contact.html" },
  ];
  const links = [
    { title: "Home", href: "section_1" },
    { title: "Browse Topics", href: "section_2" },
    { title: "How it Works", href: "section_3" },
    { title: "Contact", href: "section_5" },
    {
      title: "Pages",
      dropdownItems: dropdown,
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
          key={sec.href}
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
              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby={`navbarLightDropdownMenuLink_${sec.href}`}
              >
                {sec.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.href}>
                    <a className="dropdown-item" href={dropdownItem.href}>
                      {dropdownItem.title}
                    </a>
                  </li>
                ))}
              </ul>
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
