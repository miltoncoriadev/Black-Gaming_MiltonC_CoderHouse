import React, { useState } from 'react'
import './CartCard.css'

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, incrementAmount, updateAmount } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

import { TextField, Box } from "@mui/material";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const CartCard = ({ item }) => {
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(item.amount)

    const handlerRemoveCart = () => {
        dispatch(removeCart(item.id))
    }

    const onChangeAmount = (e) => {

        let value = parseInt(e.target.value);

        if (isNaN(value)) {
            value = 1;
        } else {
            dispatch(updateAmount({ id: item.id, amount: parseInt(e.target.value) }))
        }

        setAmount(value);
    }

    return (
        <div className='cart-card'>

            <div>
                <img className='img-card' src={item.image} alt="" />
            </div>
            <div>
                <Link className='link-cart' to={`/producto/detalle/${item.id}`}>
                    <h4>{item.name}</h4>
                    <h6>${toThousand(item.price_cart)}</h6>
                </Link>
            </div>

            <div>
                <Button color='error' onClick={handlerRemoveCart} variant="outlined" startIcon={<DeleteIcon />}>
                    Eliminar
                </Button>

                <input type="number" onChange={onChangeAmount} min={1} max={item.stock} value={amount} className='input-amount' />
            </div>
        </div>
    )
}

export default CartCard