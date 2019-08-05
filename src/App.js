import React from 'react';

import Layout  from "./layouts/Layout";
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
         
         <Layout> 
         	<BurguerBuilder /> 
         </Layout>
    
    </div>
  );
}

export default App;
