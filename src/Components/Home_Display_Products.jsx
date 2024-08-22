

import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Home_Display_Products = ({ products }) => {
  return (
    <>
    {/* Display products */}
    <Grid container rowSpacing={3}>
          {products.map(product => (
                <Grid item xs={3}>
                    <Box sx={{width:'100%',height:'100%',border:'1px solid orange'}}>

                        {/* product image  */}
                    <Box sx={{width:'270px',height:'250px',backgroundColor:'#F5F5F5',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        
                    </Box>
                    {/* product image  */}


                    {/* Product content */}
                    <Box sx={{}}>

                    </Box>
                    {/* Product content end */}
                    </Box>
                </Grid>
          ))}
          </Grid>
    </>
)
}

export default Home_Display_Products