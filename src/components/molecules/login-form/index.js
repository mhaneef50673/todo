import React from 'react';
import './login-form.css';
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
            <div className="input-container">
              {
                error && (
                  <div className="error">
                    <span>Invalid username/password</span>
                  </div>
                )
              }
              <span className="fa-stack fa-xs username">
                <i className="fa fa-circle fa-stack-2x icon-background1"></i>
                <i className="fa fa-user fa-stack-1x"></i>
              </span>
              <input name="userid" value={userid} onChange={e => this.onInputChange(e, 'userid')} required className="input-field" placeholder="User Id" />
            </div>
            <div className="input-container">
              <span className="fa-stack fa-xs username">
                <i className="fa fa-circle fa-stack-2x icon-background1"></i>
                <i className="fa fa-key fa-stack-1x" data-fa-transform="rotate-45"></i>
              </span>
              <input name="password" type="password" value={password} onChange={e => this.onInputChange(e, 'password')} required className="input-field" placeholder="Password" />
            </div>
          </div>
          <div className="center">
            {
              isAuthenticating ? (
                <i className="fas fa-spinner"></i>
              ) : (
                <i className="fas fa-arrow-right"></i>
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