import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useWishContext } from "../WishContext/WishContext";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
const Wishlist_Content = () => {
  const navigate = useNavigate()
  const { wishpro, handleRemoveWish } = useWishContext(); // Correctly called as a function

  const handleGoCart = () => {
    navigate('/cart')
  }
  return (
    <>
      <Box sx={{ padding: "6vh 10vw" }}>
        <Box sx={{marginBottom:'6vh'}}>
    <Typography sx={{fontSize:'20px',fontWeight:'400'}}>Wishlist ({wishpro.length})</Typography>
    </Box>
    <Grid container spacing={4}>
      {wishpro.map((wishitem) => (
        <Grid item xs={3} key={wishitem.id}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "20px 10px",
            position: "relative",
            overflow: "hidden",
            "&:hover .overlay": {
              opacity: 1,
              transform: "translateY(0%)",
            },
          }}
        >
          {/* Product image */}
          <Box
            sx={{
              width: "270px",
              height: "250px",
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              sx={{
                display: "block",
                width: "152px",
                height: "150px",
                position:'relative',
                bottom:'10px',
                backgroundColor: "transparent",
                objectFit: "contain",
              }}
              alt="Product_image"
              src={wishitem.image}
              // onClick={() => handleMoreDet(wishitem.id)} // Use navigate function on overlay click
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
                opacity: 1,
                transform: "translateY(0%)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                fontSize: "14px",
              }}
              // onClick={() => handleMoreDet(wishitem.id)} // Use navigate function on overlay click
            >
              <ShoppingCartOutlinedIcon sx={{marginRight:'10px'}}/>
              <Typography onClick={handleGoCart}>Add to Cart</Typography>
              {/* Heart Icon Button */}
            </Box>
              <Box sx={{position:'absolute',bottom:'200px',right:'10px'}}>
              <DeleteOutlineOutlinedIcon onClick={() => handleRemoveWish(wishitem.id)} sx={{marginRight:'20px'}}/>
              </Box>
            
          </Box>

          {/* Product content */}
          <Box sx={{ padding: "20px 0px 0 0", cursor: "pointer" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
              {wishitem.title.split(" ").slice(0, 3).join(" ")}
              {wishitem.title.split(" ").length > 3 && "...."}
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
                sx={{
                  color: "#DB4444",
                  fontSize: "16px",
                  fontWeight: "900",
                }}
              >
                ${wishitem.price}
              </Typography>
            </Box>
          </Box>
          {/* Product content end */}
        </Box>
      </Grid>
      ))}
      </Grid>
      </Box>
    </>
  );
};

export default Wishlist_Content;
