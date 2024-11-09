import './RelatedProducts.css';
import SHOP_DATA from '../../assets/shop-data';
import Item from '../Item/Item';
import { getRandomProducts } from '../utils/utils';

const RelatedProducts = () => {
  // Get a random selection of products (e.g., 4 items)
  const relatedProducts = getRandomProducts(SHOP_DATA, 8);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>

      <div className="relatedproducts-scroll">
        {relatedProducts.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
