import { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../../assets/remove_icon.svg";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";

const CartItems = () => {
  const {
    SHOP_DATA,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    applyPromoCode,
    isPromoApplied,
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [isPromoError, setIsPromoError] = useState(false);

  const subtotal = getTotalCartAmount();
  const totalItems = getTotalCartItems();

  const handleApplyPromoCode = () => {
    const isValid = applyPromoCode(promoCode);
    setIsPromoError(!isValid);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {SHOP_DATA.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                    <p className="item-price">${item.new_price}</p>
                  </div>

                  <div className="cart-items-right-side">
            
                    <div className="cart-item-controls-container">
                      <div className="cart-item-controls">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="quantity-btn"
                        >
                          <img src={Minus} alt="" />
                        </button>
                        <span>{cartItems[item.id]}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="quantity-btn"
                        >
                          <img src={Plus} alt="" />
                        </button>
                      </div>
                    </div>

                    <img
                      src={removeIcon}
                      alt="Remove item"
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                    />
                    
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-detail">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          {isPromoApplied && (
            <div className="summary-detail">
              <p>Discount (-20%)</p>
              <p>-${(subtotal * 0.2).toFixed(2)}</p>
            </div>
          )}
          <div className="summary-detail">
            <p>Delivery Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="summary-total">
            <h3>Total</h3>
            <h3>
              ${(subtotal - (isPromoApplied ? subtotal * 0.2 : 0)).toFixed(2)}
            </h3>
          </div>

          {/* Promo Code */}
          <div className="promo-code">
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={isPromoApplied}
            />
            <button onClick={handleApplyPromoCode} disabled={isPromoApplied}>
              {isPromoApplied ? "Applied" : "Apply"}
            </button>
          </div>
          {isPromoError && <p className="error-text">Invalid Promo Code</p>}

          <button className="checkout-btn">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
