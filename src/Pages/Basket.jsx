import { useContext } from 'react'
import { BasketContext } from '../Contexts/basketContext'
import BasketProductCard from '../Components/BasketProductCard'
import '../Styles/ProductCard.css';

function Basket() {
  const { basket, setBasket } = useContext(BasketContext)
  return (
    <>
      <h2 className='page-title'>Basket:</h2>
      <div className="product-card-container">
        {basket.length > 0 ? (
          basket.map(product => (
            <BasketProductCard key={product.product_id} Product={product} />
          ))
        ) : (
          <h3 className="empty-basket-message">Your basket is empty.</h3>
        )}
      </div>
    </>
  )
}

export default Basket