import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, id, onClick } = props;
  return (
    <button className="btn" type="submit" id={id} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  value: null,
  id: null,
  onClick: null,
};
Button.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
