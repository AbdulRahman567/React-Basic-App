import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;