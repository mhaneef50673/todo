import React from 'react';
import Landing from '../../organisms/landing';

const LandingPage = props => {
  return (
    <React.Fragment>
      <Landing {...props} />
    </React.Fragment>
  );
};

export default LandingPage;
