import { createElement } from "react";
import SignMeUp from "./SignMeUp.js";

export const Header = () => {
  const signUpCallback = (email) => {
    return console.log(`sign up called with ${email}`);
  };

  return createElement(
    "div",
    { className: "jumbotron" },
    createElement(
      "div",
      { className: "row" },
      createElement(
        "div",
        { className: "col-12 text-center" },
        createElement("h6", null, "October 19-20 2019"),
        createElement("h6", null, "Mugen Train, Tokio"),
      ),
    ),
    createElement(
      "header",
      { className: "col-12 text-right" },
      createElement(
        "div",
        { className: "logo" },
        createElement("img", { src: "/path/to/logo.png" }),
      ),
      createElement("h2", null, "Demon Slayer Corps"),
      createElement(
        "div",
        { className: "sign-me-up" },
        createElement(SignMeUp, { signMeUpCallback: signUpCallback }),
      ),
    ),
  );
};
