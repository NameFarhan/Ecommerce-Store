import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BasicTextFields({ login, handleTextFields, handleLoginTextFields }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const handleNameInput = (e) => {
    const value = e.target.value;
    setName(value);
    handleTextFields("name", value);

    // Validate username (example: check if it's empty)
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: value ? "" : "Name is required"
    }));
  };

  const handleEmailInput = (e) => {
    const value = e.target.value;
    setEmail(value);
    handleTextFields("email", value);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: emailRegex.test(value) ? "" : "Invalid email address"
    }));
  };

  const handlePassInput = (e) => {
    const value = e.target.value;
    setPass(value);
    handleTextFields("password", value);

    // Validate password strength (example: minimum 8 characters)
    const isStrongPassword = value.length >= 8; // Add more conditions as needed
    setErrors((prevErrors) => ({
      ...prevErrors,
      pass: isStrongPassword ? "" : "Password must be at least 8 characters long"
    }));
  };

  return (
    <Box sx={{ width: "370px", height: "32px", margin: "20px 0 40px 0", position: "relative", right: "4px" }}>
      {!login && (
        <Box
          component="form"
          sx={{ "& > :not(style)": { margin: "10px 10px", width: "100%", height: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleNameInput}
            value={name}
            id="name"
            type="text"
            label="Name"
            variant="standard"
            error={!!errors.name}
            helperText={errors.name}
          />
        </Box>
      )}

      <Box
        component="form"
        sx={{ "& > :not(style)": { margin: "10px 10px", width: "100%", height: "100%" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleEmailInput}
          value={email}
          id="email"
          type="email"
          label="Email or Phone Number"
          variant="standard"
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>

      <Box
        component="form"
        sx={{ "& > :not(style)": { margin: "10px 10px", width: "100%", height: "100%" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handlePassInput}
          value={pass}
          id="password"
          label="Password"
          type="password"
          variant="standard"
          error={!!errors.pass}
          helperText={errors.pass}
        />
      </Box>
    </Box>
  );
}
