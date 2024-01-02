import "./NavBar.css";
import Categories from '../Categories/Categories'

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <Categories />
                <li>
                    <a href="#">Categorías</a>
                </li>
                <li>
                    <a href="#">PC de Escritorio</a>
                </li>
                <li>
                    <a href="#">Notebooks</a>
                </li>
                <li>
                    <a href="#">Placas de Video</a>
                </li>
                <li>
                    <a href="#">Procesadores</a>
                </li>
                <li>
                    <a href="#">Monitores</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
