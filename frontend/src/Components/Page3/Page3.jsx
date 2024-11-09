import './Page3.css'
import data_product from '../../assets/product2'
import Item from '../Item/Item'
import { useNavigate } from 'react-router-dom';


const Page3 = () => {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
    window.scrollTo(0, 0);  // Scrolls to the top
    navigate('/On_Sale');  // Navigates to On Sale page
  };
  return (
    <div className='Page3'>
      <div className='header'>TOP SELLING</div>
      <div className="Page3-items">
        {data_product.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      <div onClick={handleViewAllClick} className="view-all-btn" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        View All
      </div>    
      </div>
  )
}

export default Page3;