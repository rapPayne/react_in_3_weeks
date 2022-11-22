import { CSSProperties, useEffect, useState } from 'react';
import { MenuItem as MenuItemType } from '../types/MenuItem'
import { getMenuItems } from '../data/repository';
import { toCurrency } from '../data/utilities';
interface Props {
  addToCart: (menuItem: MenuItemType) => void,
}
export const Menu = ({ addToCart }: Props) => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  return (
    <>
      <h1>Menu</h1>

      <section style={styles.wrapper} id="itemsWrapper">
        {menuItems?.map((menuItem: MenuItemType) => (
          <section style={styles.itemCard} key={menuItem.id}>
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
        ))}
      </section>
    </>
  )

}

const styles: { [X: string]: CSSProperties } = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  itemCard: {
    border: "2px solid var(--dark2)",
    margin: "20px",
    flex: "1 0 250px",
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