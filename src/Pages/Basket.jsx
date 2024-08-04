import {useContext} from 'react'
import { BasketContext } from '../Contexts/basketContext'
import BasketProductCard from '../Components/BasketProductCard'
import '../Styles/BasketProductCard.css'

function Basket() {
    const {basket, setBasket} = useContext(BasketContext)
  return (
    <div className="basket-container">
        {basket.map(product => {
            return <BasketProductCard key={product.Id} Product={product} />
        })}
    </div>
  )
}

export default Basket