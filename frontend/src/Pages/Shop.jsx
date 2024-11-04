
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Swiper from '../Components/Swiper/swiper';
const Shop = () => {
  return (
    <div>
      <Hero/>
      <div className="page5">
        <div className="main">
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

export default Shop
