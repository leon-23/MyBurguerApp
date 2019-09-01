import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Layout  from "./layouts/Layout";
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckoutSumary from './containers/CheckoutSumary/CheckoutSumary';

function App() {
  return (
    <div className="App">
         
         <Layout > 

            <Switch>
              <Route  exact path="/" component={ BurguerBuilder } />
              <Route  path="/checkout/:ingredients" component={ CheckoutSumary } />
              </Switch>
         </Layout>
    
    </div>
  );
}

export default App;
