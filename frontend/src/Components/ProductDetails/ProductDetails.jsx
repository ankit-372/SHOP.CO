import { useContext } from 'react';
import { shopcontext } from '../../Context/shopcontext'; // Assuming context is set up to store products
import './ProductDetails.css';

const ProductDetail = ({ match }) => {
  const { shop_data, addToCart } = useContext(shopcontext);
  const productId = match.params.id; // Assuming you are using React Router to handle the page routes
  const product = shop_data.find(item => item.id === parseInt(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <div className="product-price">
          <span className="original-price">${product.original_price}</span>
          <span className="discounted-price">${product.new_price}</span>
        </div>
        <div className="product-rating">
          <span>{product.rating} ★</span>
        </div>
        <p className="product-description">{product.description}</p>

        <div className="product-options">
          <div className="product-color-options">
            <span>Select Colors:</span>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="product-size-options">
            <span>Choose Size:</span>
            <div className="size-options">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button key={size} className="size-option">{size}</button>
              ))}
            </div>
          </div>

          <div className="product-quantity">
            <button className="quantity-btn">-</button>
            <span>1</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
