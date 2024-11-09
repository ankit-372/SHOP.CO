import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "/src/assets/star_icon.svg";
import star_dull_icon from "/src/assets/star_dull_icon.svg";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Thumbnail 1" />
          <img src={product.image} alt="Thumbnail 2" />
          <img src={product.image} alt="Thumbnail 3" />
        </div>
        <div className="productdisplay-main-img">
          <img src={product.image} alt="Main Product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>({product.reviews})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
        </div>
        <div className="productdisplay-right-sizes">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <button onClick={() => { addToCart(product.id); }}>Add to Cart</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Men, T-shirt
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Graphic, Casual
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
