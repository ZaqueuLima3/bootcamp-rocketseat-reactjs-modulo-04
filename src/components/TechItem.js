import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech , onDelete}) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">remover</button>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;