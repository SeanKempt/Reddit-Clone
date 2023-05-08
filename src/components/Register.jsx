import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUser, updateUser } from '../helpers/firebase';

const Register = ({ changeUserToCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <main className="main register__wrapper">
      <h2>Register for Seddit</h2>
      <div className="register__content">
        <form className="register__form">
          <label htmlFor="username">Enter your username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => handleUsernameChange(e)}
          />

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
            // async function because without it the username wouldn't update during user creation
            onClick={async () => {
              await createUser(email, password);
              await updateUser(username);
              changeUserToCurrentUser();
              navigate('/');
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
