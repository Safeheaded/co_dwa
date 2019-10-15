import React from 'react';
import styles from './VehicleEmission.module.sass';
import PropTypes from 'prop-types';
import { Divider, Typography } from '@material-ui/core';
import {
    DirectionsCar,
    DirectionsBus,
    DirectionsRailway
} from '@material-ui/icons';

const iconsProps = {
    fontSize: 'large',
    className: styles.Icon,
    color: 'primary'
};

const vehiclesToIcons = {
    car: <DirectionsCar {...iconsProps} />,
    bus: <DirectionsBus {...iconsProps} />,
    train: <DirectionsRailway {...iconsProps} />
};

const vehicleEmission = props => {
    const vehicleIcon = vehiclesToIcons[props.vehicle];

    return (
        <>
            <article className={styles.EmissionTab}>
                {vehicleIcon}
                <section>
                    <Typography className={styles.IconsHeader}>
                        2000kg CO2
                    </Typography>
                    <Typography className={styles.IconsHeader}>140%</Typography>
                </section>
            </article>
            <Divider variant="middle" />
        </>
    );
};

vehicleEmission.propTypes = {
    vehicle: PropTypes.oneOf(['car', 'bus', 'train']).isRequired
};

export default vehicleEmission;
