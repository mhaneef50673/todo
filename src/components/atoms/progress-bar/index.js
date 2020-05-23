import React from 'react';
import PropTypes from 'prop-types';
import './progress-bar.css';

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${props.percentage}%` }} />
      {
        (props.percentage < 100 && props.percentage > 0) && (
          <div className="loadingText">
            <span>Loading...</span>
          </div>
        )
      }
    </div>
  )
};

ProgressBar.defaultProps = {
  percentage: 0,
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar;