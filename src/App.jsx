import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Basket from "./components/Basket";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Basket" element={<Basket/>} />
      </Routes>
    </>
  );
}

export default App;
