import { createElement, useState } from "react";

const SignMeUp = ({ signMeUpCallback }) => {
  const [email, setEmail] = useState("");

  return createElement(
    "div",
    { className: "container" },
    createElement(
      "div",
      { className: "content" },
      createElement("input", {
        name: "email",
        placeholder: "Enter Email",
        type: "email",
        onChange: (event) => {
          setEmail(event.target.value);
        },
        value: email,
      }),
      createElement(
        "button",
        {
          className: "btn",
          disabled: !email.includes("@"),
          onClick: () => {
            signMeUpCallback(email);
            setEmail("");
            alert("Sing up confirmed");
          },
          type: "submit",
        },
        "Get Updates",
      ),
    ),
  );
};

export default SignMeUp;
