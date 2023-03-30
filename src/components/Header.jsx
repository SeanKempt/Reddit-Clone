import sedditlogo from '../images/seddit-logo.png';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={sedditlogo} alt="megaphone" />
    <h1 className="header__title">Seddit</h1>
    <form className="header__form">
      <input
        type="search"
        name="search"
        value="Search Seddit"
        className="header__search"
      />
    </form>
  </header>
);

export default Header;
