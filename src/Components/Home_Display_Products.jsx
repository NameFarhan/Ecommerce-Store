import { Box, Grid, Typography, Link, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import IconCheckboxes from '../Mui-Components/Wishlist_Herat'


const Home_Display_Products = ({ products }) => {
  const navigate = useNavigate()

  const handleMoreDet = (id) => {
    navigate(`/${id}`);
  };


  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <StarIcon key={i} sx={{ color: "#FFAD33", fontSize: "18px" }} />
      );
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
                position: "relative",
                overflow: "hidden",
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
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
                    width: "172px",
                    height: "180px",
                    backgroundColor: "transparent",
                    objectFit: "contain",
                  }}
                  alt="Product_image"
                  src={product.image}
                  onClick={() => handleMoreDet(product.id)} // Use navigate function on overlay click
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
                    opacity: 0,
                    transform: "translateY(100%)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMoreDet(product.id)} // Use navigate function on overlay click
                >
                  <Typography>Add To Cart</Typography>
                  {/* Heart Icon Button */}
                </Box>
                  <Box sx={{position:'absolute',bottom:'200px',right:'10px'}}>
                  <IconCheckboxes product={product}/>
                  </Box>
                
              </Box>

              {/* Product content */}
              <Box sx={{ padding: "20px 0px 0 0", cursor: "pointer" }}>
                <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                  {product.title.split(" ").slice(0, 3).join(" ")}
                  {product.title.split(" ").length > 3 && "...."}
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
                    ${product.price}
                  </Typography>

                  {/* Star rating */}
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
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