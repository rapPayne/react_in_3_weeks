import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getNextCartItemId } from './utilities';
import { Cart } from './Cart';
import { Login } from './Login';
import { Menu } from './Menu';
import { NotFound } from './NotFound';
import { Order } from './Order';
import { Orders } from './Orders';
import { Register } from './Register';
import "./site.css";

export function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState();
  return (
    <>
      <header id="pageHeader">
        <nav>
          <Link to="/">Dinner and a movie</Link>
          {user ? null : <Link to="/login">Log in</Link>}
          <Link to="/register">Register</Link>
          <Link to="/cart">Check out</Link>
          <Link to="/orders">Past orders</Link>
          {user && <Link to="#" onClick={() => setUser()}>Log out</Link>}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Menu addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} user={user} />} />
          <Route path='/orders' element={<Orders />} />
          <Route path="/orders/:orderId" element={<Order />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );

  // Converts a menuItem to a cartItem and adds it to the cart.
  function addToCart(menuItem) {
    const cartItem = {
      ...menuItem,
      itemId: menuItem.id,
      id: getNextCartItemId(cart),
    };
    setCart([...cart, cartItem]);
  }
  // Removes the provided item from the cart
  function removeFromCart(cartItem) {
    setCart(cart.filter(oi => oi !== cartItem));
  }
  // Replaces an item in the cart. 
  function changeCartItem(newCartItem) {
    const newCart = cart.map(ci => ci.id === newCartItem.id ? newCartItem : ci);
    setCart(newCart);
  }
}