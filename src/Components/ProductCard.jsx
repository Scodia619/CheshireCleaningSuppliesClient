import * as React from 'react';
import "../Styles/ProductCard.css"

const ProductCard = ({ Product }) => (
  <div className="product-card d-flex rounded-2 m-2">
    <div className='product-image-container d-flex justify-content-start align-items-center'>
      <img className="card-img rounded" src={Product.Image_Url} alt={Product.Name} />
    </div>
    <div className="card-info d-flex flex-column justify-content-start align-items-start w-100 pl-2">
      <h2>{Product.Name}</h2>
      <p>{Product.Description}</p>
    </div>
  </div>
);

export default ProductCard;