import React from 'react';
import './Popular.css';
import data_product from '../Assets/Data'; // Ensure this path is correct
import Item from '../Items/Item'; // Ensure this path is correct

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Top Picks for You</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
