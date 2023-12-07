import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import { Route, Routes, Link, Outlet } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}
