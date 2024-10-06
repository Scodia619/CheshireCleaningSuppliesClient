import * as React from 'react';
import { useContext } from 'react';
import "../Styles/ProductCard.css";
import {BasketContext} from '../Contexts/basketContext';

function ProductCard({ Product }){

  const {basket, setBasket} = useContext(BasketContext)

  const handleAdd = () => {

    var productInBasket = basket.find((product) => product.product_id === Product.product_id)
    if(!productInBasket){
      Product.Quantity = 1
      setBasket((prevVals) => [...prevVals, Product])
    }else{
      Product.Quantity ++;
    }

  }

  return (
  <div className="product-card d-flex rounded-2 m-2">
    <div className='product-image-container d-flex justify-content-start align-items-center'>
      <img className="card-img rounded" src={Product.image_url} alt={Product.name} />
    </div>
    <div className='d-flex flex-column justify-content-between card-info'>
      <div className="d-flex flex-column justify-content-start align-items-start pl-2">
        <h6>{Product.name}</h6>
      </div>
      <button className='btn btn-primary' onClick={handleAdd}>Add To Basket</button>
    </div>
  </div>
  );
};

export default ProductCard;