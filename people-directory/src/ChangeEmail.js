import { useState } from 'react'
export function ChangeEmail(props) {
  //let email = props.email;
  let [email, setEmail] = useState(props.email);
  return (
    <>
      <h1>Change email</h1>
      <p>{email}</p>
      <label htmlFor="email">New email address</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" />
      <button onClick={() => { }}>Save</button>
    </>
  )
}