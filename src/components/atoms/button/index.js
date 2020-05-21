import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ buttonText, clickHandler, type}) => {
  return(
    <button className={type} type="button" onClick={clickHandler}>
      {buttonText}
    </button>
  )
};

Button.defaultProps = {
  action: () => {},
  type: 'primary',
}

Button.propTypes = {
  buttonText: PropTypes.string,
  action: PropTypes.func,
};

export default Button;