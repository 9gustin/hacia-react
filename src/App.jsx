import React from 'react';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import Link from './components/Link';
import Meetings from './components/Meetings';
import About from './components/About';
import Goal from './components/Goal';
import Members from './components/Members';
import Resources from './components/Resources';
import Challenges from './components/Challenges';

import './index.css';

function App() {
  return (
    <div className="app">
      <Title isMainTitle>HaciaReact ⚛</Title>
      <Paragraph>
        Basado en el routemap de React:
        <Link to="https://roadmap.sh/react">
          https://roadmap.sh/react
        </Link>
      </Paragraph>
      <Meetings />
      <About />
      <Goal />
      <Members />
      <Resources />
      <Challenges />
    </div>
  );
}

export default App;
