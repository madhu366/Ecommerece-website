import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext'; // Import your context provider
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Create the root for React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <ShopContextProvider>
    <BrowserRouter>
      <App /> {/* Wrap the App component with both ShopContextProvider and BrowserRouter */}
    </BrowserRouter>
  </ShopContextProvider>
);

// Optional: Measure performance
reportWebVitals();
