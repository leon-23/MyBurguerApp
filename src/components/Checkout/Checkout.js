import React from 'react';

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button'

import  classes from './Checkout.css';

const checkout = (props)=>(

    <div className={ classes.CheckoutSumary }>
        <h1> Esperamos que la Disfrutes!</h1>
        <div style={{width: '100%', height:'100%', margin:'auto'}}>
            <Burger ingredients={ props.ingredients }> </Burger>
        </div>

        <Button btnType="Danger" click={ props.cancel }> Cancelar</Button>
        <Button btnType="Success" click={ props.continue }>Continuar </Button>
    </div>
)

export default checkout;