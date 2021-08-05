import React from 'react';

import './styles.css';

const DATA = [
  {
    id: 'XX22-3ASD-SWQA-EDS1',
    text: 'The first true cats came into existence about 12 million years ago and were the Proailurus.',
  },
  {
    id: 'XX22-3ASD-SWQA-EDS2',
    text: 'Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.',
  },
  {
    id: 'XX22-3ASD-SWQA-EDS3',
    text: 'Baking chocolate is the most dangerous chocolate to your cat.',
  },
];

function List() {
  return (
    <ul className="list">
      {
        DATA.map(({ id, text }) => (
          <li key={id}>
            {text}
          </li>
        ))
      }
    </ul>
  );
}

export default List;
