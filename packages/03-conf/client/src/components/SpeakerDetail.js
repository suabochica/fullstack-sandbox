import { createElement } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll.js";

const SpeakerDetail = ({
  bio,
  firstName,
  id,
  imageId,
  isFavorite,
  lastName,
  onHeartFavoriteHandler,
}) => {
  return createElement(
    "div",
    { className: "card col-4" },
    createElement(ImageToggleOnScroll, {
      alt: `${firstName} ${lastName}`,
      primaryImage: `/static/bw/hashira-${imageId}.webp`,
      secondaryImage: `/static/color/hashira-${imageId}.webp`,
    }),
    createElement(
      "div",
      { className: "card-body" },
      createElement(
        "h4",
        { className: "card-title" },
        createElement("button", {
          className: isFavorite ? "heart-on-button" : "heart-off-button",
          "data-session-id": id,
          onClick: (event) => {
            onHeartFavoriteHandler(event, !isFavorite);
          },
        }),
        createElement("p", null, `${firstName} ${lastName}`),
      ),
      createElement("p", null, bio),
    ),
  );
};

export default SpeakerDetail;
