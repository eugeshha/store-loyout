function ShopCard({ item }) {
  const { name, price, color, img } = item;

  return (
    <div className="shop-card">
      <h3 className="shop-card-name">{name}</h3>
      <p className="shop-card-color">{color}</p>
      <img src={img} alt={name} className="shop-card-img" />
      <div className="shop-card-footer">
        <span className="shop-card-price">${price}</span>
        <button className="shop-card-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopCard;
