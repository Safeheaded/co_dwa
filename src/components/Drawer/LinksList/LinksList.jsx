import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Typography, Button, Toolbar } from '@material-ui/core';
import { Tune as TuneIcon } from '@material-ui/icons';
import styles from './LinksList.module.sass';
import PropTypes from 'prop-types';

const CustomToolbar = styled(Toolbar)({
    justifyContent: 'flex-end'
});

const sideDrawer = props => {
    return (
        <div className={styles.Drawer}>
            <CustomToolbar className={styles.Drawer}>
                <Button>
                    <TuneIcon color="primary" />
                </Button>
            </CustomToolbar>
            <ul className={styles.AnchorList}>
                <li>
                    <Link
                        onClick={() => props.toggleHandler('drawer', false)}
                        to="/"
                        className={styles.Anchor}
                    >
                        <Typography variant="button">Strona główna</Typography>
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => props.toggleHandler('drawer', false)}
                        to="/simple-display"
                        className={styles.Anchor}
                    >
                        <Typography variant="button">
                            Emisja w lini prostej
                        </Typography>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

sideDrawer.propTypes = {
    toggleHandler: PropTypes.func
};

export default sideDrawer;
