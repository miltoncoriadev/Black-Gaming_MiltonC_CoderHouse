// * Configurations
import React from "react";
import { Link } from "react-router-dom";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Styles
import "./ListProducts.css";

// * Components
import CardProduct from "../../components/CardProduct/CardProduct";

const ListProducts = ({ filter, category }) => {
    const { products } = useProducts("/data/products.json");
    products.sort((a, b) => a.precio - b.precio);

    if (filter == "all") {

        return (
            <div className="div-productos" style={{ margin: "auto" }}>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link
                                className="link-product"
                                to={`/producto/detalle/${product.id}`}
                            >
                                <CardProduct
                                    id={product.id}
                                    nombre={product.nombre}
                                    precio={product.precio}
                                    imagen={product.imagen}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    } else if (filter) {
        const productsFilter = products.filter(
            (product) => product.filter == filter
        );

        return (
            <div
                className="div-productos carrousel-basic"
                style={{ margin: "auto" }}
            >
                {productsFilter.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link
                                className="link-product"
                                to={`/producto/detalle/${product.id}`}
                            >
                                <CardProduct
                                    id={product.id}
                                    nombre={product.nombre}
                                    precio={product.precio}
                                    imagen={product.imagen}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    } else if (category) {
        const productsFilter = products.filter(
            (product) => product.categoria == category
        );

        return (
            <div className="div-productos" style={{ margin: "auto" }}>
                {productsFilter.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link
                                className="link-product"
                                to={`/producto/detalle/${product.id}`}
                            >
                                <CardProduct
                                    id={product.id}
                                    nombre={product.nombre}
                                    precio={product.precio}
                                    imagen={product.imagen}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default ListProducts;
