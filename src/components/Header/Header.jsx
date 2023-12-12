import './Header.css';
import CartIcon from '../CartIcon/CartIcon';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
    <div className="Header">
        <div className='div-logo'>
            <img className='logo' src={logo} alt="logo" />
            <h1>Black Gaming</h1>
        </div>
        <div className='div-search'>
            <form action="/">
                <input type="search" name="search" id="search" placeholder='Buscar' />
            </form>
        </div>
        <div className='div-cart'>
            <CartIcon/>
        </div>
    </div>
    );
};

export default Header;
