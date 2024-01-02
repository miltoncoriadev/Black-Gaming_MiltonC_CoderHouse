import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardProduct.css";

const CardProduct = ({ id, nombre, precio, imagen }) => {
    const toThousand = (n) =>
        n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <Card className="Card">
            <CardMedia
                component="img"
                alt={`${id}-${imagen}`}
                className="img"
                image={imagen}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="title"
                >
                    {nombre}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="price"
                >
                    ${toThousand(precio)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className="btn">
                    Comprar
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardProduct;
