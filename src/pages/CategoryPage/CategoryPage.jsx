// *Configurations
import React from "react";
import { useParams } from "react-router-dom";

// * Components
import ListProducts from "../../components/ListProducts/ListProducts";

const CategoryPage = () => {
    const { idCategoria } = useParams();

    return (
        <div>
            <h1 style={{color:'white', textAlign:'center', fontSize:'30px', marginTop:'2rem'}}>{idCategoria.replaceAll("-", " ").toUpperCase()}</h1>
            <ListProducts category={idCategoria} />
        </div>
    );
};

export default CategoryPage;
