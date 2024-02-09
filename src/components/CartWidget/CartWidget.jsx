import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import './CartWidget.css'

const CartWidget = () => {
    const counterCart = useSelector((state) => state.cart.products.length);
    return (
        <div className='div-cart'>
            <Link to='/carrito'>
                <ShoppingCartIcon className='icon-cart' />
                <p>Mi carrito</p>
                <span>{counterCart}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
