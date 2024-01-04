// * Configurations
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * Styles
import "./App.css";

// * Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

// * Pages
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <NavBar />
                <ItemListContainer />
                
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/productos" element={<ProductsPage />}></Route>
                    <Route path="/producto/detalle/:idProducto" element={<DetailPage />}></Route>
                    <Route path="/categoria/:idCategoria" element={<CategoryPage />}></Route>
                    <Route path="/categorias" element={<CategoriesPage />}></Route>
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
};
export default App;
