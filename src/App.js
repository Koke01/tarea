import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import './index.css'; 

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    const addNote = (note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    return (
        <div className="container">
            <h1>Notas Adhesivas</h1>
            <NoteForm addNote={addNote} />
            <div className="note-container">
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};

export default App;
