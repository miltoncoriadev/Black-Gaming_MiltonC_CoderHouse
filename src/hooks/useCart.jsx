import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const useCart = () => {
    const cart = useSelector((state) => state.cart.products)
    const [cartItems, setCartItems] = useState(cart)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setCartItems(cart);

        setTimeout(()=> {
            setIsLoading(false);
        }, 1000)
    }, [cart])

    return { cartItems, isLoading }
}

export default useCart