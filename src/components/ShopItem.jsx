function ShopItem({ item }) {
  const { name, price, color, img } = item;

  return (
    <div className="shop-item">
      <img src={img} alt={name} className="shop-item-img" />
      <h3 className="shop-item-name">{name}</h3>
      <p className="shop-item-color">{color}</p>
      <span className="shop-item-price">${price}</span>
      <button className="shop-item-btn">ADD TO CART</button>
    </div>
  );
}

export default ShopItem;
