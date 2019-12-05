import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props)=>{
        let ingredients = [];
        Object.keys(props.ingredients)
            .forEach((key) => {
                for(let i = 0; i< props.ingredients[key].cant; i++){
                   ingredients.push( <BurgerIngredient key = {key.concat(i)} 
                                        type={ key } />) 
                }
            } );
       
        if(!ingredients.length)
            ingredients = <p> Añada los ingredientes, por favor </p>
    return (
        <div className= { classes.Burger }>
      
            <BurgerIngredient type= "bread-top"/>
                { ingredients }
            <BurgerIngredient type= "bread-bottom"/>
        </div>
    )

}

export default burger;