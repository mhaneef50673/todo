import React from 'react';
import './login-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSpinner, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';


export default class LoginForm extends React.Component {

  state = {
    userid: 'eve.holt@reqres.in',
    password: 'cityslicka',
  }

  onSubmit = event => {
    const {
      userid,
      password,
    } = this.state;
    const { login, history } = this.props;
    event.preventDefault();

    login(userid, password, history);
  }

  onInputChange = (e, inputName) => {
    this.setState({
      [inputName]: e.target.value,
    })
  }

  render() {
    const {
      userid,
      password,
    } = this.state;
    const {
      error,
      isAuthenticating,
    } = this.props;

    return (
      <div className="login-form">
        <form onSubmit={this.onSubmit}>
          <div className="input-field-group">
            {
              error && (
                <div className="error">
                  <span>Invalid username/password</span>
                </div>
              )
            }
            <div className="input-container">
              <span className="username">
                <a><FontAwesomeIcon className="fa-user" icon={faUser} /></a>
              </span>
              <input name="userid" value={userid} onChange={e => this.onInputChange(e, 'userid')} required className="input-field" placeholder="User Id" />
            </div>
            <div className="input-container">
              <span className="username">
                <a><FontAwesomeIcon className="fa-key" icon={faKey} /></a>
              </span>
              <input name="password" type="password" value={password} onChange={e => this.onInputChange(e, 'password')} required className="input-field" placeholder="Password" />
            </div>
          </div>
          <div className="center">
            {
              isAuthenticating ? (
                <FontAwesomeIcon icon={faSpinner} className="centered-icon" />
              ) : (
                  <FontAwesomeIcon icon={faArrowRight} className="centered-icon" />
                )
            }
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