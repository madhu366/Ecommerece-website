import p1_img from './product_1.png';
import p5_img from './product_5.png';
import p3_img from './product_3.png';
import p8_img from './product_8.png';

let data_product = [
    {
        id: 1,
        name: "Cel repair and protect combo",
        image: p1_img,  // Include the image property
        new_price: 399,  // Change new_prices to new_price
        old_price: 499,
        category: 'Personal Care',
      },
      {
        id: 3,
        name: "Cotton T-shirt",
        image: p3_img,  // Include the image property
        new_price: 149,  // Change new_prices to new_price
        old_price: 299,
        category: 'Personal Care',
      },

    {
        id: 5,
        name: "Bamboo Hair Brush",
        image: p5_img,
        new_price: 150.0,
        old_price: 230.0,
        category: 'Personal Care',
    },
    {
      id: 8,
      name: 'Shampoo Bar',
      image: p8_img,
      new_price: 250.0,
      old_price: 350.0,
    }]
    export default data_product;