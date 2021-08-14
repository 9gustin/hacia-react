import React from 'react';

import { THEMES, APPEARANCE } from './constants';

import './styles.css';

function Customize() {
  return (
    <>
      <p>🎨 Dale tu estilo</p>
      <p>Tema:</p>
      <ul className="options two-columns">
        {
          THEMES.map(({ name }) => (
            <li key={name}>
              <button className="option" type="button">
                {name}
              </button>
            </li>
          ))
        }
      </ul>
      <p>Color principal:</p>
      <ul className="options three-columns">
        {
          APPEARANCE.map(({ name }) => (
            <li key={name}>
              <button className="option" type="button">
                {name}
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Customize;
