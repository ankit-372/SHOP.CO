import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Item from '../Components/Item/Item'
import dropdown_icon from '../assets/dropdown_icon.svg'

const ShopCategory = (props) => {
  const {SHOP_DATA} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <Navbar/>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 29 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}  alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {SHOP_DATA.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory
