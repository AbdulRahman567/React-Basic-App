import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, price, category, stock }) {
  const [currentStock, setCurrentStock] = useState(stock);
  console.log(`Rendering ${name} with stock: ${currentStock}`);
  const handleSell = () => {
    if (currentStock > 0) {
      setCurrentStock(currentStock - 1);
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> ${price}
      </p>

      {currentStock === 0 ? (
        <span className="out-of-stock">Out of Stock</span>
      ) : (
        <span className="in-stock">
          In Stock: {currentStock}
        </span>
      )}

      <button
        className="sell-btn"
        onClick={handleSell}
        disabled={currentStock === 0}
      >
        Sell One
      </button>
    </div>
  );
}

export default ProductCard;