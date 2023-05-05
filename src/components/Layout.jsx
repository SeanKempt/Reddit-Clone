import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({
  search,
  handleSearchInputChange,
  changeUserToCurrentUser,
}) => (
  <div className="pagewrapper">
    <Header
      search={search}
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
};

export default Layout;
