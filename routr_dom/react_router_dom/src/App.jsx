import React from "react";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Review from "./components/Reviews_comp/Review";
function App()
{
  return(
    <div>
      <Nav/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>
          <Route path="/products/reviews/:id" element={<Review/>}></Route>
        </Routes>
      
    </div>
  )
}
export default App;