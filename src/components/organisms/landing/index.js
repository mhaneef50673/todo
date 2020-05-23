import React from 'react';
import LoaderView from '../../molecules/loader';
import './landing.css';

export default class Landing extends React.Component {

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