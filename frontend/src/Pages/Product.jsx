import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {SHOP_DATA} = useContext(ShopContext);
    const {productId} = useParams();
    const product = SHOP_DATA.find((e)=>e.id === Number(productId))
  return (
    <div>
        <Navbar/>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
        <Footer/>
    </div>
  )
}

export default Product
