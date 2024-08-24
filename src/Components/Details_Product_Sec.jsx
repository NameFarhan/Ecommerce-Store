import React, { useEffect, useState } from "react"; // Add useState and useEffect
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

const Details_Product_Sec = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]); // State for product
  const [error, setError] = useState(null); // State for error

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
                  backgroundColor: "#F5F5F5",
                  marginBottom: "16px",
                }}
              >
                <Typography>{product.title}</Typography>
              </Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F5F5F5",
                  marginBottom: "16px",
                }}
              ></Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F5F5F5",
                  marginBottom: "16px",
                }}
              ></Box>
              <Box
                sx={{
                  width: "170px",
                  height: "138px",
                  backgroundColor: "#F5F5F5",
                }}
              ></Box>
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
              }}
            ></Box>
          </Grid>

          {/* Third Grid Item */}
          <Grid item xs={4.5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid black",
                padding: "10px 10px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details_Product_Sec;
