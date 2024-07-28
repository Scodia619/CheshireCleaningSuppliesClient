import {useContext} from 'react'
import { BasketContext } from '../Contexts/basketContext'
import BasketProductCard from '../Components/BasketProductCard'

function Basket() {
    const {basket, setBasket} = useContext(BasketContext)
  return (
    <div>
        {basket.map(product => {
            return <BasketProductCard key={product.index} Product={product} />
        })}
    </div>
  )
}

export default Basket