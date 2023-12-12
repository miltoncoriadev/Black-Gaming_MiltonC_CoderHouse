import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './CartIcon.css'

const CartWidget = () => {
    return (
        <div className='div-cart'>
            <ShoppingCartIcon />
            <p>Mi carrito</p>
            <span>5</span>
        </div>
    );
};

export default CartWidget;
