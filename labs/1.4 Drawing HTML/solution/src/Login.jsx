export function Login() {
  console.log("Login");
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="password">Password</label>
      <input id="password" />
      <button>Log in</button>
      <a href="/register">Register</a>
    </>
  );
}