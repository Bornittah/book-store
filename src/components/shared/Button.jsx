import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value, onClick } = props;
  return (
    <button type="submit" value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  value: null,
  onClick: null,
};
Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
