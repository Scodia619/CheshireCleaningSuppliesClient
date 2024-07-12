import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import "../Styles/ProductContainer.css"
import TagQueryDropDown from './TagQueryDropDown';

function ProductsContainer() {

  const products = [
    {Id: 1, Name: "Blue Roll", Description: "A description of blue roll", Image_Url: "https://www.indooroutdoors.co.uk/cdn/shop/products/phc218c.jpg?v=1661944610", Tag: "Janitor"},
    {Id: 2, Name: "White Roll", Description: "A description of white rollddddddddddddddddddddddd", Image_Url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRq4StzxY42Q8DL4z8H-_QotWGziier20XdM32xQgnqxBSwlU4TpVdp3kscXijwyBnn3rX_REuzsjFuGRbnjndE9mt-KFLAobQKx-O3Tt8vsMVv5wLe0CEFZRqwDkikgPr_KDT8dc0&usqp=CAc7RRvU0oLrkLqqmBpVdH30AAAAA=", Tag: "Cleaning"},
    {Id: 3, Name: "Sanitizer", Description: "Cleans surfaces", Image_Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9mCr4dANqbOJbPxcXE3Few29sUc18nF3LQ&s", Tag: "Car"}]    

  const [tag, setTag] = useState("All")
  const [filteredProducts, setFilteredProducts] = useState(products)


  useEffect(() => {
    if (tag === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.Tag === tag));
    }
  }, [tag]);


  return (
    <div className="product-container">
      <TagQueryDropDown setTag={setTag} Tag={tag}/>
      <div className="product-card-container">
          {filteredProducts.map(product => {
          return <ProductCard  key={product.Id} Product={product}/>
        })}
    </div>
    </div>
  )
}

export default ProductsContainer;