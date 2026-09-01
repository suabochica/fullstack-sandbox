import { createElement } from "react";
import Home from "./components/Home.js";
import Speakers from "./components/Speakers.js";

const App = ({ pageName }) => {
  if (pageName === "Home") return createElement(Home);
  if (pageName === "Speakers") return createElement(Speakers);

  return createElement("div", null, "Not found");
};

export default App;
