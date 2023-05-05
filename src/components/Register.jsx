import { useState } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../helpers/firebase';

const Register = ({ changeUserToCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="main register__wrapper">
      <h2>Register for Seddit</h2>
      <div className="register__content">
        <form className="register__form">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />

          <label htmlFor="pass">Enter your password:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
          <button
            type="button"
            className="register__form--button"
            onClick={() => {
              createUser(email, password);
              changeUserToCurrentUser();
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
};

Register.propTypes = {
  changeUserToCurrentUser: PropTypes.func,
};

export default Register;
