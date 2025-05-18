// ShopCategory.jsx
import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Items/Item'; // Check that this path is correct

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-10</span> out of {all_products.filter(item => item.category === props.category).length} products
        </p>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          // Check if the item's category matches the current category prop
          if (item.category === props.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          }
          return null; // Explicitly return null for non-matching items
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
