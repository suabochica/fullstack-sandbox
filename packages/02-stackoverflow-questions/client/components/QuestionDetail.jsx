import React from 'react';
import Markdown from 'react-markdown';
import { connect } from 'react-redux';

import TagsList from './TagsList';

export const QuestionDetailDisplay = ({ title, body, answer_count, tags }) => (
    <div className='question-detail'>
        {body ?
            <div>
                <h3 className='detail-title'>{title}</h3>
                <div className='detail-tags'>
                    <TagsList tags={tags} />
                </div>
                <div className='detail-body'>
                    <Markdown source={body} />
                </div>
                <div className='detail-answers'>
                    {answer_count} Answers
                </div>
            </div> :
            <div className='loading-text'>
                <h4>Loading Question ...</h4>
            </div>
        }
    </div>
);

export const mapStateToProps = (state, ownProps) => ({
    ...state.questions.find(({ question_id }) => question_id == ownProps.question_id)
});

export default connect(mapStateToProps)(QuestionDetailDisplay);