// * Configurations
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Styles
import "./ListProducts.css";

// * Components
import CardProduct from "../../components/CardProduct/CardProduct";
import Spinner from "../../components/Spinner/Spinner"

const ListProducts = ({ filter, filterParam, limit }) => {
    const { products, isLoading } = filter && filterParam ? useProducts(filter, filterParam, limit) : useProducts("")

    products.sort((a, b) => a.price - b.price);

    return (
        <div className="div-productos" style={{ margin: "auto" }}>
            {isLoading ? (
                <Spinner/>
            ) : products.length > 0 ? (
                products.slice(0, limit).map((product) => {
                    return (
                        <div key={product.id}>
                            <Link className="link-product" to={`/producto/detalle/${product.id}`}>
                                <CardProduct product={product} />
                            </Link>
                        </div>
                    );
                }))
                : (
                    <p style={{ color: "white", fontSize: "18px" }}>No se encontró ningún producto</p>
                )}
        </div>
    );
};

export default ListProducts;
