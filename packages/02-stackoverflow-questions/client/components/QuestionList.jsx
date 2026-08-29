import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import TagsList from './TagsList';

const QuestionListItem = ({ title, tags, question_id }) => (
    <div className='question-card'>
        <h3>{title}</h3>
        <div className='tags'>
            <TagsList tags={tags} />
        </div>
        <div>
            <Link to={`/questions/${question_id}`}>
                <button className='more-btn'>More Info!</button>
            </Link>
        </div>
    </div>
);

const QuestionList = ({ questions }) => (
    <div>
        {questions ?
            <div className='masonry-grid'>
                {questions.map(
                    questions =>
                        <QuestionListItem
                            key={questions.question_id}
                            {...questions}
                        />
                )}
            </div> :
            <div className='loading-text'>
                Loading questions ...
            </div>
        }
    </div>
)

const mapStateToProps = ({ questions }) => ({
    questions
});

export default connect(mapStateToProps)(QuestionList);