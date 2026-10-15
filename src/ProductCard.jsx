function ProductCard({ image, name, price, category }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price} ₼</p>
      <p className="category">{category}</p>
      <button onClick={() => alert(name + " səbətə əlavə olundu")}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;