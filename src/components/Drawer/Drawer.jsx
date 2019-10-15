import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import styles from './Drawer.module.sass';
import { Menu as MenuIcon } from '@material-ui/icons';

export default function() {
    const [state, setState] = React.useState({
        drawer: false
    });

    const toggle = (side, open) => () => {
        setState({ state, [side]: open });
    };

    const sideList = () => <div className={styles.List}>AAAAAAAAAA</div>;

    return (
        <div className={styles.button}>
            <MenuIcon
                fontSize="large"
                className={styles.Icon}
                role="button"
                onClick={toggle('drawer', true)}
            />
            <Drawer open={state.drawer} onClose={toggle('drawer', false)}>
                {sideList('drawer')}
            </Drawer>
        </div>
    );
}
