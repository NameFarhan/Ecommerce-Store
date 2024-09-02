import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useCartContext } from "../CartPageContext/CartContext";

// Function to truncate the title to the first 5 words
const truncateTitle = (title) => {
  const words = title.split(" ");
  return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
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
        const subtotalprice = cartItem.price * cartItem.quantity;
        return (
          <Box
            sx={{
              marginBottom: "40px",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 1.5vw",
            }}
            key={cartItem.id}
          >
            {/* Image Box */}
            <Box
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "60px",
                  width: "50px",
                  objectFit: "contain",
                }}
                alt="cart item image"
                src={cartItem.image}
              />
              <Typography sx={{ fontSize: "16px", marginLeft: "20px" }}>
                {truncateTitle(cartItem.title)}
              </Typography>
            </Box>
            {/* Price Box */}
            <Box sx={{ width: "20%" }}>
              <Typography sx={{ fontSize: "16px", marginLeft: "20px" }}>
                ${cartItem.price}
              </Typography>
            </Box>

            {/* Quantity Selector Box */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "42px",
              }}
            >
                <Typography sx={{ padding: "0 10px" }}>
                  {cartItem.quantity}
                </Typography>
             
            </Box>

            {/* Subtotal Box */}
            <Box
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "12px",
              }}
            >
              <Typography>${subtotalprice.toFixed(2)}</Typography>
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
