import React from "react";
import "./Categories.css";

import products from "../../../data/products.json";

const NavCollapse = () => {
    const categorias = [
        ...new Set(products.map((producto) => producto.categoria)),
    ];
    console.log(categorias);
    return (
        <div className="Nav">
            <li className="link"></li>
        </div>
    );
};

export default NavCollapse;
