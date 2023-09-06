import { useState } from 'react';
import { calculateTax, getCartTotal, toCurrency, placeOrder as placeOrderToServer } from './utilities';

export function Cart() {
  const [tip, setTip] = useState(0);
  const [pan, setPan] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [expiryMonth, setExpiryMonth] = useState(0);
  const [expiryYear, setExpiryYear] = useState(0);
  const cart = [{
    id: 1,
    name: "Garden salad",
    description: "Meal-sized portion. garden greens, tomatoes, peppers, celery, carrots",
    category: "entrees",
    price: 6.54,
    imageUrl: "images/salad_1.jpg",
    available: true,
    itemId: 300
  }];
  const cartItem = cart[0];
  return (
    <>
      <h1>Cart</h1>
      <section className="cartItem">
        <h2>{cartItem.name}</h2>
        <p>{cartItem.category}</p>
        <p>{cartItem.price}</p>
        <label>For</label>
        <input />
        <label>Special requests</label>
        <textarea></textarea>
        <button>Remove</button>
      </section>
      <section>
        <p>Tax: {toCurrency(calculateTax(getCartTotal(cart)))}</p>
        <p>Total: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)))}</p>
        <div>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></div>
        <p>Amount to charge: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)) + (tip || 0))}</p>
      </section>
      <section>
        <label>Deliver to...</label>
        <input />
      </section>
      <section>
        <h2>Payment</h2>
        <h3>Credit card</h3>
        <label htmlFor="pan">Number</label>
        <input id="pan" value={pan} onChange={e => setPan(e.target.value)} required />
        <label htmlFor="expiryMonth">Month</label>
        <input type="number" id="expiryMonth" value={expiryMonth} onChange={e => setExpiryMonth(e.target.value)} required />
        <label htmlFor="expiryYear">Year</label>
        <input type="number" id="expiryYear" value={expiryYear} onChange={e => setExpiryYear(e.target.value)} required />
        <label htmlFor="cvv">CVV</label>
        <input id="cvv" value={cvv} onChange={e => setCvv(e.target.value)} required />
        <button onClick={() => placeOrder()}>Place order</button>
      </section>
    </>
  );

  function placeOrder() {
    console.log("placing the order", pan, cvv, expiryMonth, expiryYear)
  }
}