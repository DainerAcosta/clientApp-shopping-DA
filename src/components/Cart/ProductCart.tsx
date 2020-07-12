import React from 'react';
import { useDispatch } from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { ProductCartCont } from './productCart.style';
import { removeProductOrder, removeOneProductOrder, addProductOrder } from '../../actions/cartAction';
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
      width: 100,
      height: 100,
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
    },
  }),
);

const ProductCart: React.FC<any> = ({ productOrder }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const removeProduct = () => {
      dispatch(removeProductOrder(productOrder.id));
    }

    const removeOneProduct = () => {
      dispatch(removeOneProductOrder(productOrder));
    }

    const addProduct = () => {
      dispatch(addProductOrder(productOrder));
    }

    return (
      <>
        { productOrder.quantity > 0 ?
          (
            <ProductCartCont>
              <Card className={'shadowHover cardCont'}>
                <CardMedia
                className={classes.cover}
                image={productOrder.image}
                title="product"
                />
                <div className={`${classes.details} gridProductCart`}>
                  <div className={classes.controls}>
                    <CardContent className={classes.content}>
                      <div className="cardContent">
                        <Typography component="h5" variant="h5" className="contInFlex">
                          {productOrder.name_product}
                        </Typography>
                        <DeleteOutlineIcon className="contInFlex btnDelete" onClick={removeProduct}/>
                      </div>
                      <Chip size="small" label={productOrder.category}/>
                    </CardContent>
                  </div>
                  <div className={`${classes.controls} gridControl`}>
                    <div>
                      <h6>unit price</h6>
                      <Typography variant="subtitle1" color="textSecondary">
                        {formatNumber(productOrder.price)}
                      </Typography>
                    </div>
                    <div className="contCounter">
                      <RemoveCircleOutlineIcon className="btn btnRemove" onClick={removeOneProduct}/>
                      <Chip variant="outlined" size="small" label={productOrder.quantity} />
                      <AddCircleOutlineIcon className="btn btnAdd" onClick={addProduct}/>
                    </div>
                    <Typography variant="subtitle1" color="textSecondary">
                        {formatNumber(productOrder.price * productOrder.quantity)}
                    </Typography>
                  </div>
                </div>
              </Card>
            </ProductCartCont>
          )
          :
          null
        }
      </>
    );
};

export default ProductCart;