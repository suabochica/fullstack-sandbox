import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import { App } from './App';
import { handleModifyAnswerVotes } from "../server/shared/utility";

let state = undefined;

fetch("/data")
  .then(data => data.json())
  .then(json => {
    state = json;
    console.log("Got the state", state);
    render()
  });

// function handleModifyAnswerVotes(answerId, increment) {
//   state.answers = state.answers.map(answer => {
//     if (answer.answerId !== answerId ) {
//       return answer;
//     } else {
//       return { ...answer, upvotes: answer.upvotes + increment };
//     }
//   });
//   render();
// }

function handleVote(answerId, increment) {
  state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);
  fetch(`vote/${answerId}?increment=${increment}`);

  render();
}

let root = null;

function render() {
  const app = <App {...state} handleModifyAnswerVotes={handleVote}/>;

  if (root) {
    root.render(app);
  } else {
    root = hydrateRoot(document.querySelector("#container"), app);
  }
}

