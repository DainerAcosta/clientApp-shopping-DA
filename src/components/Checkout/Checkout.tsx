import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ContCheckout } from './checkout.style';
import { useSelector, useDispatch } from 'react-redux';
import { formatNumber } from '../../helpers/formatApp';
import { useForm } from '../../hooks/useForm';
import { getUserCheckout, resetLookupUser, postFetchBuyUserNew, postFetchBuyUserExisting } from '../../actions/checkoutAction';
import { removeOrder } from '../../actions/cartAction';
import { RedirectThanks } from '../../routers/AppRouter';


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    table: {
        minWidth: '100%',
      },
  }),
);

const Checkout = () => {
    const classes = useStyles();
    const { order, priceTotal } = useSelector((state: any) => state.cart);
    const { user, isLoading, state, stateBuy } = useSelector((state: any) => state.check)
    const [value, setValue] = React.useState('new');

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const [formValues, handleInputChange]: any = useForm({
        full_name: '',
        dni: '',
        address: '',
        phone_number: '',
        email: '',
        email_existing: '',
    });

    const { full_name, 
            dni, 
            address, 
            phone_number, 
            email, 
            email_existing }: any = formValues;
    
    const sendLookup = (e: any) => {
        e.preventDefault();
        dispatch(getUserCheckout(email_existing));
    }

    const resetLookup = () => {
        dispatch(resetLookupUser());
    }

    const fetchBuyUserNew = () => {
        const userAndBuy: any = {
            user: {
                f_full_name: full_name,
                f_dni: dni,
                f_address: address,
                f_phone_number: phone_number,
                f_email: email,
            },
            buy: {
                f_products: order,
                f_price_total: priceTotal,
            }
        };
        if (full_name === '' || dni === '' || address === '' || phone_number === '' || email === '') {
            return
        }
        dispatch(postFetchBuyUserNew(userAndBuy));
        dispatch(removeOrder());
    }

    const fetchBuyUserExisting = () => {
        const { 
            id,
            full_name, 
            dni, 
            address, 
            phone_number, 
            email }: any = user;

        const userAndBuy: any = {
            user: {
                f_id: id,
                f_full_name: full_name,
                f_dni: dni,
                f_address: address,
                f_phone_number: phone_number,
                f_email: email,
            },
            buy: {
                f_products: order,
                f_price_total: priceTotal,
            }
        };
        console.log(id);
        if (!id) {
            return
        }
        dispatch(postFetchBuyUserExisting(userAndBuy));
        dispatch(removeOrder());
    }

    return (
        <ContCheckout>
            <div className="cont-1">
                <h2>Customer Information</h2>
                <Card className="contInfo">
                    <div>
                        <div>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">are you?</FormLabel>
                            <RadioGroup className="contRadioGroup" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                {   state === true ?
                                    (
                                        <FormControlLabel value="new" control={<Radio />} label="New customer" disabled/>
                                    )
                                    :
                                    (
                                        <FormControlLabel value="new" control={<Radio />} label="New customer"/>
                                    )
                                }
                                <FormControlLabel value="existing" control={<Radio />} label="Existing customer" />
                            </RadioGroup>
                            </FormControl>
                        </div>

                    </div>
                    {   value === 'new' ?
                        (
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField 
                                    label="Full name" 
                                    variant="filled"
                                    name="full_name" 
                                    value={full_name} 
                                    onChange={handleInputChange}/>
                                <TextField 
                                    label="ID" 
                                    variant="filled"
                                    name="dni" 
                                    value={dni} 
                                    onChange={handleInputChange}/>
                                <TextField
                                    label="Address"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    name="address"
                                    value={address} 
                                    onChange={handleInputChange}
                                />
                                <TextField 
                                    label="Phone number" 
                                    variant="filled"
                                    name="phone_number" 
                                    value={phone_number} 
                                    onChange={handleInputChange}/>
                                <TextField 
                                    label="Email" 
                                    variant="filled"
                                    name="email"
                                    value={email} 
                                    onChange={handleInputChange}/>
                            </form>
                        )
                        :
                        null
                    }
                    {
                        value === 'existing' && isLoading === false && state === false?
                        (
                            <form onSubmit={sendLookup} className={classes.root} noValidate autoComplete="off">
                                <TextField 
                                    id="filled-basic" 
                                    label="Email" 
                                    variant="filled"
                                    name="email_existing"
                                    value={email_existing} 
                                    onChange={handleInputChange}/>
                                <Button type="submit" color="primary">Lookup</Button>
                            </form>
                        )
                    :
                        null
                    }
                    {
                        state === true && value === 'existing' ?
                        (
                            <>
                                <div className="contText">
                                    <h2 className="title">Welcome back, {user.full_name.split(' ')[0]}</h2>
                                    <h5>ID: {user.dni}</h5>
                                    <h5>Address: {user.address}</h5>
                                    <h5>Phone number: {user.phone_number}</h5>
                                    <h5>Email: {user.email}</h5>
                                    <Button color="primary" onClick={resetLookup}>Not {user.full_name.split(' ')[0]}? lookup again</Button>
                                </div>
                            </>
                        )
                        :
                            null
                    }
                </Card>
            </div>
            <div className="cont-2">
                <h2>Order Summary</h2>
                <div className="contOrder">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Product</StyledTableCell>
                                <StyledTableCell align="right">Unit price</StyledTableCell>
                                <StyledTableCell align="right">Units</StyledTableCell>
                                <StyledTableCell align="right">Total price</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {order.map((product: any) => (
                                <StyledTableRow key={product.id}>
                                <StyledTableCell component="th" scope="row">{product.name_product}</StyledTableCell>
                                <StyledTableCell align="right">{formatNumber(product.price)}</StyledTableCell>
                                <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{formatNumber(product.price * product.quantity)}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <h2 className="align-right m-20">Total: {formatNumber(priceTotal)}</h2>
                    <div className="align-right">
                        {   value === 'new' ?
                            (   <>
                                    <Button onClick={fetchBuyUserNew}>Place Order</Button>
                                    <RedirectThanks stateBuy={stateBuy} />
                                </>
                            )
                            :
                            null
                        }
                        {   value === 'existing' ?
                            (
                                <>
                                    <Button onClick={fetchBuyUserExisting}>Place Order</Button>
                                    <RedirectThanks stateBuy={stateBuy} />
                                </>
                            )
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </ContCheckout>
    );
};

export default Checkout;