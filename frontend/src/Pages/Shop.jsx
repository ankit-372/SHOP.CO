import Hero from '../Components/Hero/Hero';
import Swiper from '../Components/Swiper/swiper';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="page5">
        <div className="page5-main">
             {/* use swiper */}
             <div className="header5">
                OUR HAPPY CUSTOMERS
             </div>
             <Swiper/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop;