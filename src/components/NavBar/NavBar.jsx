// * Styles
import { left } from "@popperjs/core";
import "./NavBar.css";

// * Configurations
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <Link style={{borderRight: '1px solid white', paddingRight:'1.2rem'}} className="link" to='/categorias'>CATEGORIAS</Link>
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
