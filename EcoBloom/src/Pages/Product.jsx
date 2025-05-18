import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
// import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import './CSS/Product.css'; // Adjust the path as needed
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';


const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) return <div>Product not found</div>;
  

  return (
    <div>
      <ProductDisplay product={product} />
      {/* <DescriptionBox description={product.desc}/> */}
      <div className="app-description">
        <h2>About Our Marketplace</h2>
        <p>
          Welcome to our eco-friendly marketplace, where sustainability meets style! Discover a curated selection of ethically sourced products designed to reduce your environmental footprint. From organic skincare to reusable everyday essentials, we prioritize quality and sustainability in every item. Join us on our mission to promote a healthier planet for future generations. Shop with us and make a positive impact today!
        </p>
      </div>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
