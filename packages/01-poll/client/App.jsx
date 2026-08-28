import React from 'react';

export const App = ({questions, answers, handleModifyAnswerVotes}) => (
  <div className="app">
    <header className="app__header">
      <span className="app__badge">Live poll</span>
      <h1 className="app__title">Q&A Tool</h1>
      <p className="app__subtitle">Cast your vote and watch the results move</p>
    </header>
    <main className="polls">
      {questions.map(({questionId, content}) => {
        const questionAnswers = answers.filter(answer => answer.questionId === questionId);
        const totalVotes = questionAnswers.reduce((total, {upvotes}) => total + upvotes, 0);
        const maxVotes = Math.max(0, ...questionAnswers.map(({upvotes}) => upvotes));

        return (
          <section className="poll-card" key={questionId}>
            <h2 className="poll-card__question">{content}</h2>
            <div className="poll-options">
              {questionAnswers.map(({content, upvotes, answerId}) => {
                const percent = totalVotes === 0 ? 0 : Math.round((upvotes / totalVotes) * 100);
                const isLeading = totalVotes > 0 && upvotes === maxVotes;
                const className = isLeading ? 'poll-option poll-option--leading' : 'poll-option';

                return (
                  <div className={className} key={answerId}>
                    <span className="poll-option__bar" style={{width: `${percent}%`}} />
                    <div className="poll-option__content">
                      <span className="poll-option__label">{content}</span>
                      <span className="poll-option__percent">{percent}%</span>
                      <div className="poll-option__actions">
                        <button
                          className="vote-btn vote-btn--up"
                          onClick={() => handleModifyAnswerVotes(answerId, 1)}
                          aria-label={`Upvote ${content}`}
                        >
                          +
                        </button>
                        <button
                          className="vote-btn vote-btn--down"
                          onClick={() => handleModifyAnswerVotes(answerId, -1)}
                          aria-label={`Downvote ${content}`}
                        >
                          −
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <footer className="poll-card__footer">
              <span className="poll-card__total">
                {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}
              </span>
              <span>Results update live</span>
            </footer>
          </section>
        );
      })}
    </main>
  </div>
);
