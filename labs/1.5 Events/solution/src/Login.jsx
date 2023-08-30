export function Login() {
  console.log("Login");
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="password">Password</label>
      <input id="password" />
      <button onClick={() => login()}>Log in</button>
      <a href="/register">Register</a>
    </>
  );

  function login() {
    console.log("Logging in")
  }
}