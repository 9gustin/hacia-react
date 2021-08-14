/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

import './styles.css';

function Header({ agregarDato, toggleEditing, editing }) {
  const [status, setStatus] = useState('default');
  const inputRef = useRef();

  const CAT = {
    default: '🐱',
    error: '😾',
    correct: '😸',
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value.trim() !== '') {
      agregarDato(inputRef.current.value.trim());
      inputRef.current.value = null;
      setStatus('correct');
    } else {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('default');
    }, 3000);
  };

  return (
    <header className="header">
      <div className="status-emoji">{CAT[status]}</div>
      <h1>Cat Facts</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agrega tu dato"
          ref={inputRef}
          className={status}
          disabled={editing}
        />
        <button type="submit" disabled={editing}>Agregar</button>
      </form>
      <button className="toggle-btn" type="button" onClick={toggleEditing}>
        {editing ? 'Continuar creando datos' : 'Editar tema'}
      </button>
    </header>
  );
}

export default Header;
