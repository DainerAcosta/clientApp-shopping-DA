import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Pagination from '@material-ui/lab/Pagination';

import { listProducts } from '../../actions/productsAction';
import { Product as Prod } from '../../interfaces/interfaces';
import Product from './ProductCard';
import { ProductGrid, ProductListCont, ProgressCont } from './listProducts.style';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

const ListProducts = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector( (state: any) => state.listProd );

    useEffect(() => {
        dispatch( listProducts());
    }, [dispatch])

    return (
        <div>
            {isLoading ? (
                <ProgressCont>
                    <LinearProgress />
                </ProgressCont>
            ):
            (
            <>
                <ProductGrid>
                    {products.map((product: Prod) => (

                        <Product key={product.id} product={product} />

                    ))}
                </ProductGrid>
                <ProductListCont className={classes.root} style={{display: (products.length===0) ? ('none') : ('flex')}}>
                    <Pagination count={Math.ceil(products.length/4)} variant="outlined" shape="rounded" />
                </ProductListCont>
            </>
            )
            }
        </div>
    );
};

export default ListProducts;