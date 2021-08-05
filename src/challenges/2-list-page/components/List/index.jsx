/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './styles.css';

function List({ datos }) {
  return (
    <ul className="list">
      {
        datos.map(({ id, text }) => (
          <li key={id}>
            {text}
          </li>
        ))
      }
    </ul>
  );
}

export default List;
