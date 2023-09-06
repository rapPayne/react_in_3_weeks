import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="password">Password</label>
      <input id="password" />
      <button onClick={() => login()}>Log in</button>
      <Link to="/register">Register</Link>
    </>
  );

  function login() {
    navigate('/');
  }
}