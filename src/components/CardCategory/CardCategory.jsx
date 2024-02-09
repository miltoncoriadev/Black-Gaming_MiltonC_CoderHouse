import "./CardCategory.css";

const CardCategory = ({ category }) => {
    return (
        <div
            className="Category"
            style={{
                background: `url(/src/assets/img/${category}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="title-category">{category.replaceAll("-", " ").toUpperCase()}</h2>
        </div>
    );
};

export default CardCategory;
