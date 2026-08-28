// const express = require("express");
import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";

import { App } from "../client/App";
import { handleModifyAnswerVotes } from "./shared/utility";

const app = express();
const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Which back end solution should we use for our application?",
    },
    {
      questionId: "Q2",
      content:
        "What percentage of developer time should be devoted to end-to-end testing?",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "Apache",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 0,
      content: "Java",
    },
    {
      answerId: "A3",
      questionId: "Q1",
      upvotes: 4,
      content: "Node.js",
    },
    {
      answerId: "A4",
      questionId: "Q2",
      upvotes: 2,
      content: "25%",
    },
    {
      answerId: "A5",
      questionId: "Q2",
      upvotes: 1,
      content: "50%",
    },
    {
      answerId: "A6",
      questionId: "Q2",
      upvotes: 1,
      content: "75%",
    },
  ],
};

app.use(express.static("dist"));
// index: false -> keep the SSR route below in charge of "/"
app.use(express.static("public", { index: false }));

app.get("/data", async (_request, response) => {
  response.json(data);
});

app.get("/vote/:answerId", (_request, response) => {
  const { query, params } = _request;

  data.answers = handleModifyAnswerVotes(
    data.answers,
    params.answerId,
    +query.increment // number cast with +
  );

  response.send("OK");
});

app.get("/", async (_request, response) => {
  const index = readFileSync("public/index.html", "utf8");
  const rendered = renderToString(<App {...data} />);
  response.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log("Server is listening on http://localhost:7777");
