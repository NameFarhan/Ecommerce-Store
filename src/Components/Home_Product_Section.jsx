import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home_Display_Products from './Home_Display_Products';

const Home_Product_Section = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch products from the API
    axios.get('https://fakestoreapi.com/products?limit=8')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: '5vh 10vw' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box sx={{ width: '20px', height: '40px', borderRadius: '4px', backgroundColor: '#DB4444' }}></Box>
          <Typography sx={{ color: '#DB4444', fontSize: '16px', fontWeight: '700' }}>Our Products</Typography>
        </Box>

        <Typography sx={{ fontSize: '36px', fontWeight: '700' }}>Explore Our Products</Typography>
        
        {/* Display products */}
        <Home_Display_Products products={products}/>
      </Box>
    </Box>
  );
};

export default Home_Product_Section;
