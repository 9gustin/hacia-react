/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

import './styles.css';

function Header({ agregarDato }) {
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

  // if (status === 'default') {
  //   setStatus('error');
  // }
  // if (status === 'correct') {
  //   agregarDato(inputRef.current.value.trim());
  //   setStatus('default');
  //   inputRef.current.value = null;
  // }
  // const handleChange = () => {
  //   if (inputRef.current.value.trim() !== '') {
  //     setStatus('correct');
  //   } else {
  //     setStatus('error');
  //   }
  // };

  return (
    <header className="header">
      <div className="status-emoji">{CAT[status]}</div>
      <h1>Cat Facts</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your cat fact"
          ref={inputRef}
          className={status}
          // onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
