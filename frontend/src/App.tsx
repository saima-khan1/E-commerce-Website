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
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <NavBar />
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
        </Routes>
      </Container>
    </>
  );
}

export default App;
