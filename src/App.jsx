import React from 'react';
import { Link } from 'wouter';

import { PATHS } from './components/Router/paths';

function App() {
  return (
    <div>
      <h1>
        Hacia React - All challenges
      </h1>
      <ul>
        <li>
          <Link to={PATHS.challenge1}>About Us</Link>
        </li>
        <li>
          <Link to={PATHS.challenge2}>List Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
