import ProductCard from "./ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Qulaqlıq",
    price: 59,
    category: "Elektronika",
    image: "https://picsum.photos/seed/headphones/300/200",
  },
  {
    id: 2,
    name: "Smart Saat",
    price: 120,
    category: "Aksesuar",
    image: "https://picsum.photos/seed/watch/300/200",
  },
  {
    id: 3,
    name: "Bel çantası",
    price: 45,
    category: "Çanta",
    image: "https://picsum.photos/seed/bag/300/200",
  },
  {
    id: 4,
    name: "Klaviatura",
    price: 80,
    category: "Elektronika",
    image: "https://picsum.photos/seed/keyboard/300/200",
  },
  {
    id: 5,
    name: "İdman ayaqqabısı",
    price: 150,
    category: "Geyim",
    image: "https://picsum.photos/seed/shoes/300/200",
  },
  {
    id: 6,
    name: "Günəş eynəyi",
    price: 35,
    category: "Aksesuar",
    image: "https://picsum.photos/seed/glasses/300/200",
  },
];

function App() {
  return (
    <div className="container">
      <h1>Məhsullar</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;