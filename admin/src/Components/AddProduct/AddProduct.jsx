import React from 'react';
import './AddProduct.css';
import { useState } from 'react';
import upload_area from '../../assets/upload_area.png';
const AddProduct = () => {
  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"Personal Care",
    new_price:"",
    old_price:"",
  })
  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }
  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }
  const Add_Product = async () => {
    console.log(productDetails); // Logs the product details

    let product = { ...productDetails }; // Create a copy of productDetails to avoid direct mutation

    let formData = new FormData();
    formData.append('product', image); // Append the image to formData

    try {
        const response = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const responseData = await response.json(); // Parse JSON response

        if (responseData.success) {
            product.image = responseData.image_url; // Assign the image URL to product details
            console.log(product); // Log the updated product details
            
            try {
                const addProductResponse = await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product), // Send the product details as JSON
                });

                const addProductData = await addProductResponse.json(); // Parse response

                if (addProductData.success) {
                    alert("Product added successfully");
                } else {
                    alert('Failed to add product');
                }
            } catch (addProductError) {
                console.error('Error adding product:', addProductError);
                alert('Failed to add product due to server error');
            }
        } else {
            console.error('Image upload failed');
        }
    } catch (error) {
        console.error('Error uploading product image:', error);
        alert('Failed to upload image');
    }
};


return (
    <div className='add-product'>
     <div className='addproduct-itemfield'>
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
     </div>
     <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
        </div>
        <div className='addproduct-itemfield'>
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
        </div>

     </div>
     <div className='addproduct-itemfield'>
      <p>Product Category</p>
      <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
        <option value="Personal Care">Personal Care</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Gardening & Outdoor">Gardening & Outdoor</option>
      </select>
     </div>
     <div className='addproduct-itemfield'>
      <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt=""/>
      </label>
      <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
     </div>
     <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;