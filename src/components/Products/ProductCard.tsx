import React from 'react';
import { useDispatch } from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

import { Product } from '../../interfaces/interfaces';
import { ProductCont } from './productCard.style';
import { addProductOrder } from '../../actions/cartAction';
import { formatNumber } from '../../helpers/formatApp';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
      width: "150px",
    },
  }),
);

type ProductCardProps = {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const addProduct = () => {
      dispatch(addProductOrder(product));
    };

    return (
    <ProductCont>
      <Card className={'shadowHover'}>
          <CardMedia
          className={`${classes.cover} imgCont`}
          image={product.image}
          title="Live from space album cover"
          />
          <div className={`${classes.details} contentCont`}>
              <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                  {product.name_product}
              </Typography>
              <Chip size="small" label={product.category} />
              <Typography variant="subtitle2" color="textSecondary">
                  {product.description}
              </Typography>
              </CardContent>
              <div className={`${classes.controls} cardControl`}>
              <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => addProduct()}
              >
                  Add to cart
              </Button>
              <Typography variant="subtitle1" color="textSecondary" className="priceCont">
                  {formatNumber(product.price)}
              </Typography>
              </div>
          </div>
      </Card>
    </ProductCont>
    );
}

export default ProductCard;
