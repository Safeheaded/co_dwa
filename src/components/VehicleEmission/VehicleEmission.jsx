import React from 'react';
import styles from './VehicleEmission.module.sass';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { DirectionsCar, DirectionsBus } from '@material-ui/icons';

const iconsProps = {
    fontSize: 'large',
    className: styles.Icon
};

const vehiclesToIcons = {
    car: <DirectionsCar {...iconsProps} />,
    bus: <DirectionsBus {...iconsProps} />
};

const vehicleEmission = props => {
    const vehicleIcon = vehiclesToIcons[props.vehicle];

    return (
        <Paper className={styles.EmissionTab}>
            {vehicleIcon}
            <section>
                <Typography className={styles.IconsHeader}>
                    2000kg CO2
                </Typography>
                <Typography className={styles.IconsHeader}>140%</Typography>
            </section>
        </Paper>
    );
};

vehicleEmission.propTypes = {
    vehicle: PropTypes.oneOf(['car', 'bus']).isRequired
};

export default vehicleEmission;
