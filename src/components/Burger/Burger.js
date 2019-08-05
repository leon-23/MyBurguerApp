import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props)=>{

        let ingredients = [];
         Object.keys(props.ingredients)
            .forEach((x) => {
                for(let i = 0; i< props.ingredients[x]; i++){
                   ingredients.push( <BurgerIngredient key = {x.concat(i)} 
                                        type={ x } />) 
                }
            } );
       
        if(ingredients.length === 0)
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