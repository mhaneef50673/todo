import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ProgressBar from '../../atoms/progress-bar';
import AnimatedImage from '../../atoms/animated-image';
import appLogo from './app_logo.png';
import { isAuthenticated } from '../../../utils';

import './loader.css';

// customHook
import useInterval from './utils';

const LoaderView = () => {

  const [percentage, changePercentage] = useState(0);
  isAuthenticated();
  
  useInterval(() => {
    if(percentage < 100) {
      changePercentage(percentage + 4);
    }
  }, 100);

  if(percentage >= 100) {
    if(isAuthenticated()) {
      return <Redirect to="/home" />;
    }

    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="app-logo-container">
        <AnimatedImage imageUrl={appLogo} extraClass="app-logo" shouldUseRippleEffect showRippleEffect={percentage > 10} />
      </div>
      <div className="progress-bar-container">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  )
}

export default LoaderView;