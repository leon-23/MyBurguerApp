import React from 'react';
//CSS
import classes from './BuildControls.css';

//components
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props)=>{
    const ingredients = ['Salad','Bacon','Cheese','Meat'];

    return(
        <div  className= {classes.BuildControls}>
            <p> Monto Total: <strong> { props.price.toFixed(2) } $ </strong> </p>
            { ingredients.map(ingredient =>(
                <BuildControl key= { ingredient }
                    label= { ingredient }
                    clickLess = { props.clickLess }
                    clickMore = { props.clickMore }
                    disabled = { props.disabled }
                />
            ))}
            <button className={classes.OrderButton }
                    disabled= { props.order }
                    onClick = {()=> props.clickModal() } >
                 Listo 
            </button>
        </div>
    )
}
export default buildControls;