import React from 'react';

const Note = ({ note }) => {
    return (
        <div className={`post-it ${note.important ? 'important' : ''}`}>

            <h2>{note.title || 'No Title'}</h2>
            <p>{note.description}</p>
        </div>
    );
};

export default Note;
