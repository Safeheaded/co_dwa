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
import { styled } from '@material-ui/styles';
import styles from './SimpleEmissionDisplay.module.sass';

const maxDistance = 40000;

const NoShadowCard = styled(Card)({
    boxShadow: 'none'
});
class SimpleEmissionDisplay extends Component {
    state = {
        distance: 100
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
            <NoShadowCard>
                <CardHeader title="Emisja w linii prostej" />
                <CardContent>
                    <VehicleEmission
                        distance={this.state.distance}
                        emission={100}
                        vehicle="car"
                    />
                    <VehicleEmission
                        distance={this.state.distance}
                        emission={75}
                        baseEmission={100}
                        vehicle="bus"
                    />
                    <VehicleEmission
                        distance={this.state.distance}
                        emission={28}
                        baseEmission={100}
                        vehicle="train"
                    />
                    <Typography className={styles.DistanceDisplay} variant="h4">
                        Odległość: {distanceInput}km
                    </Typography>
                    <Slider
                        value={this.state.distance}
                        min={1}
                        max={maxDistance}
                        onChange={(event, val) => {
                            this.updateDistance(val);
                        }}
                    />
                </CardContent>
            </NoShadowCard>
        );
    }
}

export default SimpleEmissionDisplay;
