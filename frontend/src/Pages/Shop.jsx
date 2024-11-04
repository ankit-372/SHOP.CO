import Hero from '../Components/Hero/Hero';
import Swiper from '../Components/Swiper/swiper';
const Shop = () => {
  return (
    <div>
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
    </div>
  )
}

export default Shop
