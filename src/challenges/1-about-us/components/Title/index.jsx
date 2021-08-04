import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Title(props) {
  const { isMainTitle, children } = props;

  if (isMainTitle) {
    return <h1 className="title">{children}</h1>;
  }

  return <h2 className="title">{children}</h2>;
}

Title.defaultProps = {
  isMainTitle: false,
  children: null,
};

Title.propTypes = {
  isMainTitle: PropTypes.bool,
  children: React.ReactNode,
};

export default Title;
