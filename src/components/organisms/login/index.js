import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../molecules/login-form';
import { login } from '../../../store/actions/loginAction';
import { isAuthenticated } from '../../../utils';
import './login.css';

const mapStateToProps = state => ({
  token: state.loginReducer.token || '',
  error: state.loginReducer.error || false,
  isAuthenticating: state.loginReducer.isAuthenticating || false,
});

class Login extends React.Component {

  render() {

    if(isAuthenticated()) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="login-container">
        <LoginForm {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { login } )(Login);