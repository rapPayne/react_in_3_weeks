import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input id="username" value={username} onChange={e => setUsername(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login()}>Log in</button>
      <Link to="/register">Register</Link>
    </>
  );

  function login() {
    console.log(username, password)
    navigate('/');
  }
}