import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Corrected import path
import './ProductDisplay.css';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext); // Correct the context usage

  return (
    <div className="productdisplay">
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt={product.name} />
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className='productdisplay-right-prices'>
          <div className="productdisplay-right-price-old">
            ₹{product.old_price} {/* Correct reference */}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price} {/* Correct reference */}
          </div>
        </div>

        <div className="productdisplay-right-desc">
          {product.desc || 'No description available'} {/* Default text if desc is missing */}
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button> {/* Corrected addToCart function call */}
        <p className='productdisplay-right-category'>
          <span>Category:</span> {product.category || 'Not Specified'}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
