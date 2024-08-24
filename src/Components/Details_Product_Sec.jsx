import React, { useEffect, useState } from "react"; // Add useState and useEffect
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // Import StarIcon
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Details_Product_Sec = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null to handle no data scenario
  const [error, setError] = useState(null); // State for error
  const [quantitycount, setQuantityCount] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response.data && response.data.id) {
          setProduct(response.data);
          setError(null);
        } else {
          setError("Product not found");
          setProduct(null);
        }
      })
      .catch((error) => {
        setError("Error fetching product!");
        setProduct(null);
      });
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <StarIcon key={i} sx={{ color: "#FFAD33", fontSize: "18px" }} />
      );
    }
    if (rating % 1 !== 0) {
      stars.push(
        <StarIcon
          key="half"
          sx={{
            color: "#FFAD33",
            fontSize: "18px",
            clipPath: "inset(0 50% 0 0)",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Box sx={{ padding: "6vh 10vw" }}>
        <Grid container spacing={3}>
          {/* First Grid Item */}
          <Grid item xs={2}>
            <Box sx={{ width: "100%", height: "100%", padding: "0" }}>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F1F1F1",
                  marginBottom: "16px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width:'121px',
                    height:'114px',
                    objectFit:'contain',
                    opacity:'.8'
                  }}
                  alt='product_image'
                  src={product?.image}
                />
              </Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F1F1F1",
                  marginBottom: "16px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width:'121px',
                    height:'114px',
                    objectFit:'contain',
                    opacity:'.8'
                  }}
                  alt='product_image'
                  src={product?.image}
                />
              </Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F1F1F1",
                  marginBottom: "16px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width:'121px',
                    height:'114px',
                    objectFit:'contain',
                    opacity:'.8'
                  }}
                  alt='product_image'
                  src={product?.image}
                />
              </Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F1F1F1",
                  marginBottom: "16px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width:'121px',
                    height:'114px',
                    objectFit:'contain',
                    opacity:'.8'
                  }}
                  alt='product_image'
                  src={product?.image}
                />
              </Box>
            </Box>
          </Grid>

          {/* Second Grid Item */}
          <Grid item xs={5.5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "10px 10px",
                backgroundColor: "#F5F5F5", 
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >
                <Box
                  component="img"
                  sx={{
                    width:'446px',
                    height:'315px',
                    objectFit:'contain',
                    opacity:'.8'
                  }}
                  alt='product_image'
                  src={product?.image}
                />
              </Box>
          </Grid>

          {/* Third Grid Item */}
          <Grid item xs={4.5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "10px",
              }}
            >
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {product?.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  margin: "5px 0",
                }}
              >
                {product && renderStars(product.rating.rate)}
                <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                  {product && `(${product.rating.count} reviews)`}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  letterSpacing: "3%",
                  marginTop: "15px",
                }}
              >
                ${product?.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "3%",
                  marginTop: "15px",
                }}
              >
                {product?.description}
              </Typography>

              <Box
                sx={{
                  height: "2px",
                  backgroundColor: "black",
                  margin: "15px 0",
                  opacity: ".2",
                  margin: "24px 0",
                }}
              ></Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "15px",
                  gap: "19px",
                }}
              >
                <ButtonGroup>
                  <Button
                    disabled={quantitycount === 0}
                    sx={{
                      width: "40px",
                      opacity: ".6",
                      height: "44px",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid black",
                    }}
                    onClick={() => setQuantityCount(quantitycount - 1)}
                  >
                    -
                  </Button>
                  <Button
                    sx={{
                      width: "80px",
                      height: "44px",
                      color: "#000",
                      opacity: ".6",
                      backgroundColor: "#fff",
                      border: "1px solid black",
                    }}
                  >
                    {quantitycount}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "41px", height: "44px", color: "#fff" }}
                    onClick={() => setQuantityCount(quantitycount + 1)}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <Button
                  color="error"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    width: "165px",
                    height: "44px",
                  }}
                  variant="contained"
                >
                  Buy Now
                </Button>

                <Button
                  sx={{
                    border: "1px solid black",
                    opacity: ".6",
                    width: "40px",
                    height: "40px",
                  }}
                  variant="outlined"
                >
                  <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details_Product_Sec;
