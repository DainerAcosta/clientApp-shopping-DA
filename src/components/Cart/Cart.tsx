import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProductCart from './ProductCart';
import { CartCont } from './cart.style';
import { formatNumber } from '../../helpers/formatApp';


const Cart = () => {

    const { order, priceTotal } = useSelector((state: any) => state.cart);

    return (
        <CartCont>
          <Typography component="h5" variant="h5">
              Shopping Cart
          </Typography>
          { order.length > 0 ?
            (
              <div className="cartControl">
                <Button className="contItem"><Link to="/checkout">Checkout</Link></Button>
              </div>
            ):null
          }

          {
            order.map((productOrder: any) => (
              <ProductCart key={productOrder.id} productOrder={productOrder} />))
          }

          { order.length > 0 ?
            (
              <div className="cartControl">
                <div className="cont-2">
                  <div className="w-50 continue">
                    <Button className="contItem"><Link to="/">Continue shopping</Link></Button>
                  </div>
                  <h2 className="contItem w-50">{formatNumber(priceTotal)}</h2>
                </div>
                
                <Button className="contItem"><Link to="/checkout">Checkout</Link></Button>
              </div>
            ):
            (
              <h1 className="msn">Aun no agregas productos al carrito!</h1>
            )
          }  
        </CartCont>
    );
};

export default Cart;