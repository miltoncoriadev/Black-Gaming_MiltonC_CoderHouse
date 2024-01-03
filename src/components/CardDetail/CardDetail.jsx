// * Configurations
import React from "react";
import { Link } from "react-router-dom";

// * Hooks
import useProducts from "../../hooks/useProducts";
import { colors } from "@mui/material";

const ListProducts = ({ id }) => {
    const { products } = useProducts("/data/products.json");

    const product = products.find((product) => product.id == id);

    return (
        <div>
            {product ? (
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
                    <img style={{width:'40%', height:'500px', objectFit:'cover'}} src={product.imagen} alt="" />
                    <div style={{display:'flex', flexDirection:'column', width:'40%'}}>
                        <h1>{product.nombre}</h1>
                        <h2>${product.precio}</h2>
                        <p>{product.detalle}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ListProducts;
