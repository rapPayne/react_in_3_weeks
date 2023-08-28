import { toCurrency } from './utilities';

export function MenuItem(props) {
  const addToCart = props.addToCart;
  const menuItem = props.menuItem;
  return (
    <section key={menuItem.id}>
      <div>
        <img src={menuItem.imageUrl} alt={menuItem.name} style={{ height: 200 }} />
      </div>
      <div className="menuDetails">
        <h2>{menuItem.name}</h2>
        <p>{menuItem.description}</p>
        <p>{toCurrency(menuItem.price)}</p>
        <div>
          <button onClick={() => addToCart(menuItem)}>Add</button>
        </div>
      </div>
    </section>
  )
}