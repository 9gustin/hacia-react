import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Link(props) {
  const { children, to } = props;
  return (
    <a href={to}>
      {children}
    </a>
  );
}

Link.defaultProps = {
  children: null,
  to: '',
};

Link.propTypes = {
  children: React.ReactNode,
  to: PropTypes.string,
};

export default Link;
