export function Cart() {
  const cartItem = {
    id: 1,
    name: "Garden salad",
    description: "Meal-sized portion. garden greens, tomatoes, peppers, celery, carrots",
    category: "entrees",
    price: 6.54,
    imageUrl: "images/salad_1.jpg",
    available: true,
    itemId: 300
  }
  console.log("Cart");
  return (
    <>
      <h1>Cart</h1>
      <section className="cartItem">
        <p>{cartItem.name}</p>
        <p>{cartItem.category}</p>
        <p>{cartItem.price}</p>
        <p>for: <input /></p>
        <label>Special requests</label>
        <textarea></textarea>
        <button>Remove</button>
      </section>
      <section>
        <p>Tax: TAX_HERE</p>
        <p>Total: CART_TOTAL_HERE</p>
        <div>Tip: <input type="number" step="0.01" /></div>
        <p>Amount to charge: GRAND_TOTAL_HERE</p>
      </section>
      <section>
        <label>Deliver to...</label>
        <input />
      </section>
      <section>
        <h2>Payment</h2>
        <h3>Credit card</h3>
        <label htmlFor="pan">Number</label>
        <input id="pan" required />
        <label htmlFor="expiryMonth">Month</label>
        <input type="number" id="expiryMonth" required />
        <label htmlFor="expiryYear">Year</label>
        <input type="number" id="expiryYear" required />
        <label htmlFor="cvv">CVV</label>
        <input id="cvv" required />
        <button onClick={() => placeOrder()}>Place order</button>
      </section>
    </>
  );
  function placeOrder() {
    console.log("Placing the order.")
  }
}