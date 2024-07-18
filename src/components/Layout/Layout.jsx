import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.headerStyled}>
        <NavLink className={css.linkStyled} to="/">
          Home
        </NavLink>
        <NavLink className={css.linkStyled} to="/login">
          Login
        </NavLink>
        <NavLink className={css.linkStyled} to="/register">
          Register
        </NavLink>
        <NavLink className={css.linkStyled} to="/contacts">
          Contacts
        </NavLink>
      </header>
      <main className={css.mainStyled}>{children}</main>
    </div>
  );
};

export default Layout;
