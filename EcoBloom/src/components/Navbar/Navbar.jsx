import React, { useState, useContext } from 'react'; // Import useContext
import { Link } from 'react-router-dom';
import './Navbar.css';
import eblogo from '../Assets/eblogo.png'; 
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext'; // Import ShopContext

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext); // Use context to access the cart item count

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={eblogo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop"); }}><Link style={{ textDecoration: 'none' }} to='/' className="nav-link">Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("personalCare"); }}><Link style={{ textDecoration: 'none' }} to='/personal-care' className="nav-link">Personal Care</Link>{menu === "personalCare" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("homeKitchen"); }}><Link style={{ textDecoration: 'none' }} to='/home-kitchen' className="nav-link">Home & Kitchen</Link>{menu === "homeKitchen" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("gardeningoutdoor"); }}><Link style={{ textDecoration: 'none' }} to="/gardening-outdoor" className="nav-link">Gardening & Outdoor</Link>{menu === "gardeningoutdoor" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
