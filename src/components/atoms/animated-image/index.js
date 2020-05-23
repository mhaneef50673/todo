import React from 'react';
import Proptypes from 'prop-types';

import './animated-image.css';

const AnimatedImage = props => {

  return (
    <div className="image-container">
      <img src={props.imageUrl} className={props.extraClass} />
      <span className={`ripple ${props.showRippleEffect && 'rippleEffect'}`} />
    </div>
  )
};

AnimatedImage.defaultProps = {
  imageUrl: '',
  extraClass: '',
  showRippleEffect: false,
  shouldUseRippleEffect: false,
};

AnimatedImage.propTypes = {
  imageUrl: Proptypes.string,
  extraClass: Proptypes.string,
  showRippleEffect: Proptypes.bool,
  shouldUseRippleEffect: Proptypes.bool,
}

export default AnimatedImage;