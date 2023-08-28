import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTax, getCartTotal, toCurrency, placeOrder as placeOrderToServer } from './utilities';

export function Cart(props) {
  const cart = props.cart;
  const user = props.user;
  const removeFromCart = props.removeFromCart;
  const navigate = useNavigate();
  console.log(user)
  const [tip, setTip] = useState(0);
  const [pan, setPan] = useState(user?.creditCard?.PAN);
  const [expiryMonth, setExpiryMonth] = useState(user?.creditCard?.expiryMonth);
  const [expiryYear, setExpiryYear] = useState(user?.creditCard?.expiryYear);
  const [cvv, setCvv] = useState(0);
  const [location, setLocation] = useState("");

  return (
    <>
      <h1>Cart</h1>
      {user.token ? null : <button onClick={() => navigate('/login')}>Log in</button>}
      {cart?.map(cartItem => (
        <section className="cartItem" key={cartItem.id}>
          <p>{cartItem.name}</p>
          <p>{cartItem.category}</p>
          <p>{cartItem.price}</p>
          <p>for: <input /></p>
          <label>Special requests</label>
          <textarea></textarea>
          <button onClick={() => removeFromCart(cartItem)}>Remove</button>
        </section>
      ))}
      <section>
        <p>Tax: {toCurrency(calculateTax(getCartTotal(cart)))}</p>
        <p>Total: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)))}</p>
        <div>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></div>
        <p>Amount to charge: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)) + (tip || 0))}</p>
      </section>
      <section>
        <label>Deliver to...</label>
        <input value={location} onChange={e => setLocation(e.target.value)} />
      </section>
      <section>
        <h2>Payment</h2>
        <h3>Credit card</h3>
        <label htmlFor="pan">Number</label>
        <input value={pan} onChange={e => setPan(+e.target.value)} id="pan" required />
        <label htmlFor="expiryMonth">Month</label>
        <input value={expiryMonth} onChange={e => setExpiryMonth(+e.target.value)} type="number" id="expiryMonth" required />
        <label htmlFor="expiryYear">Year</label>
        <input value={expiryYear} onChange={e => setExpiryYear(+e.target.value)} type="number" id="expiryYear" required />
        <label htmlFor="cvv">CVV</label>
        <input value={cvv} onChange={e => setCvv(+e.target.value)} id="cvv" required />
        <button onClick={() => placeOrder()}>Place order</button>
      </section>
    </>
  );
  function placeOrder() {
    console.log("Placing the order.", pan, expiryMonth, expiryYear, cvv)
  }
}