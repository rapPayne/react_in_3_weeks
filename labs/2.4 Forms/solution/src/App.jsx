import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getNextCartItemId } from './utilities';
import { Cart } from './Cart';
import { Login } from './Login';
import { Menu } from './Menu';
import { NotFound } from './NotFound';
import { Order } from './Order';
import { Orders } from './Orders';
import { Register } from './Register';

export function App() {
  const [cart, setCart] = useState([]); // <-- Add this
  const [user, setUser] = useState(); // <-- Add this
  console.log({ cart });
  useEffect(() => {
    addToCart({
      id: 17,
      name: "Test item 1",
      category: "entrees",
      price: 10.54,
    });
  }, []);
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