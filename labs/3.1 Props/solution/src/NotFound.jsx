import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <>
      <h1>404 - Not Found</h1>
      <p>Maybe try one of these routes instead.</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/orders">Past orders</Link>
        </li>
      </ul>
    </>
  )
}