// * Configurations
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, incrementAmount } from "../../redux/features/cart/cartSlice";

// * Hooks
import useProducts from "../../hooks/useProducts";

// * Components
import Spinner from "../Spinner/Spinner";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ListProducts = ({ id }) => {
    let { products, isLoading } = useProducts("id", id);
    const product = products[0];

    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();
    const counterCart = useSelector((state) => state.cart.products);

    const handlerAddCart = () => {
        const productFound = counterCart.find(product => product.id === id)
        if (productFound) {
            dispatch(incrementAmount({ id: productFound.id, amount: amount }))

            Toastify({
                text: `Ya se agregó anteriormente el producto`,
                duration: 3000,
                offset: {
                    x: 20,
                    y: 50
                  },
            }).showToast();
        } else {
            dispatch(addCart({
                stock: product.stock,
                image: product.image,
                price: product.price,
                price_cart: product.price * amount,
                amount: amount,
                detail: product.detail,
                model: product.model,
                brand: product.brand,
                name: product.name,
                id: product.id,
                category: product.category
            }))

            Toastify({
                text: "El producto fue añadido al carrito",
                duration: 3000,
                offset: {
                    x: 50,
                    y: 50
                  },
            }).showToast();
        }
    }
    // const handlerRemoveCart = () => {
    //     dispatch(removeCart(id))
    // }


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isLoading ? (
                <Spinner />
            ) : product ? (
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
                        src={product.image}
                        alt={product.name}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "40%",
                        }}
                    >
                        <h1>{product.name}</h1>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h2>${toThousand(product.price)}</h2>
                            <h4 style={{ margin: "0 0.5rem 0 4rem" }}>{amount}</h4>
                            <button
                                onClick={() => {
                                    setAmount(amount < product.stock ? amount + 1 : amount);
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
                                    setAmount(amount > 1 ? amount - 1 : amount);
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
                            <div style={{margin: "0 0.5rem 0 4rem"}}>
                            <Button onClick={handlerAddCart} variant="contained">Agregar al carrito</Button>
                            </div>
                            
                        </div>
                        
                        <div>
                            
                        </div>
                        <p>{product.detail}</p>

                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ListProducts;
