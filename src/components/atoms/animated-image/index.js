import React from 'react';
import Proptypes from 'prop-types';

import './animated-image.css';

const AnimatedImage = props => {

  return (
    <div className="image-container">
      <img src={props.imageUrl} className={props.extraClass} />
    </div>
  )
};

AnimatedImage.defaultProps = {
  imageUrl: '',
  extraClass: '',
};

AnimatedImage.propTypes = {
  imageUrl: Proptypes.string,
  extraClass: Proptypes.string,
}

export default AnimatedImage;