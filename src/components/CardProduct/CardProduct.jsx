import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "./CardProduct.css";

const CardProduct = ({ product }) => {
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <Card className="Card">
            <CardMedia component="img" alt={product.name} className="img" image={product.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="title">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className="price">
                    ${toThousand(product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price)}
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
