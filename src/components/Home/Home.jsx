import React from "react";
import banner from '../../../src/assets/images/banner.jpg'
import "../Home/Home.css"
import Product from "../Product/product";
import Footer from "../footer/footer";

const Home = () => {
    return(
        <div className="hero">
            <div class="card text-bg-dark border-0">
            <img src={banner} class="card-img" alt="banner" />
            <div class="card-img-overlay d-flex flex-column justify-content-around">
                <div className="container">

                <h5 class="card-title display-3 fw-bolder">New Season Arrible</h5>
                <p class="card-text lead fs-2">Check out all the trends.</p>
                </div>
            </div>
            </div>
        <Product/>
        <Footer/>
        </div>
    )
}
export default Home