function ShopItem({ item }) {
  const { name, price, color, img } = item;

  return (
    <div className="shop-item">
      <img src={img} alt={name} className="shop-item-img" />
      <div className="shop-item-info">
        <h3 className="shop-item-name">{name}</h3>
        <p className="shop-item-color">{color}</p>
      </div>
      <span className="shop-item-price">${price}</span>
      <button className="shop-item-btn">ADD TO CART</button>
    </div>
  );
}

export default ShopItem;
