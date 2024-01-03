// * Configurations
import { useNavigate } from "react-router-dom";

// * Components
import Banner from "../../components/Banner/Banner";
import ListProducts from "../../components/ListProducts/ListProducts";

// * Styles
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Banner />
            <div className="Home">
                <h1 className="title-filter">Productos en ofertas</h1>
                <ListProducts filter="descuento" />
                <h1 className="title-filter">Productos destacados</h1>
                <ListProducts filter="destacado" />
                <button
                    onClick={() => {
                        navigate("/productos");
                    }}
                    className="btn-products"
                >
                    Todos los Productos
                </button>
            </div>
        </div>
    );
};

export default HomePage;
