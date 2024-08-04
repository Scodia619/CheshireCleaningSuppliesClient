import React, { useState, useEffect, useContext } from 'react';
import '../Styles/BasketProductCard.css';
import { BasketContext } from '../Contexts/basketContext';

function BasketProductCard({ Product }) {
  const [quantity, setQuantity] = useState(Product.Quantity);
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    if (quantity === 0) {
      setBasket((prevBasket) =>
        prevBasket.filter((product) => product.Id !== Product.Id)
      );
    }
  }, [quantity, Product.Id, setBasket]);

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSub = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure quantity doesn't go below 0
  };

  return (
    <div className='basket-card'>
      <div className="image">
        <img src={Product.Image_Url} alt="Image of Product" className="basket-card-img" />
      </div>
      <div className="basket-info">
        <h1>{Product.Name}</h1>
        <p>{Product.Description}</p>
        <div className="quantity">
          <button className='btn btn-primary' onClick={handleSub}>-</button>
          {quantity}
          <button className='btn btn-primary' onClick={handleAdd}>+</button>
        </div>
      </div>
    </div>
  );
}

export default BasketProductCard;
