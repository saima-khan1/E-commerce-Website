import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import { Contact } from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import LatestArrival from "./pages/LatestArrival";

import { Box, Container } from "@mui/material";
import BestCollection from "./pages/BestSellers";
import BestSellers from "./components/BestSellers";
import BestSellersDetail from "./components/BestSellersDetail";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Box
        sx={{
          minHeight: "100vh",

          backgroundColor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/latestarrival" element={<LatestArrival />} />
          <Route path="/bestsellers" element={<BestSellersDetail />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
