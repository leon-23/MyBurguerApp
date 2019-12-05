import React from 'react';
import classes from './Button.css';


const button = (props)=>{
    const  invalid = props.disabled ? classes.Invalid : ''; 
    return (
        <button 
            className= {  [classes.Button, classes[props.btnType], invalid].join(' ')}
            onClick = { props.click } disabled={props.disabled }> 
            
            { props.children }
    
        </button>
    )
}
export default button;
