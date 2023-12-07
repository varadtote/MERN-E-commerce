import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product-list/Components/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </>
  );
};

export default ProductDetailsPage;
