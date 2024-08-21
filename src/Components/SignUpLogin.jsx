import Box from "@mui/material/Box";
import { Button, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Signupimage from "../Images/signup.svg";
import BasicTextFields from "../Mui-Components/SignUpTextField";
import TextButtons from "../Mui-Components/CreateAccountButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const SignUpLogin = ({ login }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    axios
      .post("http://localhost:3000/signup", formData)
      .then((response) => {
        console.log(response.data);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTextFields = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Log the createAccount prop whenever it changes

  return (
    <Box sx={{ padding: "60px 135px 60px 0" }}>
      <Grid container>
        <Grid item xs={7}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="Signup image"
              src={Signupimage}
            />
          </Box>
        </Grid>

        <Grid item xs={5}>
          <Box sx={{ height: "80%", display: "inline-block", padding: "10vh 5vw" }}>
            <Box>
              {login ? (
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "500",
                    marginBottom: "20px",
                    letterSpacing: "4px",
                  }}
                >
                  Log in to Exclusive
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "500",
                    marginBottom: "20px",
                    letterSpacing: "4px",
                  }}
                >
                  Create an account
                </Typography>
              )}
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                Enter your details below
              </Typography>
              <Box sx={{ position: "relative", bottom: "5px" }}>
                <BasicTextFields handleTextFields={handleTextFields} login={login} />
              </Box>
            </Box>

            {login ? (
              <Box
                sx={{
                  position: "relative",
                  top: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{ width: "143px", height: "56px", marginTop: '15px', textTransform: "none" }}
                  color="error"
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ textTransform: "none" }}
                  color="error"
                  variant="text"
                >
                  Forget Password?
                </Button>
              </Box>
            ) : (
              <Box sx={{ position: "relative", top: "170px" }}>
                <TextButtons handleCreateAccount={handleCreateAccount} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    top: "45px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px" }}>
                    Already have an account?
                  </Typography>
                  <Link
                    to="/login"
                    component={RouterLink}
                    sx={{
                      position: "relative",
                      left: "10px",
                      color: "#000",
                      fontSize: "16px",
                      textDecoration: "none",
                      fontWeight: "400",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "gray",
                        left: 0,
                        bottom: "-4px",
                        transform: "scaleX(0)",
                        transition: "transform 0.3s ease-in-out",
                        transformOrigin: "bottom right",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }}
                  >
                    Login
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpLogin;
