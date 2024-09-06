import {
  Box,
  Grid,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import { useCartContext } from "../CartPageContext/CartContext";
import ControlledRadioButtonsGroup from "../Mui-Components/Checkout_Radio";

const Checkout__Content = () => {
  const { cartPro } = useCartContext();

  // Function to truncate text
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartPro.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  return (
    <>
      <Box sx={{ padding: "80px 135px 80px 145px" }}>
        <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
          Billing Details
        </Typography>
        <Grid container spacing={6} sx={{ marginTop: "20px" }}>
          {/* Form Box */}
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12}>
                <Typography component="span">
                  First Name
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#DB4444", marginBottom: "10px" }}
                >
                  *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Company Name */}
              <Grid item xs={12}>
                <Typography sx={{ marginBottom: "10px" }}>
                  Company Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Street Address */}
              <Grid item xs={12}>
                <Typography component="span" sx={{ marginBottom: "10px" }}>
                  Street Address
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#DB4444", marginBottom: "10px" }}
                >
                  *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Apartment, floor, etc. */}
              <Grid item xs={12}>
                <Typography component="span" sx={{ marginBottom: "10px" }}>
                  Apartment, floor, etc.
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontStyle: "italic", marginBottom: "10px" }}
                >
                  (optional)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Town/City */}
              <Grid item xs={12}>
                <Typography component="span" sx={{ marginBottom: "10px" }}>
                  Town/City
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#DB4444", marginBottom: "10px" }}
                >
                  *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12}>
                <Typography component="span" sx={{ marginBottom: "10px" }}>
                  Phone Number
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#DB4444", marginBottom: "10px" }}
                >
                  *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Email Address */}
              <Grid item xs={12}>
                <Typography component="span" sx={{ marginBottom: "10px" }}>
                  Email Address
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#DB4444", marginBottom: "10px" }}
                >
                  *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "4px",
                    marginTop: "10px", // Margin applied
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Summary Box */}
          <Grid item xs={6}>
            <Box
              sx={{
                width: "500px",
                height: "600px",
                padding: "10px",
                overflowY: "auto",
              }}
            >
              {cartPro.map((sumaryItem) => (
                <Box
                  key={sumaryItem.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "60px",
                        width: "60px",
                        objectFit: "contain",
                        marginRight: "15px",
                      }}
                      alt="summary item comes from cart"
                      src={sumaryItem.image}
                    />
                    <Typography sx={{ fontSize: "16px" }} variant="body2">
                      {truncateText(sumaryItem.title, 3)}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "17px" }}>
                    ${sumaryItem.price}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>SubTotal:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  ${calculateSubtotal()}
                </Typography>
              </Box>
              <Divider sx={{ margin: "10px 0 0 0" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>Shipping</Typography>
                <Typography sx={{ fontSize: "16px" }}>Free</Typography>
              </Box>
              <Divider sx={{ margin: "13px 0 0 0" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>Total:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  ${calculateSubtotal()}
                </Typography>
              </Box>

              {/* Radio mui */}
              <ControlledRadioButtonsGroup />

              {/* Coupon Code  */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <TextField
                  placeholder="Coupon Code"
                  variant="outlined"
                />
                <Button sx={{textTransform:'none',width:'211px',height:'56px',fontSize:'16px'}} variant="contained" color="error">
                  Apply Coupon
                </Button>
              </Box>
              {/* Button place holder  */}


              <Button sx={{marginTop:'20px',height:'56px',width:'190px',textTransform:'none',fontSize:'16px'}} variant="contained" color="error">Place Order</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Checkout__Content;
