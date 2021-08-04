import React from 'react';

import Title from '../Title';
import Link from '../Link';

import mockResponse from '../../data/members.json';

function Members() {
  return (
    <section>
      <Title>
        👋🏽 Integrantes
      </Title>
      <ul>
        {
        mockResponse.data.map((user) => (
          <li key={user.githubUser}>
            {user.name}
            (
            <Link to={user.url}>
              @
              {user.githubUser}
            </Link>
            )
          </li>
        ))
      }
      </ul>
    </section>
  );
}

export default Members;
