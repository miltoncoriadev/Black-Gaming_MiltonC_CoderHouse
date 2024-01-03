// * Configurations
import React from "react";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Components
import CardProduct from "../../components/CardProduct/CardProduct";

const ProductsPage = () => {
    const { products } = useProducts("/data/products.json");
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
        </div>
    );
};

export default ProductsPage;
