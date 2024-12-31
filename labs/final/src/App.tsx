import { Context, createContext } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { NotFound } from './components/NotFound';
import { Order } from './components/Order';
import { Orders } from './components/Orders';
import { Login } from './components/Login';
import { Register } from './components/Register';
import './site.css';
import { MenuItem } from './types/MenuItem';
import { useState } from 'react';
import { CartItem } from './types/CartItem';
import { User } from './types/User';
import { getNextCartItemId } from './data/utilities';
//import { SideBySide } from './components/SideBySide';

export const userContext: Context<User> = createContext<User>({});

export function App() {
  const [cart, setCart] = useState<Array<CartItem>>([]);
  const [user, setUser] = useState<User>({});
  return (
    <userContext.Provider value={user}>
      <header id="pageHeader">
        <Toaster position="top-right" reverseOrder={true} />
        <nav>
          <Link to="/">Dinner and a movie</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart">Check out</Link>
          <Link to="/orders">Past orders</Link>
          {user?.token ? null : <Link to="/login">Log in</Link>}
          {user?.token && <Link to="#" onClick={() => setUser({})}>Welcome {user.first} (Log out)</Link>}
        </nav>
        {/* <pre>
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={
            <SideBySide>
              <Menu addToCart={addToCart} />
              <Cart cart={cart} changeCartItem={changeCartItem} removeFromCart={removeFromCart} />
            </SideBySide>} /> */}
          <Route path="/" element={<Menu addToCart={addToCart} />} />
          <Route path="/menu" element={<Navigate to="/" replace={true} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} changeCartItem={changeCartItem} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<Order />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </userContext.Provider>
  );
  function addToCart(menuItem: MenuItem) {
    const cartItem: CartItem = {
      ...menuItem,
      itemId: menuItem.id,
      id: getNextCartItemId(cart),
    } as CartItem;
    setCart([...cart, cartItem]);
    toast.success(`${menuItem.name} put in your cart`)
  }
  function removeFromCart(cartItem: CartItem) {
    setCart(cart.filter(oi => oi !== cartItem));
    toast.success(`${cartItem.name} removed`)
  }
  function changeCartItem(newCartItem: CartItem) {
    const newCart = cart.map(ci => ci.id === newCartItem.id ? newCartItem : ci);
    setCart(newCart);
  }
}

