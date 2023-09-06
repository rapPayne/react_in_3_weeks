import { Link, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { Login } from './Login';
import { Menu } from './Menu';
import { NotFound } from './NotFound';
import { Order } from './Order';
import { Orders } from './Orders';
import { Register } from './Register';

export function App() {
  return (
    <>
      <header id="pageHeader">
        <nav>
          <Link to="/">Dinner and a movie</Link>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart">Check out</Link>
          <Link to="/orders">Past orders</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path="/orders/:orderId" element={<Order />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}