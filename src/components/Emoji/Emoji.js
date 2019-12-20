import React from 'react';
import PropTypes from 'prop-types';

const Emoji = props => {
  const { symbol, label } = props;
  return (
    <span role="img" aria-label={label ? label : 'Emoji'}>
      {symbol}
    </span>
  );
};

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Emoji;
