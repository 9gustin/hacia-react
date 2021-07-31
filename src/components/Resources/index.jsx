import React from 'react';

import Title from '../Title';
import Link from '../Link';

import mockResponse from '../../data/resources.json';

function Resources() {
  return (
    <section>
      {
        mockResponse.data.map(({ name, links }) => (
          <>
            <Title>{name}</Title>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  {link.name}
                  :
                  <Link to={link.url}>{link.url}</Link>
                </li>
              ))}
            </ul>
          </>
        ))
      }
    </section>
  );
}

export default Resources;
