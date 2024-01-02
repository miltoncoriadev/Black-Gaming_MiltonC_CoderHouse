// * Configuracion
import React, { useEffect, useState } from "react";
// Import bootstrap
// import '../scss/styles.scss'
import * as bootstrap from "bootstrap";

// * Database
import products from "../data/products.json";

// * Estilos
import "./App.css";

// * Componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CardProduct from "./components/CardProduct/CardProduct";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Banner from "./components/Banner/Banner";

const App = () => {
    
    return (
        <div className="App">
            <Header />
            <NavBar />
            <ItemListContainer />
            <Banner />
            <div className="div-productos" style={{ margin: "auto" }}>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <CardProduct
                                id={product.id}
                                nombre={product.nombre}
                                precio={product.precio}
                                imagen={product.imagen}
                            />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};
export default App;
