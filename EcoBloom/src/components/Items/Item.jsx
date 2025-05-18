import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top when the image is clicked
  };

  return (
    <div className="item" key={props.id}>
      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <img src={props.image} alt={props.name} />
      </Link>
      <div><h3>{props.name}</h3></div>
      <div className="item-prices"> {/* Flex container for prices */}
        {props.old_price && <p className="item-price-old">₹{props.old_price}</p>} {/* Old price with strikethrough */}
        <p className="item-price-new">₹{props.new_price}</p> {/* New price */}
      </div>
    </div>
  );
};

export default Item; // Ensure you're exporting the Item component
