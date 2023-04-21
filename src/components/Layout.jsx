import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ search, handleSearchInputChange }) => (
  <div className="pagewrapper">
    <Header search={search} handleSearch={handleSearchInputChange} />
    <Outlet />
  </div>
);

Layout.propTypes = {
  search: PropTypes.string,
  handleSearchInputChange: PropTypes.func,
};

export default Layout;
