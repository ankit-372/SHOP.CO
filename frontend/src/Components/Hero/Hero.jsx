import "./Hero.css";
import page1BgImg from "/src/assets/bg-Img-page1.svg";
import bigStar from "/src/assets/big-star.svg";
import smallStar from "/src/assets/small-star.svg";
import VERSACE from "/src/assets/VERSACE.svg";
import ZARA from "/src/assets/ZARA.svg";
import gucci from "/src/assets/gucci-logo-1 1.svg";
import PRADA from "/src/assets/PRADA.svg";
import Calvin from "/src/assets/Calvin.svg";

import t_shirt_with_tape_details from "/src/assets/T-shirt_with_tape_details.svg";
import rating1 from "/src/assets/rating1.svg";
import Skinny_fit_jeans from "/src/assets/Skinny_fit_jeans.svg";
import rating2 from "/src/assets/rating2.svg";
import Checkered_shirt from "/src/assets/Checkered_shirt.svg";
import Sleeve_striped_T_shirt from "/src/assets/Sleeve_striped_T-shirt.svg";

import Vertical_Striped_Shirt from "/src/assets/Vertical_Striped_Shirt.svg";
import rating3 from "/src/assets/rating3.svg";
import Courage_Graphic_T_shirt from "/src/assets/Courage_Graphic_T-shirt.svg";
import rating4 from "/src/assets/rating4.svg";
import Loose_Fit_Bermuda_Shorts from "/src/assets/Loose_Fit_Bermuda_Shorts.svg";
import rating5 from "/src/assets/rating5.svg";
import Faded_Skinny_Jeans from "/src/assets/Faded_Skinny_Jeans.svg";
import casual from "/src/assets/Casual.svg";
import formal from "/src/assets/Formal.svg";
import party from "/src/assets/Party.svg";
import GYM from "/src/assets/GYM.svg";




const Hero = () => {
  return (
    <div>
      {/* page1 starts */}
      <div className="page1">
        <div className="bg-img-page1">
          <img src={page1BgImg} alt="BackgroundImage" />
        </div>
        <div className="main-con">
          <div className="page1-text">
            <div className="header">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </div>
            <div className="sub-header">
              Browse through our diverse range of meticulously crafted garments,
              designed <br />
              to bring out your indivClassNameuality and cater to your sense of
              style
            </div>
            <div className="shop-btn">Shop Now</div>
          </div>
          <div className="page1-boxes">
            <div className="box">
              <div className="num">200+</div>
              <div className="text">International Brands</div>
            </div>
            <div className="box">
              <div className="num">2,000+</div>
              <div className="text">High-Quality Products</div>
            </div>
            <div className="box-right">
              <div className="num">30,000+</div>
              <div className="text">Happy Customers</div>
            </div>
          </div>
        </div>
        <div className="big-star">
          <img src={bigStar} alt="bigStar" />
        </div>
        <div className="small-star">
          <img src={smallStar} alt="smallStar" />
        </div>
      </div>

      <div className="logo">
        <ul>
          <li>
            <img src={VERSACE} alt="VERSACE" />
          </li>
          <li>
            <img src={ZARA} alt="ZARA" />
          </li>
          <li>
            <img src={gucci} alt="gucci" />
          </li>
          <li>
            <img src={PRADA} alt="PRADA" />
          </li>
          <li>
            <img src={Calvin} alt="Calvin" />
          </li>
        </ul>
      </div>
      {/* page1 ends */}

      {/* page2 starts */}
      <div className="page2">
        <div className="header2">NEW ARRIVALS</div>
        <ul>
          <li>
            <img
              src={t_shirt_with_tape_details}
              alt="T-shirt with Tape Details"
            />
            <div className="img-details">
              <div className="product-details">T-shirt with Tape Details</div>
              <div className="ratings">
                <img src={rating1} alt="Rating 1" />
              </div>
              <div className="price">$120</div>
            </div>
          </li>
          <li>
            <img src={Skinny_fit_jeans} alt="Skinny Fit Jeans" />
            <div className="img-details">
              <div className="product-details">Skinny Fit Jeans</div>
              <div className="ratings">
                <img src={rating2} alt="Rating 2" />
              </div>
              <div className="price">
                <div className="sale-details">
                  <div className="sale-price">$240</div>
                  <div className="actual-price">
                    <s>$260</s>
                  </div>
                  <div className="discount">-20%</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src={Checkered_shirt} alt="Checkered Shirt" />
            <div className="img-details">
              <div className="product-details">Checkered Shirt</div>
              <div className="ratings">
                <img src={rating1} alt="Rating 1" />
              </div>
              <div className="price">$180</div>
            </div>
          </li>
          <li>
            <img src={Sleeve_striped_T_shirt} alt="Sleeve Striped T-shirt" />
            <div className="img-details">
              <div className="product-details">Sleeve Striped T-shirt</div>
              <div className="ratings">
                <img src={rating1} alt="Rating 1" />
              </div>
              <div className="price">
                <div className="sale-details">
                  <div className="sale-price">$130</div>
                  <div className="actual-price">
                    <s>$160</s>
                  </div>
                  <div className="discount">-30%</div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="view-all">
          <div className="view-all-btn">View All</div>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      {/* page2 ends */}

      {/* page3 starts */}
      <div className="page3">
        <div className="header3">TOP SELLING</div>
        <ul>
          <li>
            <img src={Vertical_Striped_Shirt} alt="Vertical_Striped_Shirt" />
            <div className="img-details">
              <div className="product-details">Vertical Striped Shirt</div>
              <div className="ratings">
                <img src={rating3} alt="rating3" />
              </div>
              <div className="price">
                <div className="sale-details">
                  <div className="sale-price">$212</div>
                  <div className="actual-price">
                    <s>$232</s>
                  </div>
                  <div className="discount">-20%</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src={Courage_Graphic_T_shirt} alt="Courage_Graphic_T_shirt" />
            <div className="img-details">
              <div className="product-details">Courage Graphic T-shirt</div>
              <div className="ratings">
                <img src={rating4} alt="rating4" />
              </div>
              <div className="price">$145</div>
            </div>
          </li>
          <li>
            <img
              src={Loose_Fit_Bermuda_Shorts}
              alt="Loose_Fit_Bermuda_Shorts"
            />
            <div className="img-details">
              <div className="product-details">Loose Fit Bermuda Shorts</div>
              <div className="ratings">
                <img src={rating5} alt="rating5" />
              </div>
              <div className="price">$80</div>
            </div>
          </li>
          <li>
            <img src={Faded_Skinny_Jeans} alt="Faded_Skinny_Jeans" />
            <div className="img-details">
              <div className="product-details">Faded Skinny Jeans</div>
              <div className="ratings">
                <img src={rating1} alt="rating1" />
              </div>
              <div className="price">$210</div>
            </div>
          </li>
        </ul>

        <div className="view-all">
          <div className="view-all-btn">View All</div>
        </div>
      </div>
      {/* page3 ends */}

      {/* page4 starts */}
      <div className="page4">
        <div className="main">
            <div className="container1">
                BROWSE BY DRESS STYLE
            </div>
            <div className="container2">
              <img src={casual} alt="casual" />
              <img src={formal} alt="formal" />
            </div>
            <div className="container3">
              <img src={party} alt="party" />
              <img src={GYM} alt="GYM" />
            </div>
        </div>
     </div>
      {/* page4 ends */}
    </div>
  );
};

export default Hero;
