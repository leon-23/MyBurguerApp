import  React from 'react';
import Aux from '../../../hoc/Aux';
import OrderedList from './OrderedList';


const modalContent =(props)=>(

    <Aux>
        <h3 style={{textAlign: 'center'}}> Su Orden </h3> 
        <p> Su Deliciosa hamburguesa Contiene: </p>
                    
        <OrderedList ingredients={ props.ingredients }/>
                    
        <p style={{textAlign: 'center'}}> 
             Monto Total: <strong>{ props.price } $</strong>
        </p>
            
    </Aux>
            
        )
export default modalContent;
