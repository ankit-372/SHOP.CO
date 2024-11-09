import { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import cart_icon from "/src/assets/cart-icon.svg";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [Menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="nav-container">
      <div className="title">SHOP.CO</div>
      <ul>
        <li
          onClick={() => setMenu("shop")}
          style={{ fontWeight: Menu === "shop" ? "bold" : "normal" }}
        >
          <Link style = {{textDecoration:'none',color:'black'}} to='/'>Shop</Link>
        </li>
        <li
          onClick={() => setMenu("On_Sale")}
          style={{ fontWeight: Menu === "On_Sale" ? "bold" : "normal" }}
        >
          <Link style = {{textDecoration:'none',color:'black'}} to='/On_Sale'>On Sale</Link>
        </li>
        <li
          onClick={() => setMenu("new")}
          style={{ fontWeight: Menu === "new" ? "bold" : "normal" }}
        >
          <Link style = {{textDecoration:'none',color:'black'}} to='/newArrivals'>New Arrivals</Link>
        </li>
        <li
          onClick={() => setMenu("brands")}
          style={{ fontWeight: Menu === "brands" ? "bold" : "normal" }}
        >
          <Link style = {{textDecoration:'none',color:'black'}} to='/brands'>Brands</Link>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search for products..." />
      </div>
      <div className="icons">
        <div className="Personal">
          <Link style = {{textDecoration:'none',color:'black'}} to='/loginSignUp'><button>Login</button></Link>
        </div>
        <div className="cart">
          <Link style = {{textDecoration:'none',color:'black'}} to='/Cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

