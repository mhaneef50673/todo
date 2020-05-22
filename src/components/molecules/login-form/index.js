import React from 'react';
import './login-form.css';
import logo from './logo.jpg';


export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <form>
          <div className="input-field-group">
            <div className="input-container">
              <span class="fa-stack fa-xs username">
                <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                <i class="fa fa-user fa-stack-1x"></i>
              </span>
              <input name="userid" className="input-field" placeholder="User Id" />
            </div>
            <div className="input-container">
              <span class="fa-stack fa-xs username">
                <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                <i class="fa fa-key fa-stack-1x" data-fa-transform="rotate-45"></i>
              </span>
              <input name="password" className="input-field" placeholder="Password" />
            </div>
          </div>
          <div className="center">
            <i className="fas fa-arrow-right"></i>
            <input type="submit" value="Login" className="login-btn" />
          </div>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </form>
      </div>
    );
  }
}