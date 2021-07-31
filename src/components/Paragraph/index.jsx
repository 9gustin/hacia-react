import React from 'react';

import './styles.css';

function Paragraph(props) {
  const { children } = props;
  return (
    <p className="paragraph">
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  children: null,
};

Paragraph.propTypes = {
  children: React.ReactNode,
};

export default Paragraph;
