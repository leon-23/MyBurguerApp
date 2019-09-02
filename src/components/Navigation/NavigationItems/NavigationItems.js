import React from 'react';

import NavItem from './NavigationItem/NavItem';
import classes from './NavigationItems.css'

const navItems = ()=>(

    <ul className = { classes.NavigationItems }>

        <NavItem link="/" active > Burger Builder </NavItem>
        <NavItem link="/orders"  > Checkout </NavItem>

    </ul>
);
export default navItems;