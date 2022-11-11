export function Login() {
  console.log("Login");
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
  function login(evt) {
    evt.preventDefault()
    console.log("Logging in", evt)
  }
}