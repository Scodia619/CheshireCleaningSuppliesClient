import React, { useState, useEffect, useContext } from 'react';
import '../Styles/ProductCard.css';
import { BasketContext } from '../Contexts/basketContext';

function BasketProductCard({ Product }) {
  const [quantity, setQuantity] = useState(Product.Quantity);
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    if (quantity === 0) {
      setBasket((prevBasket) =>
        prevBasket.filter((product) => product.product_id !== Product.product_id)
      );
    }
  }, [quantity, Product.product_id, setBasket]);

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSub = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div className="product-card d-flex rounded-2 m-2">
    <div className='product-image-container d-flex justify-content-start align-items-center'>
      <img className="card-img rounded" src={Product.image_url} alt={Product.name} />
    </div>
    <div className='d-flex flex-column justify-content-between card-info'>
      <div className="d-flex flex-column justify-content-start align-items-start pl-2">
        <h5>{Product.name}</h5>
      </div>
      <div className="quantity">
          <button className='btn btn-primary btn-sub' onClick={handleSub}>-</button>
          <p className='quantity-info'>{quantity}</p>
          <button className='btn btn-primary btn-add' onClick={handleAdd}>+</button>
        </div>
    </div>
  </div>
  );
}

export default BasketProductCard;
