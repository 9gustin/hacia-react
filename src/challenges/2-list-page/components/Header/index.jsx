import React from 'react';

import './styles.css';

function Header() {
  const CAT = {
    default: '🐱',
    error: '😾',
    correct: '😸',
  };

  return (
    <header className="header">
      <div className="status-emoji">{CAT.default}</div>
      <h1>Cat Facts</h1>
      <form className="form">
        <input type="text" placeholder="Add your cat fact" />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
