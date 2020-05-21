import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ buttonText, clickHandler, extraClass}) => {
  return(
    <button className={extraClass} type="button" onClick={clickHandler}>
      {buttonText}
    </button>
  )
};

Button.defaultProps = {
  action: () => {},
  extraClass: 'primary',
}

Button.propTypes = {
  buttonText: PropTypes.string,
  action: PropTypes.func,
  extraClass: PropTypes.string,
};

export default Button;