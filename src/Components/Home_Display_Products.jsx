import { Box, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import React from "react";

const Home_Display_Products = ({ products }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<StarIcon key={i} sx={{ color: "#FFAD33", fontSize: "18px" }} />);
    }
    return stars;
  };

  return (
    <>
      {/* Display products */}
      <Grid container rowSpacing={3}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "20px 10px",
                position: "relative", // Set position to relative to position overlay
                overflow: "hidden",   // Ensure overflow is hidden
                "&:hover .overlay": {
                  opacity: 1,         // Show overlay on hover
                  transform: "translateY(0)", // Move overlay into view
                },
              }}
            >
              {/* product image */}
              <Box
                sx={{
                  width: "270px",
                  height: "250px",
                  display: "flex",
                  cursor:'pointer',
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: '#F9F9F9',
                  position: "relative", // Ensure this is also relative
                  overflow: "hidden",   // Ensure overflow is hidden
                }}
              >
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    width: "65%",
                    height: "60%",
                    backgroundColor: "transparent",
                    objectFit: "contain",
                  }}
                  alt="Product_image"
                  src={product.image}
                />
                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "41px",
                    backgroundColor: "#000",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0, // Initially hidden
                    transform: "translateY(100%)", // Initially out of view
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    fontSize: "14px",
                    cursor:'pointer'
                  }}
                >
                  Add to Cart
                </Box>
              </Box>
              {/* product image */}

              {/* Product content */}
              <Box sx={{ padding: "20px 0px 0 0",cursor:'pointer', }}>
                <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                  {
                    product.title
                      .split(" ")                // Split the title into words
                      .slice(0, 3)               // Keep the first 3 words
                      .join(" ")                 // Join them back into a string
                  }
                  {product.title.split(" ").length > 3 && "...."} {/* Add ellipsis if more than 3 words */}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ color: "#DB4444", fontSize: "16px", fontWeight: "900" }}
                  >
                    ${product.price}
                  </Typography>
                  
                  {/* Star rating */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {renderStars(product.rating.rate)}
                    <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                      ({product.rating.count} reviews)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Product content end */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home_Display_Products;
