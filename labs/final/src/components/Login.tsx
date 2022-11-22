import { useState, useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login as loginToServer } from '../data/authentication';
interface Props {
  setUser: Function
}
export const Login = ({ setUser }: Props) => {
  const navigate = useNavigate();
  const id = useId();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Login</h1>
      <Link to="/register">Register</Link>
      <div>
        <label htmlFor={`username${id}`}>Username</label>
        <input id={`username${id}`} onChange={e => setUsername(e.target.value)} value={username} />
      </div>
      <div>
        <label htmlFor={`password${id}`}>Password</label>
        <input id={`password${id}`} onChange={e => setPassword(e.target.value)} value={password} />
      </div>
      <button onClick={login}>Log in</button>
    </>
  )

  function login() {
    loginToServer(username, password)
      .then(user => setUser(user))
      .then(() => navigate('/cart'))
      .catch(err => toast.error(`Can't log in. ${err.message}`))
  }
}