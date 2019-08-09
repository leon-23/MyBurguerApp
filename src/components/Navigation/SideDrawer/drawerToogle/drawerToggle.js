import React from 'react';

import classes from './drawerToggle.css';

const drawerToggle = (props)=>(

    <div className={ classes.DrawerToggle }
        onClick={ props.click }> 
        Menu
    </div>
)

export default drawerToggle;