return (
  <>
    <h1>Menu</h1>
    <section id="itemsWrapper">
      <section>
        <div>
          <img src={menuItem.imageUrl} alt={menuItem.name} style={{ height: 200 }} />
        </div>
        <div className="menuDetails">
          <h2>{menuItem.name}</h2>
          <p>{menuItem.description}</p>
          <p>{toCurrency(menuItem.price)}</p>
          <div>
            <button>Add</button>
          </div>
        </div>
      </section>
    </section>
  </>
)