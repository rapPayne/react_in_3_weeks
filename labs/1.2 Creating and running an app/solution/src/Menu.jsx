import { useEffect, useState } from 'react';
import { getMenuItems, toCurrency } from './utilities';
export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  console.log({ menuItems });
  const menuItem = menuItems?.[0] || {};
  return (
    <>
      <h1>Menu</h1>
      {menuItem.name}
    </>
  )
}