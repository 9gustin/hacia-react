import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import List from './components/List';
import Customize from './components/Customize';

import './styles.css';

function App() {
  const [editing, setEditing] = useState(false);
  const [datos, setDatos] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('SELECTED_THEME'));
  const [appearance, setAppearance] = useState(localStorage.getItem('SELECTED_APPEARANCE'));

  const handleChangeAppearance = (selectedClass) => {
    if (selectedClass) {
      setAppearance(selectedClass);
    } else {
      setAppearance(null);
    }
  };

  const handleChangeTheme = (selectedClass) => {
    if (selectedClass) {
      setTheme(selectedClass);
    } else {
      setTheme(null);
    }
  };

  useEffect(() => {
    document.querySelector('body').classList = '';

    if (theme) {
      document.querySelector('body').classList.add(theme);
    }
    if (appearance) {
      document.querySelector('body').classList.add(appearance);
    }
  }, [theme, appearance]);

  useEffect(() => {
    localStorage.setItem('SELECTED_APPEARANCE', appearance);
    localStorage.setItem('SELECTED_THEME', theme);
  }, [theme, appearance]);

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
          ? (
            <Customize
              handleChangeTheme={handleChangeTheme}
              handleChangeAppearance={handleChangeAppearance}
            />
          )
          : renderList
      }
    </div>
  );
}

export default App;
