import React, { useState } from 'react';
import './index.css'; 

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) {
            alert('La descripción es obligatoria');
            return;
        }
        addNote({
            title,
            description,
            important,
            id: Date.now()
        });
        setTitle('');
        setDescription('');
        setImportant(false);
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={important}
                    onChange={(e) => setImportant(e.target.checked)}
                />
                
            </label>
            <button type="submit">Agregar</button>
        </form>
    );
};

export default NoteForm;
