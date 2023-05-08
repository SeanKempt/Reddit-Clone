import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sedditlogo from '../images/seddit-logo.png';

const Header = ({ search, handleSearch, handleSignOut }) => (
  <header className="header">
    <Link to="/">
      <img className="header__logo" src={sedditlogo} alt="megaphone" />
      <h1 className="header__title">Seddit</h1>
    </Link>
    <form className="header__form">
      <input
        type="search"
        name="search"
        value={search}
        placeholder="Search Seddit"
        onChange={handleSearch}
        className="header__search"
      />
    </form>
    <Link to="/login">
      <button type="button">Sign in</button>
    </Link>
    <button
      type="button"
      onClick={() => {
        handleSignOut();
      }}
    >
      Sign Out
    </button>
  </header>
);

Header.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  handleSignOut: PropTypes.func,
};

export default Header;
