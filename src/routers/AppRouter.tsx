import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ContainerGlobal } from '../styles/container.style';
import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import ListProducts from '../components/Products/ListProducts';

import Thanks from '../components/Thanks/Thanks';

export const RedirectThanks = ({ stateBuy }: any) => {

    return (
        <Route component={ (props: any) => (
                ( stateBuy )
                    ? ( <Redirect to="/thanks" /> )
                    : 
                    null
            )}
        
        />
    )
}

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <ContainerGlobal>
                    <div className="containerCenter">
                        <Switch>
                            <Route exact path="/" component={ ListProducts } />
                            <Route exact path="/cart" component={ Cart } />
                            <Route exact path="/checkout" component={ Checkout } />
                            <Route exact path="/thanks" component={ Thanks } />
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </ContainerGlobal>
            </div>
        </Router>
    );
};

export default AppRouter;