import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import List from './components/List';

import './styles.css';

function App() {
  const [datos, setDatos] = useState([]);

  const agregarDato = (dato) => {
    setDatos([...datos, {
      id: nanoid(),
      text: dato,
    }]);
  };

  return (
    <div className="container">
      <Header agregarDato={agregarDato} />
      <List datos={datos} />
    </div>
  );
}

export default App;
