import { createElement, useEffect, useState } from "react";

import { Header } from "./Header.js";
import Menu from "./Menu.js";
import SpeakerDetail from "./SpeakerDetail.js";

import speakerData from "../data/SpeakersData.js";

const Speakers = () => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSaturdayHandler = () => setSpeakingSaturday(!speakingSaturday);
  const onChangeSundayHandler = () => setSpeakingSunday(!speakingSunday);
  const onHeartFavoriteHandler = (event, favoriteValue) => {
    event.preventDefault();
    const sessionId = parseInt(event.target.dataset.sessionId);

    setSpeakerList(
      speakerList.map((speaker) => {
        if (speaker.id === sessionId)
          return { ...speaker, isFavorite: favoriteValue };
        return speaker;
      }),
    );
  };

  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ saturday, sunday }) =>
            (speakingSaturday && saturday) || (speakingSunday && sunday),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;
          return 0;
        });

  useEffect(() => {
    setIsLoading(true);

    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setSpeakerList(speakerData);
      setIsLoading(false);
    });

    return () => {
      console.log("clean up");
    };
  }, []);

  if (isLoading) return createElement("div", null, "Loading");

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
        { className: "form-check-inline" },
        createElement(
          "label",
          { className: "form-check-label" },
          createElement("input", {
            className: "from-check-input",
            checked: speakingSaturday,
            onChange: onChangeSaturdayHandler,
            type: "checkbox",
          }),
          "Saturday Speakers",
        ),
      ),
      createElement(
        "div",
        { className: "form-check-inline" },
        createElement(
          "label",
          { className: "form-check-label" },
          createElement("input", {
            className: "from-check-input",
            checked: speakingSunday,
            onChange: onChangeSundayHandler,
            type: "checkbox",
          }),
          "Sunday Speakers",
        ),
      ),
      createElement(
        "div",
        { className: "row" },
        createElement(
          "div",
          { className: "card-deck" },
          speakerListFiltered.map(
            ({ id, firstName, lastName, bio, isFavorite }, index) => {
              return createElement(SpeakerDetail, {
                bio,
                firstName,
                id,
                imageId: String((index % 9) + 1).padStart(2, "0"),
                isFavorite,
                key: id,
                lastName,
                onHeartFavoriteHandler,
              });
            },
          ),
        ),
      ),
    ),
  );
};

export default Speakers;
