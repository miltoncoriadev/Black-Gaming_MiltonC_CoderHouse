// * Styles
import "./NavBar.css";

// * Configurations
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <Link className="link" to='/'>Inicio</Link>
                <Link className="link" to='/categoria/pc-de-escritorio'>PC de Escritorio</Link>
                <Link className="link" to='/categoria/notebooks'>Notebooks</Link>
                <Link className="link" to='/categoria/placas-de-video'>Placas de Video</Link>
                <Link className="link" to='/categoria/procesadores'>Procesadores</Link>
                <Link className="link" to='/categoria/monitores'>Monitores</Link>
            </ul>
        </div>
    );
};

export default NavBar;
