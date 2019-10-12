import React, { Component } from 'react';
import VehicleEmission from '../VehicleEmission/VehicleEmission';
import {
    Card,
    Slider,
    CardContent,
    CardHeader,
    Typography,
    TextField
} from '@material-ui/core';
import styles from './SimpleEmissionDisplay.module.sass';

const maxDistance = 40000;
class SimpleEmissionDisplay extends Component {
    state = {
        distance: 0
    };

    updateDistance = value => {
        this.setState({
            distance: value <= maxDistance ? value : maxDistance
        });
    };

    render() {
        const distanceInput = (
            <TextField
                onChange={event => {
                    this.updateDistance(+event.target.value);
                }}
                value={this.state.distance}
                inputProps={{
                    type: 'number'
                }}
            />
        );

        return (
            <Card>
                <CardHeader title="Emisja w linii prostej" />
                <CardContent>
                    <VehicleEmission vehicle="car" />
                    <VehicleEmission vehicle="bus" />
                    <VehicleEmission vehicle="train" />
                    <Typography className={styles.DistanceDisplay} variant="h4">
                        Odległość: {distanceInput}km
                    </Typography>
                    <Slider
                        value={this.state.distance}
                        min={0}
                        max={maxDistance}
                        onChange={(event, val) => {
                            this.updateDistance(val);
                        }}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default SimpleEmissionDisplay;
