import { useState, useContext, CSSProperties } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types/CartItem';
import { userContext } from '../App';
import { calculateTax, getCartTotal, toCurrency } from '../data/utilities';
import { placeOrder as placeOrderToServer } from '../data/repository';
import { User } from '../types/User';

interface Props {
  cart: CartItem[],
  changeCartItem: (newCartItem: CartItem) => void,
  removeFromCart: (cartItem: CartItem) => void,
}
export const Cart = ({ cart, changeCartItem, removeFromCart }: Props) => {
  const navigate = useNavigate();
  const user: User = useContext(userContext);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [pan, setPan] = useState<string | undefined>(user?.creditCard?.pan);
  const [expiryMonth, setExpiryMonth] = useState<number | undefined>(user?.creditCard?.expiryMonth)
  const [expiryYear, setExpiryYear] = useState<number | undefined>(user?.creditCard?.expiryYear)
  const [cvv, setCvv] = useState<number | undefined>();
  return (
    <>
      <h1>Cart</h1>
      <Link to="/">Order more</Link>
      {cart.map((ci: CartItem) => (
        <section key={ci.id} style={styles.itemWrapper}>
          <h2 style={styles.itemName}>{ci.name}</h2>
          <p style={styles.price}>{ci.price}</p>
          <p style={styles.category}>{ci.category}</p>
          <label style={styles.for}>For<input value={ci.firstName || ""} onChange={e => setFirstName(e.target.value, ci)} style={styles.input} /></label>
          <label style={styles.requests}>Special requests
            <textarea value={ci.notes} onChange={e => setNotes(e.target.value, ci)} style={styles.textarea}></textarea>
          </label>
          <button onClick={() => removeFromCart(ci)} style={styles.button}>Remove</button>
        </section>
      ))}
      <section>
        <p>Tax: {toCurrency(calculateTax(getCartTotal(cart)))}</p>
        <p>Total: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)))}</p>
        <div>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" min="0.00" /></div>
        <p>Amount to charge: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)) + (tip || 0))}</p>
      </section>
      <section>
        <label htmlFor='id'>Deliver to...</label>
        <select value={area} id="area" onChange={e => setArea(e.target.value)}>
          {['Theater 1', 'Theater 2', 'Theater 3', 'Theater 4', 'Theater 5', 'Theater 6', 'Takeout',].map(area => <option value={area} key={area}>{area}</option>)}
        </select>
        <label htmlFor="location">Location (like table number)</label>
        <input value={location} onChange={e => setLocation(e.target.value)} id="location" />
      </section>
      <section>
        <h2>Payment</h2>
        <h3>Credit card</h3>
        <label htmlFor="pan">Number</label>
        <input value={pan} onChange={e => setPan(e.target.value)} id="pan" required />
        <label htmlFor="expiryMonth">Month</label>
        <input value={expiryMonth} onChange={e => setExpiryMonth(+e.target.value)} type="number" id="expiryMonth" required />
        <label htmlFor="expiryYear">Year</label>
        <input value={expiryYear} onChange={e => setExpiryYear(+e.target.value)} type="number" id="expiryYear" required />
        <label htmlFor="cvv">CVV</label>
        <input value={cvv} onChange={e => setCvv(+e.target.value)} id="cvv" required />
        <button onClick={placeOrder}>Place order</button>
      </section>
    </>
  )
  function placeOrder(): void {
    const newOrder = { cart, tip, pan, expiryMonth, expiryYear, cvv, area, location };
    placeOrderToServer(newOrder)
      .then(res => {
        const orderId = res.id;
        navigate(`/orders/${orderId}`);
      })
  }
  function setFirstName(firstName: string, ci: CartItem) {
    const newCartItem = { ...ci, firstName }
    changeCartItem(newCartItem);
  }
  function setNotes(notes: string, ci: CartItem) {
    const newCartItem = { ...ci, notes }
    changeCartItem(newCartItem);
  }
}

const styles: { [P: string]: CSSProperties } = {
  itemWrapper: {
    backgroundColor: 'var(--light2)',
    padding: "auto 20px", margin: "20px auto",
    border: '1px solid var(--dark1)',
    display: 'grid',
    gridTemplateColumns: "6fr 3fr",
    gridTemplateRows: "auto auto auto",
    gridTemplateAreas: `
    'name price'
    'for for'
    'requests requests'
    'unused button'
    `
  },
  itemName: {
    margin: "5px 0",
  },
  price: {
    justifySelf: 'right',
  },
  category: { display: 'none' },
  for: { gridArea: 'for', },
  input: {
    display: 'block',
  },
  requests: { gridArea: 'requests', },
  textarea: { display: 'block', },
  button: { gridArea: 'button', justifySelf: 'right' }
}