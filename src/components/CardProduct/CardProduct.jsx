import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProduct = ({ name, precio, cuotas, img }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={name}
                height="240"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {precio}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
            </CardActions>
        </Card>
    );
};

export default CardProduct;
