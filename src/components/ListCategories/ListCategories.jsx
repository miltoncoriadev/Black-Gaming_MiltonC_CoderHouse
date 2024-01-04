// * Configurations
import React from "react";
import { Link } from "react-router-dom";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Components
import CardCategory from "../CardCategory/CardCategory";

import "./ListCategories.css";

const ListCategories = () => {
    const { products } = useProducts("/data/products.json");

    const categorias = [
        ...new Set(products.map((producto) => producto.categoria)),
    ];

    return (
        <div>
            {categorias.map((category) => {
                return (
                    <div>
                        <Link to={`/categoria/${category}`} className="Categories">
                            <CardCategory category={category} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ListCategories;
