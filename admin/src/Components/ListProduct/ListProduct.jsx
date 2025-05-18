import React from 'react';
import './ListProduct.css';
import { useState } from 'react';
import cross_icon from '../../assets/cart_cross_icon.png'
import {useEffect } from 'react';


const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  
  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      
      console.log(data); // Log the fetched data to debug
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      
      <div className='listproduct-allproducts'>
        <hr />
        {allproducts && allproducts.length > 0 ? (
          allproducts.map((product, index) => (
            <div key={index} className='listproduct-format-main listproduct-format'>
              <img src={product.image} alt={product.name} className='listproduct-product-icon' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img 
                className='listproduct-remove-icon' 
                src={cross_icon} 
                alt="Remove"
              />
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;

