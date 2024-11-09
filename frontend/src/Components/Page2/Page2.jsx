import './Page2.css';
import data_product from '../../assets/product1';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    window.scrollTo(0, 0);  // Scrolls to the top
    navigate('/newArrivals');  // Navigates to newArrivals page
  };

  return (
    <div className='Page2'>
      <div className='header'>NEW ARRIVALS</div>
      <div className="Page2-items">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div onClick={handleViewAllClick} className="view-all-btn" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        View All
      </div>
    </div>
  );
};

export default Page2;
