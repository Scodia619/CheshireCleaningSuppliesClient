import React from 'react'
import ProductCard from './ProductCard';

function ProductsContainer() {

    const products = [
        {Id: 1, Name: "Blue Roll", Description: "A description of blue roll", Image_Url: "https://www.indooroutdoors.co.uk/cdn/shop/products/phc218c.jpg?v=1661944610"},
        {Id: 2, Name: "White Roll", Description: "A description of white rollddddddddddddddddddddddd", Image_Url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRq4StzxY42Q8DL4z8H-_QotWGziier20XdM32xQgnqxBSwlU4TpVdp3kscXijwyBnn3rX_REuzsjFuGRbnjndE9mt-KFLAobQKx-O3Tt8vsMVv5wLe0CEFZRqwDkikgPr_KDT8dc0&usqp=CAc7RRvU0oLrkLqqmBpVdH30AAAAA="},
        {Id: 3, Name: "Sanitizer", Description: "Cleans surfaces", Image_Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9mCr4dANqbOJbPxcXE3Few29sUc18nF3LQ&s"}]
    
  return (
    <div className="d-flex justify-content-around">
        {products.map(product => {
        return <ProductCard  key={product.Id} Product={product}/>
      })}
    </div>
  )
}

export default ProductsContainer;