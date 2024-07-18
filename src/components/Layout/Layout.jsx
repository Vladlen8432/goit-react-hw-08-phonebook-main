import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
