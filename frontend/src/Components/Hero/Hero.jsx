import { useRef } from "react";
import "./Hero.css";
import page1BgImg from "/src/assets/bg-Img-page1.svg";
import bigStar from "/src/assets/big-star.svg";
import smallStar from "/src/assets/small-star.svg";
import VERSACE from "/src/assets/VERSACE.svg";
import ZARA from "/src/assets/ZARA.svg";
import gucci from "/src/assets/gucci-logo-1 1.svg";
import PRADA from "/src/assets/PRADA.svg";
import Calvin from "/src/assets/Calvin.svg";
import casual from "/src/assets/Casual.svg";
import formal from "/src/assets/Formal.svg";
import party from "/src/assets/Party.svg";
import GYM from "/src/assets/GYM.svg";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

const Hero = () => {
  const page2Ref = useRef(null);

  const handleScrollToPage2 = () => {
    page2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
              to bring out your individuality and cater to your sense of style
            </div>
            <div className="shop-btn" onClick={handleScrollToPage2}>Shop Now</div>
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
      <div ref={page2Ref}>
        <Page2 />
      </div>
      {/* page2 ends */}

      {/* page3 starts */}
      <Page3 />
      {/* page3 ends */}

      {/* page4 starts */}
      <div className="page4">
        <div className="main">
          <div className="container1">BROWSE BY DRESS STYLE</div>
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
