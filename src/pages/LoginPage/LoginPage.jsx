import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authReducer';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <form className={css.formStyled} onSubmit={onSubmit}>
      <label className={css.labelStyled}>
        <p className={css.labelName}>Email:</p>
        <input
          className={css.inputStyled}
          type="email"
          placeholder="hotmail@some.com"
          required
          name="userEmail"
        />
      </label>

      <label className={css.labelStyled}>
        <p className={css.labelName}>Password:</p>
        <input
          className={css.inputStyled}
          type="password"
          placeholder="********"
          required
          name="userPassword"
          minLength={6}
        />
      </label>
      <button className={css.buttonStyled} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
