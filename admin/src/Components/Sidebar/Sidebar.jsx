import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import product_cart from '../../assets/productcart.jpg';
import product_list from '../../assets/productlist.jpg';
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <Link to={'/addproduct'} style={{textDecoration: "none"}}> 
     <div className='sidebar-item'>
      <img src={product_cart} alt="" /> 
      <p>Add Product</p>    
      </div>
     </Link>
     <Link to={'/listproduct'} style={{textDecoration: "none"}}> 
     <div className='sidebar-item'>
      <img src={product_list} alt="" /> 
      <p>Product List</p>    
      </div>
     </Link>
    </div>
  );
};

export default Sidebar;
