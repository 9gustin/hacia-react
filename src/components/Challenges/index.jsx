import React from 'react';

import Title from '../Title';

import mockResponse from '../../data/challenges.json';
import Link from '../Link';

function Challenges() {
  return (
    <section>
      <Title>
        Challenges
      </Title>
      <ul>
        {mockResponse.data.map((challenge) => (
          <li key={challenge.name}>
            <Link to={challenge.url}>
              {challenge.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Challenges;
