import React from 'react';
import styles from './VehicleEmission.module.sass';
import PropTypes from 'prop-types';
import { Divider, Typography } from '@material-ui/core';
import {
    DirectionsCar,
    DirectionsBus,
    DirectionsRailway
} from '@material-ui/icons';

const vehicleEmission = props => {
    const iconsProps = {
        fontSize: 'large',
        className: styles.Icon,
        color: props.baseType === props.vehicle ? 'secondary' : 'primary'
    };

    const vehiclesToIcons = {
        car: <DirectionsCar {...iconsProps} />,
        bus: <DirectionsBus {...iconsProps} />,
        train: <DirectionsRailway {...iconsProps} />
    };

    const vehicleIcon = vehiclesToIcons[props.vehicle];
    const distance = props.distance;
    const baseEmission = props.baseEmission;
    const emission = props.emission;

    let percentage = baseEmission
        ? ((emission * distance) / (baseEmission * distance)) * 100
        : 100;

    percentage = isNaN(percentage) ? 0 : percentage;

    const roundedPercecntage = Math.round(percentage);

    const actualEmission = (distance * emission) / 1000;

    return (
        <section
            className={styles.EmissionWrapper}
            onClick={() => props.baseEmissionHandler(props.vehicle)}
        >
            <article className={styles.EmissionTab}>
                {vehicleIcon}
                <section>
                    <Typography className={styles.IconsHeader}>
                        {actualEmission}kg CO2
                    </Typography>
                    <Typography className={styles.IconsHeader}>
                        {roundedPercecntage}%
                    </Typography>
                </section>
            </article>
            <Divider variant="middle" />
        </section>
    );
};

vehicleEmission.propTypes = {
    vehicle: PropTypes.oneOf(['car', 'bus', 'train']).isRequired,
    distance: PropTypes.number.isRequired,
    emission: PropTypes.number.isRequired,
    baseEmission: PropTypes.number.isRequired,
    baseEmissionHandler: PropTypes.func.isRequired,
    baseType: PropTypes.string.isRequired
};

export default vehicleEmission;
