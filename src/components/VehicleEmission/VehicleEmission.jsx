import React from 'react';
import { MdDirectionsCar, MdDirectionsBus } from 'react-icons/md';
import styles from './VehicleEmission.module.sass';
import PropTypes from 'prop-types';

const iconsProps = {
    size: 40,
    className: styles.Icon
};

const vehiclesToIcons = {
    car: <MdDirectionsCar {...iconsProps} />,
    bus: <MdDirectionsBus {...iconsProps} />
};

const vehicleEmission = props => {
    const vehicleIcon = vehiclesToIcons[props.vehicle];

    return (
        <article className={styles.EmissionTab}>
            {vehicleIcon}
            <section>
                <h4 className={styles.IconsHeader}>2000kg CO2</h4>
                <h5 className={styles.IconsHeader}>140%</h5>
            </section>
        </article>
    );
};

vehicleEmission.propTypes = {
    vehicle: PropTypes.oneOf(['car', 'bus']).isRequired
};

export default vehicleEmission;
