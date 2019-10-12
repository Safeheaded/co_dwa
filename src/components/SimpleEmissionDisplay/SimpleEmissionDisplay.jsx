import React, { Component } from 'react';
import VehicleEmission from '../VehicleEmission/VehicleEmission';

class SimpleEmissionDisplay extends Component {
    render() {
        return (
            <section>
                <VehicleEmission vehicle="car" />
                <VehicleEmission vehicle="bus" />
            </section>
        );
    }
}

export default SimpleEmissionDisplay;
