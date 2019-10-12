import React, { Component } from 'react';
import VehicleEmission from '../VehicleEmission/VehicleEmission';

class SimpleEmissionDisplay extends Component {
    render() {
        return (
            <>
                <VehicleEmission vehicle="car" />
                <VehicleEmission vehicle="bus" />
            </>
        );
    }
}

export default SimpleEmissionDisplay;
