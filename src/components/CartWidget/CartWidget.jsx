import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='div-cart'>
            <Link to='/'>
                <ShoppingCartIcon className='icon-cart' />
                <p>Mi carrito</p>
                <span>5</span>
            </Link>
        </div>
    );
};

export default CartWidget;
