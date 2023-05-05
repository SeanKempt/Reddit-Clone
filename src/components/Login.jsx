import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { signInRegular } from '../helpers/firebase';

const Login = ({ changeUserToCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <main className="main login__wrapper">
      <h2>Seddit Login</h2>
      <div className="login__content">
        <form className="login__form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => handleEmailChange(e)}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
          <button
            type="button"
            className="login__form--button"
            onClick={() => {
              signInRegular(email, password);
              // todo need to move change user to current user somewhere else or make it async somehowg
              changeUserToCurrentUser();
            }}
          >
            Login
          </button>
        </form>
        <p className="login__registerbtn">
          Need an account?{' '}
          <Link to="/register">
            <button type="button" className="login__form--button">
              Register
            </button>
          </Link>
        </p>
      </div>
    </main>
  );
};

Login.propTypes = {
  changeUserToCurrentUser: PropTypes.func,
};

export default Login;
