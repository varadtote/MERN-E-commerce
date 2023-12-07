import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import { Route, Routes, Link, Outlet } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/prd" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}
