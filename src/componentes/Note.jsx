import React from 'react';
import './styles/Note.css';

const Note = ({ title, description, color }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="note-title">{title}</div>
      <div className="note-content">{description}</div>
    </div>
  );
};

export default Note;
