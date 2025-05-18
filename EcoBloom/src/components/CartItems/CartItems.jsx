import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext.jsx';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext); // Fixed variable name

  return (
    <div className="cartitems">
      <h2 className="cart-heading">Your Shopping Cart</h2> {/* Added heading */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p> {/* Separate column for Remove */}
      </div>
      <hr />
      {all_products.map((e) => { // Fixed variable name
        // Check if the product is in the cart
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartitems-format" key={e.id}>
              <img src={e.image} alt={e.name} className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>₹{e.new_price.toFixed(2)}</p> {/* Format price as currency */}
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>₹{(e.new_price * cartItems[e.id]).toFixed(2)}</p> {/* Format total price */}
              <img 
                src={remove_icon} 
                onClick={() => { removeFromCart(e.id); }} 
                alt="Remove" 
                className="cartitems-remove-icon" 
              />
            </div>
          );
        }
        return null; // Return null if no item is in the cart to prevent rendering an empty div
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal:</p>
              <p>₹{getTotalCartAmount().toFixed(2)}</p> {/* Corrected function call */}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h2>Total:</h2>
              <h3>₹{getTotalCartAmount().toFixed(2)}</h3> {/* Corrected function call */}
            </div>
          </div>
        </div>
        <button className="checkout-button">PROCEED TO CHECKOUT</button> {/* Added class for styling */}
      </div>
    </div>
  );
};

export default CartItems;
