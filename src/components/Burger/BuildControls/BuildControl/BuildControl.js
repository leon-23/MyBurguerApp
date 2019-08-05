import React from 'react'
import classes from './BuildControl.css';

const buildControl = (props)=>(
    <div className={ classes.BuildControl}>
        <div className={ classes.Label}> { props.label }</div>
        <button className= {classes.Less}
            onClick={ ()=> props.clickLess(props.label.toLowerCase()) }
            disabled ={ props.disabled(props.label.toLowerCase()) }> Menos 
         </button>
        
        <button className= {classes.More} onClick={ ()=> props.clickMore(props.label.toLowerCase()) }> Mas </button>
    </div>
)
export default buildControl;