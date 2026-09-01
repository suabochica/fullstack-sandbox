import { createElement } from "react";

const Menu = () => {
  return createElement(
    "nav",
    { className: "navbar" },
    createElement(
      "ul",
      { className: "navbar-nav" },
      createElement(
        "li",
        { className: "navbar-nav-item" },
        createElement(
          "a",
          { className: "navbar-nav-item-link", href: "/" },
          "Home",
        ),
      ),
      createElement(
        "li",
        { className: "navbar-nav-item" },
        createElement(
          "a",
          { className: "navbar-nav-item-link", href: "/speakers.html" },
          "Speakers",
        ),
      ),
    ),
  );
};

export default Menu;
