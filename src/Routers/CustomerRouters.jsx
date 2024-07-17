import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product></Product>}></Route>
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/account/order" element={<Order></Order>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails></OrderDetails>}></Route>

       
        {/* <OrderDetails></OrderDetails> */}
      </Routes>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerRouters;
