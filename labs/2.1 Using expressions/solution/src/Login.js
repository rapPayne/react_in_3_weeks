import { useNavigate } from 'react-router-dom';
export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label>Password</label>
      <input />
      <button onClick={event => login(event)}>Log in</button>
      <a href="/register">Register</a>
    </>
  );
  function login() {
    navigate('/home');
  }
}