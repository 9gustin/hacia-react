/* eslint-disable react/prop-types */
import React from 'react';

import { THEMES, APPEARANCE } from './constants';

import './styles.css';

function Customize({ handleChangeTheme, handleChangeAppearance }) {
  return (
    <>
      <p>🎨 Dale tu estilo</p>
      <p>Tema:</p>
      <ul className="options two-columns">
        {
          THEMES.map(({ name, className }) => (
            <li key={name}>
              <button
                className="option"
                type="button"
                onClick={() => handleChangeTheme(className)}
              >
                {name}
              </button>
            </li>
          ))
        }
      </ul>
      <p>Color principal:</p>
      <ul className="options three-columns">
        {
          APPEARANCE.map(({ name, className }) => (
            <li key={name}>
              <button
                className="option"
                type="button"
                onClick={() => handleChangeAppearance(className)}
              >
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
