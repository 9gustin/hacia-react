import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import List from './components/List';
import Customize from './components/Customize';

import './styles.css';

function App() {
  const [editing, setEditing] = useState(false);
  const [datos, setDatos] = useState([]);

  const agregarDato = (dato) => {
    setDatos([...datos, {
      id: nanoid(),
      text: dato,
    }]);
  };

  const toggleEditing = () => setEditing(!editing);

  const renderList = datos.length ? <List datos={datos} /> : (
    <p>
      Aqui veras tus datos una vez que los hayas creado
    </p>
  );

  return (
    <div className="container">
      <Header agregarDato={agregarDato} toggleEditing={toggleEditing} editing={editing} />
      {
        editing
          ? <Customize />
          : renderList
      }
    </div>
  );
}

export default App;
