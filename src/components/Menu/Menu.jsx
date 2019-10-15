import React from 'react';
import { Toolbar } from '@material-ui/core';
import Drawer from '../Drawer/Drawer';

function menu() {
    return (
        <Toolbar style={{ backgroundColor: 'white' }}>
            <Drawer />
        </Toolbar>
    );
}

export default menu;
