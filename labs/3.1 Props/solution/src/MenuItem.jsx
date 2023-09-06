import { toCurrency } from './utilities';

export const MenuItem = (props) => {
  const menuItem = props.menuItem;
  const addToCart = props.addToCart;

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