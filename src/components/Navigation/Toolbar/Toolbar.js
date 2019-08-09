import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/drawerToogle/drawerToggle';

import classes from './Toolbar.css';

const toolbar = (props)=>(

    <header className= { classes.Toolbar }>
        <DrawerToggle click={ props.click }/>
       <Logo height="80%" />       
       
        <nav className= { classes.DesktopOnly }>
            <NavigationItems />      
        </nav> 
    </header>
);

export default toolbar;