import React from 'react';
import LoginForm from '../../molecules/login-form';
import './login.css';

export default class LOgin extends React.Component {
  render() {
    return (
      <div className="login-container">
        <LoginForm {...this.props} />
      </div>
    );
  }
}