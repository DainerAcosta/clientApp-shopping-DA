import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { resetStateBuy } from '../../actions/checkoutAction';
import { ThanksCont } from './thanks.style';
import { Link } from 'react-router-dom';
import contillon from '../../asset/img/cotillon.png';

const Thanks = () => {

    const dispatch = useDispatch();

    useEffect((): any => {
        dispatch(resetStateBuy());
    }, []);

    return (
        <ThanksCont>
            <div>
                <img src={contillon} 
                alt="cotillon"
                width="100px"
                height="100px"/>
                <h1>Thanks for your purchase</h1>
                <Button><Link to="/">Start Again</Link></Button>
            </div>
        </ThanksCont>
    );
};

export default Thanks;