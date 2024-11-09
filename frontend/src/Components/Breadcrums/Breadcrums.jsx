import React from 'react'
import './Breadcrum.css'
import arrow_icon from '/src/assets/breadcrum_arrow_icon.svg'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt={arrow_icon} /> SHOP <img src={arrow_icon} alt={arrow_icon} /> {product.category} <img src={arrow_icon} alt={arrow_icon} /> {product.name}
    </div>
  )
}

export default Breadcrums;
