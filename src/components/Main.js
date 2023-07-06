import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Product from "./Product/product.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";
import ModalProduct from "./Product/ModalProduct.jsx";
import Cart from "./Cart/cart.jsx";
import Login from "./registration/Login.jsx";
import Signup from "./registration/signup.jsx";

const MainComponent = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={ <Home/> } />
                <Route exact path='/product' element={ <Product/> } />
                <Route exact path='/about' element={ <About/> } />
                <Route exact path='/contact' element={ <Contact/> } />
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path='/product/:id' element={ <ModalProduct/> } />

            </Routes>

       
     
        </div>
    )
}
export default MainComponent;