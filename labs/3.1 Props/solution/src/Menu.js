import { useEffect, useState } from 'react';
import { getMenuItems } from './utilities';
import { MenuItem } from './MenuItem';
export const Menu = (props) => {
  const addToCart = props.addToCart;
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  return (
    <>
      <h1>Menu</h1>
      <section id="itemsWrapper">
        {menuItems.map(menuItem => <MenuItem menuItem={menuItem} addToCart={addToCart} key={menuItem.id} />)}
      </section>
    </>
  )
}