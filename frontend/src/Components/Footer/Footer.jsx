import "./Footer.css";

import twitter from "/src/assets/twitter.svg";
import facebook from "/src/assets/facebook.svg";
import instagram from "/src/assets/instagram.svg";
import github from "/src/assets/Github.svg";

import visa from "/src/assets/visa.svg";
import masterCard from "/src/assets/masterCard.svg";
import PayPal from "/src/assets/PayPal.svg";
import applePay from "/src/assets/applePay.svg";
import Gpay from "/src/assets/Gpay.svg";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="banner1">
          <div className="banner-header">
            STAY UPTO DATE ABOUT <br />
            OUR LATEST OFFERS
          </div>
          <div className="banner-inputs">
            <div className="enter-email">
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="subscribe-btn" href="#">
              Subscribe to Newsletter
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="banner2">
            <div className="table1">
              <div className="shopp">SHOP.CO</div>
              <div style={{color:"#00000060"}}>
                We have clothes that suits your style and <br />
                which you're proud to wear. From <br /> women to men{" "}
              </div>
              <div className="icons">
                <div className="twitter">
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="facebook">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="instagram">
                  <img src={instagram} alt="instagram" />
                </div>
                <div className="github">
                  <img src={github} alt="github" />
                </div>
              </div>
            </div>
            <div className="table2">
              <div className="footer-header" style={{color:"#000000"}}>COMPANY</div>
              <div>About</div>
              <div>Features</div>
              <div>Works</div>
              <div>Career</div>
            </div>
            <div className="table3">
              <div className="footer-header" style={{color:"#000000"}}>HELP</div>
              <div>Customer Support</div>
              <div>Delivery Details</div>
              <div>Terms & Conditions</div>
              <div>Privay Policy</div>
            </div>
            <div className="table4">
              <div className="footer-header" style={{color:"#000000"}}>FAQ</div>
              <div>Account</div>
              <div>Manage Deliveries </div>
              <div>Orders</div>
              <div>Payments</div>
            </div>
            <div className="table5">
              <div className="footer-header" style={{color:"#000000"}}>RESOURCES</div>
              <div>Free eBooks</div>
              <div>Development Tutorial</div>
              <div>How to - Blog</div>
              <div>Youtube Playlist</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
    
            <div className="footer-bottom-2">
            <div className="footer-bottom-con">
                shop.co © 2000-2003 All Rights Reserved
            </div>
            <div className="table">
                <div><img src={visa} alt="visa" /></div>
                <div> <img src={masterCard} alt="masterCard" /></div>
                <div><img src={PayPal} alt="PayPal" /></div>
                <div><img src={applePay} alt="applePay" /></div>
                <div><img src={Gpay} alt="Gpay" /></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
