import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginToServer } from './utilities';
export function Login(props) {
  const setUser = props.setUser;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input value={username} onChange={e => setUsername(e.target.value)} id="username" />
      <label>Password</label>
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={event => login(event)}>Log in</button>
      <a href="/register">Register</a>
    </>
  );
  function login() {
    loginToServer(username, password)
      .then(user => setUser(user))
      .then(() => navigate('/cart'))
  }
}