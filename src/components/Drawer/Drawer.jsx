import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import styles from './Drawer.module.sass';
import { Menu as MenuIcon } from '@material-ui/icons';
import SideDrawer from './LinksList/LinksList';

export default class Menu extends Component {
    state = {
        drawer: false
    };

    toggle = (side, open) => {
        this.setState({ ...this.state, [side]: open });
    };

    render() {
        return (
            <div className={styles.button}>
                <MenuIcon
                    style={{ position: 'relative', zIndex: 100000 }}
                    fontSize="large"
                    className={styles.Icon}
                    role="button"
                    onClick={() => this.toggle('drawer', !this.state.drawer)}
                />
                <Drawer
                    open={this.state.drawer}
                    onClose={() => this.toggle('drawer', false)}
                >
                    <SideDrawer toggleHandler={this.toggle} />
                </Drawer>
            </div>
        );
    }
}
