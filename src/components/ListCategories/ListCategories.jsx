// * Configurations
import React from "react";
import { Link } from "react-router-dom";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Components
import CardCategory from "../CardCategory/CardCategory";
import Spinner from "../Spinner/Spinner";

import "./ListCategories.css";

const ListCategories = () => {
    const { products, isLoading } = useProducts();

    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <div className="div-category" style={{ margin: "auto" }}>
            {isLoading ?
                <Spinner />
                :
                categories.map((category) => {
                    return (
                        <div key={category}>
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
