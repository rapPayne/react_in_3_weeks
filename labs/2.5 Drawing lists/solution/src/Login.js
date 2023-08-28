import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <label>Password</label>
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={event => login(event)}>Log in</button>
      <a href="/register">Register</a>
    </>
  );
  function login() {
    navigate('/home');
  }
}