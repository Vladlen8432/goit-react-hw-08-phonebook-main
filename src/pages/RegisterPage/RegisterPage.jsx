// import { useDispatch } from "react-redux";

const RegisterPage = () => {
  // const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    console.log('name', name);
    console.log('email', email);
    console.log('password', password);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name:</p>
        <input type="text" placeholder="John Doe" required name="userName" />
      </label>

      <label>
        <p>Email:</p>
        <input
          type="text"
          placeholder="hotmail@some.com"
          required
          name="userEmail"
        />
      </label>

      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="********"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
