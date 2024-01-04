// * Configurations
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// * Hooks
import useProducts from "../../hooks/useProducts";

const ListProducts = ({ id }) => {
    const { products } = useProducts("/data/products.json");
    const toThousand = (n) =>
        n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const product = products.find((product) => product.id == id);

    const [cantidad, setCantidad] = useState(1);

    return (
        <div>
            {product ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <img
                        style={{
                            width: "40%",
                            height: "800px",
                            objectFit: "cover",
                        }}
                        src={product.imagen}
                        alt=""
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "40%",
                        }}
                    >
                        <h1>{product.nombre}</h1>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h2>${toThousand(product.precio)}</h2>
                            <h4 style={{ margin: "0 0.5rem 0 4rem" }}>{cantidad}</h4>
                            <button
                                onClick={() => {
                                    setCantidad(
                                        cantidad < product.stock
                                            ? cantidad + 1
                                            : cantidad
                                    );
                                }}
                                style={{
                                    border: "none",
                                    margin: "5px",
                                    background: "none",
                                    color: "violet",
                                    borderRadius: "5px",
                                }}
                            >
                                <AddIcon />
                            </button>
                            <button
                                onClick={() => {
                                    setCantidad(
                                        cantidad > 1 ? cantidad - 1 : cantidad
                                    );
                                }}
                                style={{
                                    border: "none",
                                    margin: "5px",
                                    background: "none",
                                    color: "violet",
                                    borderRadius: "5px",
                                }}
                            >
                                <RemoveIcon />
                            </button>
                        </div>
                        <p>{product.detalle}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ListProducts;
