import  React from 'react';
import classes from './Order.css';

const order = (props)=>{
    const ingredients = [];

   for(let key in props.ingredients){
            ingredients.push( <span key={key}> {key}: { props.ingredients[key].cant } </span>)
   }

   return(
       <div className={ classes.Order }>

           <p>  Ingredientes: { ingredients } </p>
           <p>Precio: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
           <p>Cliente: <span> { props.customer.name } </span>
             <span> {props.customer.adress.city } - { props.customer.adress.country } </span> 
           </p>
       </div>
   )
}

export default order;