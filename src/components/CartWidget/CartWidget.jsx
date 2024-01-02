import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='div-cart'>
            <a href="">
                <ShoppingCartIcon className='icon-cart' />
                <p>Mi carrito</p>
                <span>5</span>
            </a>
        </div>
    );
};

export default CartWidget;
