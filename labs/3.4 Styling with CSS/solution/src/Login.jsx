import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { login as loginToServer } from './utilities';
export function Login(props) {
  const setUser = props.setUser;
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
    loginToServer(username, password)
      .then(user => (console.log(user), user))
      .then(user => setUser(user))
      .then(() => navigate('/cart'))
  }
}