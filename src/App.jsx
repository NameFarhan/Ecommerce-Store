import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Details__Page from "./Pages/Details__Page";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:id" element={<Details__Page />} /> {/* Dynamic route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
