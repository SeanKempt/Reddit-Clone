import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({
  search,
  handleSearchInputChange,
  changeUserToCurrentUser,
  handleSignOut,
}) => (
  <div className="pagewrapper">
    <Header
      search={search}
      handleSignOut={handleSignOut}
      handleSearch={handleSearchInputChange}
      changeUserToCurrentUser={changeUserToCurrentUser}
    />
    <Outlet />
  </div>
);

Layout.propTypes = {
  search: PropTypes.string,
  handleSearchInputChange: PropTypes.func,
  changeUserToCurrentUser: PropTypes.func,
  handleSignOut: PropTypes.func,
};

export default Layout;
