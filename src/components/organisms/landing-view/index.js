import React from 'react';
import LoaderView from '../../molecules/loader';
import './landing-view.css';

export default class LandingView extends React.Component {

  render () {
    return (
      <div className="landing-container">
        <div className="loader-container">
          <LoaderView />
        </div>
      </div>
    )
  }
}