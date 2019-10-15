import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import styles from './Drawer.module.sass';

export default function() {
    const [state, setState] = React.useState({
        drawer: false
    });

    const toggle = (side, open) => event => {
        setState({ state, [side]: open });
    };

    const sideList = side => <div className={styles.list}>AAAAAAAAAA</div>;

    return (
        <div className={styles.button}>
            <Button onClick={toggle('drawer', true)}>Drawer</Button>
            <Drawer open={state.drawer} onClose={toggle('drawer', false)}>
                {sideList('drawer')}
            </Drawer>
        </div>
    );
}
