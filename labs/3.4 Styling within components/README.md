# Styling inside a component
TODO: NOT YET FINISHED


This lab is all about aesthetics! Your opinions about looks may differ. Don't be constrained to follow our instructions exactly. Feel free to change the structure of the Menu component to make it layout however you decide.

## Menu.js
1. Add a new object to your code.
```JavaScript
const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  itemCard: {
    flex: "1 0 250px",
  },
  image: {
    width: "100%", height: 200,
    backgroundSize: "cover",
  },
  itemName: {},
  description: {},
  price: {},
  addButtonContainer: {},
};
```
1. Add a `style` property to the elements in the JSX that you think need it. Notice the `style={styles.whatever}` in this example:
```JavaScript
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
```
2. Run and test. You should see a change to the layout immediately because we applied flex properties. 
3. Now go through and add properties to the styles object to make your menu look nice. Maybe let this be a goal:
![Screenshot of Menu component](../images/Menu_view.png "Menu")

Obviously you'll need to lean on your CSS skills to do this. If you don't know CSS well, here is a [cool cheatsheet](https://htmlcheatsheet.com/css/).

4. asdf