import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { register as registerOnServer } from '../data/authentication';
interface Props {
  setUser: Function
}

export const Register = ({ setUser }: Props): JSX.Element => {
  const id = useId();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [PAN, setPAN] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  return (
    <>
      <h1>Register</h1>

      <div>
        <label htmlFor={`username${id}`}>Username</label>
        <input id={`username${id}`} onChange={e => setUsername(e.target.value)} value={username} />
      </div>

      <div>
        <label htmlFor={`password${id}`}>Password</label>
        <input id={`password${id}`} onChange={e => setPassword(e.target.value)} value={password} />
      </div>

      <div>
        <label htmlFor={`first${id}`}>First</label>
        <input id={`first${id}`} onChange={e => setFirst(e.target.value)} value={first} />
      </div>

      <div>
        <label htmlFor={`last${id}`}>Last</label>
        <input id={`last${id}`} onChange={e => setLast(e.target.value)} value={last} />
      </div>

      <div>
        <label htmlFor={`email${id}`}>Email</label>
        <input id={`email${id}`} onChange={e => setEmail(e.target.value)} value={email} />
      </div>

      <div>
        <label htmlFor={`phone${id}`}>Phone</label>
        <input id={`phone${id}`} onChange={e => setPhone(e.target.value)} value={phone} />
      </div>

      <div>
        <label htmlFor={`imageUrl${id}`}>ImageUrl</label>
        <input id={`imageUrl${id}`} onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
      </div>

      <div>
        <label htmlFor={`PAN${id}`}>PAN</label>
        <input id={`PAN${id}`} onChange={e => setPAN(e.target.value)} value={PAN} />
      </div>

      <div>
        <label htmlFor={`expiryMonth${id}`}>Expiry Month</label>
        <input id={`expiryMonth${id}`} onChange={e => setExpiryMonth(e.target.value)} value={expiryMonth} />
      </div>

      <div>
        <label htmlFor={`expiryYear${id}`}>Expiry Year</label>
        <input id={`expiryYear${id}`} onChange={e => setExpiryYear(e.target.value)} value={expiryYear} />
      </div>

      <button onClick={register}>Register</button>
      <Link to="/login">Login</Link>
    </>
  )

  function register() {
    const user = { username, password, first, last, phone, email, imageUrl, creditCard: { PAN, expiryMonth, expiryYear } }
    registerOnServer(user)
      .then(user => setUser(user))
      .then(() => toast.success(`New user was created`))
      .catch(err => toast.error(`Can't log in. ${err.message}`))
  }
}