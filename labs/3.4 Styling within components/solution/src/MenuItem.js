import { toCurrency } from './utilities';

export function MenuItem(props) {
  const addToCart = props.addToCart;
  const menuItem = props.menuItem;
  return (
    <section style={styles.itemCard}>
      <div>
        <img src={menuItem.imageUrl} alt={menuItem.name} style={styles.image} />
      </div>
      <div className="menuDetails">
        <h2 style={styles.itemName}>{menuItem.name}</h2>
        <p style={styles.description}>{menuItem.description}</p>
        <p style={styles.price}>{toCurrency(menuItem.price)}</p>
        <div style={styles.addButtonContainer}>
          <button onClick={() => addToCart(menuItem)}>Add</button>
        </div>
      </div>
    </section>
  )
}
const styles = {
  itemCard: {
    flex: "1 0 250px",
    margin: '20px',
    border: "2px solid grey",
  },
  image: {
    width: "100%", height: 200,
    backgroundSize: "cover",
  },
  itemName: {
    margin: "5px 10px",
  },
  description: {
    padding: '0 10px',
  },
  price: {
    textAlign: 'right',
    padding: '0 10px',
    fontWeight: 'bold',
  },
  addButtonContainer: {
    textAlign: 'right',
    margin: '0 10px 10px auto',
  }
};