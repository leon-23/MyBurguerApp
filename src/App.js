import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Layout  from "./layouts/Layout";
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckoutSumary from './containers/CheckoutSumary/CheckoutSumary';
import Orders from './containers/Orders/Orders';

import WithErrorHandler from './hoc/WithErrorHandler/withErrorHandler';

function App() {
  return (
    <div className="App">
         
         <Layout > 

            <Switch>
              <Route  exact path="/" component={ BurguerBuilder } />
              <Route  path="/checkout" component={ CheckoutSumary } />
              <Route  exact path="/orders" component={ Orders } />
              </Switch>
         </Layout>
    
    </div>
  );
}

export default WithErrorHandler(App);
