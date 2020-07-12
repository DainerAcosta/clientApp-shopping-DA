import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { formatNumber } from '../../helpers/formatApp';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  const { order, priceTotal } = useSelector((state: any) => state.cart);

  let quantityProducts = 0;
  order.map((product: any) => quantityProducts += product.quantity); 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home" style={{color: "white"}}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Shopping-DA
          </Typography>
          <div>
            <Link to="/cart" style={{color: "white"}}>
              <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                // style={{display: `${window.location.pathname === '/cart' ? 'none': null}`}}
                >
                { priceTotal > 0 ?
                  (
                    <Typography style={{padding: "0px 10px"}}>
                      { formatNumber(priceTotal) }
                    </Typography>
                  )
                  :
                  null
                }
                <Badge badgeContent={ quantityProducts } color="secondary" invisible={(order.length > 0) ? (false) : (true)}>
                    <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;