import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useCartContext } from "../CartPageContext/CartContext";
import { useNavigate } from "react-router-dom";
// Function to truncate the title to the first 5 words
const truncateTitle = (title) => {
  const words = title.split(" ");
  return words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
};

const Cart_Content = () => {

  const navigate = useNavigate()


  const { cartPro, handleRemoveAllFromCart } = useCartContext();

  // Calculate the total subtotal price for all cart items
  const totalSubtotal = cartPro.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  const handleGoCheckOut = () => {
    navigate('/checkout')

  }

  return (
    <Box sx={{ padding: "6vh 10vw" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2vw",
          marginBottom: "80px",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "80px",
          padding: '6vh 2vw',

        }}
      >
        <Button
          size="large"
          sx={{ textTransform: "none" }}
          variant="outlined"
          color="inherit"
          onClick={handleRemoveAllFromCart}
        >
          Return All To Shop
        </Button>
        <Box
          sx={{
            border: "1px solid black",
            width: "470px",
            height: "324px",
            padding: "20px 20px",
            gap:'10px'
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Cart Total
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop:'24px'
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>${totalSubtotal.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{listStyle:'none',width:'100%',margin:' 14px 0 0 0',borderColor:'black'}} variant="inset" component="li" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop:'16px'
            }}
          >
            <Typography>Shipping</Typography>
            <Typography>Free</Typography>
          </Box>
          <Divider sx={{listStyle:'none',width:'100%',margin:' 14px 0 0 0',borderColor:'black'}} variant="inset" component="li" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop:'16px'
            }}
          >
             <Typography>Total</Typography>
             <Typography>${totalSubtotal.toFixed(2)}</Typography>
          </Box>
          {/* Proceed Button */}
        <Button onClick={handleGoCheckOut} sx={{width:'260px',height:'56px',textTransform:'none',margin:'36px auto auto auto',display:'block'}} color="error" variant="contained">Procees to checkout</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart_Content;
