import React from 'react';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <Title>HaciaReact ⚛</Title>
      <Paragraph>
        Basado en el routemap de React:
        <Link to="https://roadmap.sh/react">
          https://roadmap.sh/react
        </Link>
      </Paragraph>
    </div>
  );
}

export default App;
