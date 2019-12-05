import React from 'react';
import classes from './Input.css';

const input = (props)=>{

    const inputClasses = [classes.InputElement];

    if(!props.valid && props.touched )
        inputClasses.push(classes.Invalid)

    let input = props.inputType === 'input' ? 
         <input
            className={ inputClasses.join(' ') }
            {...props.config }
            value={ props.value }
            onChange={ props.change }
         /> : 
         <textarea
            className={ inputClasses }
            {...props.config }
            value={ props.value }
            onChange={()=> props.change }
         > 
            { props.children }
         </textarea>

    return(
        <div className={classes.Input}>
            <label className={ classes.Label }> { props.label } </label>
            { input }
        </div>
    )
}

export default input;