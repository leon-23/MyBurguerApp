import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


import classes from './SideDrawer.css'

const sideDrawer = (props)=>{
   let styles = [classes.SideDrawer,classes.Open];
   
   if(!props.show)
        styles[1] = classes.Close; 

    return(
        <div className={ styles.join(' ') }>
            <Logo height = "10%" />

            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
 }
export default sideDrawer;

