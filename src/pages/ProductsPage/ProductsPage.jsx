// * Configurations
import React from "react";

// * Components
import ListProducts from "../../components/ListProducts/ListProducts";

const ProductsPage = () => {
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                    color: "white",
                }}
            >
                Todos los productos
            </h1>
            <ListProducts filter="all" />
        </div>
    );
};

export default ProductsPage;
