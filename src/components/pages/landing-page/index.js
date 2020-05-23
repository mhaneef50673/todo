import React from 'react';
import LandingView from '../../organisms/landing-view';

const LandingPage = props => {
  return (
    <React.Fragment>
      <LandingView {...props} />
    </React.Fragment>
  );
};

export default LandingPage;
