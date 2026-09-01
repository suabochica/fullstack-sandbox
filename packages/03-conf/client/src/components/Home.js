import { createElement } from "react";
import { Header } from "./Header.js";
import Menu from "./Menu.js";

const Home = () => {
  return createElement(
    "div",
    null,
    createElement(Header),
    createElement(Menu),
    createElement(
      "div",
      { className: "container" },
      createElement(
        "div",
        { className: "row" },
        createElement("h2", null, "Home"),
        createElement(
          "p",
          null,
          "Demon Slayer Corps is a community event where hashiras learn from fellow hashiras. We also have slayer related topics that include different nature elements, legal issues arround power as well as trainings that are interensting for slayers.",
        ),
      ),
    ),
  );
};

export default Home;
