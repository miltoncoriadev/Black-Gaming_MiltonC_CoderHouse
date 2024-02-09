import "./Header.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className="div-logo">
                <Link className="link-logo" to="/">
                    <img className="logo" src={logo} alt="logo" />
                    <h1>Black Gaming</h1>
                </Link>
            </div>

            <div className="div-cart">
                <CartWidget />
            </div>

            
        </div>
    );
};

export default Header;
