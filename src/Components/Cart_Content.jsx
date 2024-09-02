import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useCartContext } from "../CartPageContext/CartContext";

const truncateTitle = (title) => {
  const words = title.split(' ');
  return words.slice(0, 3).join(' ') + (words.length > 3 ? '...' : '');
};

const Cart_Content = () => {
  const { cartPro, handleRemoveAllFromCart } = useCartContext();

  return (
    <Box sx={{ padding: "6vh 10vw" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2vw",
          marginBottom: "6vh",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Product
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Price
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Quantity
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Subtotal
        </Typography>
      </Box>
      {cartPro.map((cartItem) => {
        return (
          <Box
            key={cartItem?.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: '50px',
                  width: '50px',
                  objectFit:'contain'
                }}
                alt="cartItem image"
                src={cartItem.image}
              />

              <Typography sx={{ marginLeft: '22px',fontSize:'16px' }}>
                {truncateTitle(cartItem.title)}
              </Typography>
            </Box>

            {/* price Box */}
            <Box sx={{position:'relative',right:'160px' }}>
              <Typography sx={{fontSize:'16px'}}>${cartItem.price}</Typography>
            </Box>


            <Box sx={{ border: "1px solid black" }}></Box>

            {/* sub total Box */}
            <Box sx={{ border: "1px solid black",position:'relative',right:'70px' }}>
              
            </Box>
          </Box>
        );
      })}

      {/* Delete Button */}
      <Button
        size="large"
        sx={{ textTransform: "none" }}
        variant="outlined"
        color="inherit"
        onClick={handleRemoveAllFromCart}
      >
        Return All To Shop
      </Button>
    </Box>
  );
};

export default Cart_Content;
