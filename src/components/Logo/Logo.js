import React from 'react';
import classes from './Logo.css'

const logo = (props)=>(

    <div className= { classes.Logo } style={{ height: props.height }}>
        <img src="images/burger-logo.png" alt="BurguerApp Logo"/> 
    </div>   
);
export default logo;