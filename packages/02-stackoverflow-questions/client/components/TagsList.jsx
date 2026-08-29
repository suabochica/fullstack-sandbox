import React from 'react';

export default ({ tags }) => (
    <div className='tags'>
        {tags.map(tag => <span className='tag' key={tag}>{tag}</span>)}
    </div>
);
