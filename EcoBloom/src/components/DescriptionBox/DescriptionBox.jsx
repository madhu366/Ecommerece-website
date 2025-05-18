import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ description }) => { // Accept description as a prop
  return (
    <div className='descriptionBox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>{description}</p> {/* Display the product description */}
      </div>
    </div>
  );
}

export default DescriptionBox;
