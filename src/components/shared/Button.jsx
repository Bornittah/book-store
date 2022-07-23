import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    className, value, id, onClick,
  } = props;
  return (
    <button className={className} type="submit" id={id} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  className: null,
  value: null,
  id: null,
  onClick: null,
};
Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
