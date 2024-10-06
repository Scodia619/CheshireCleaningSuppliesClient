import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import "../Styles/ProductContainer.css"
import TagQueryDropDown from './TagQueryDropDown';
import { getProducts, getProductsByTag } from '../../api';

function ProductsContainer() {
  
  const [products, setProducts] = useState([])
  const [tag, setTag] = useState("All")

  useEffect(() => {
    if(tag === "All"){
      getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      getProductsByTag(tag)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [tag])

  return (
    <div className="product-container">
      <div className="tag-container">
        <TagQueryDropDown setTag={setTag} Tag={tag}/>
      </div>
      <div className="product-card-container">
          {products.map(product => {
          return <ProductCard  key={product.product_id} Product={product}/>
        })}
    </div>
    </div>
  )
}

export default ProductsContainer;