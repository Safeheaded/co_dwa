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
    emissions = {
        car: 100,
        bus: 75,
        train: 28
    };

    state = {
        distance: 100,
        baseEmission: 'car'
    };

    changeBaseEmission = vehicle => {
        this.setState({ baseEmission: vehicle });
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

        const sharedVehiclesProps = {
            distance: this.state.distance,
            baseEmission: this.emissions[this.state.baseEmission],
            baseEmissionHandler: this.changeBaseEmission,
            baseType: this.state.baseEmission
        };

        return (
            <NoShadowCard>
                <CardHeader title="Emisja w linii prostej" />
                <CardContent>
                    <VehicleEmission
                        emission={this.emissions['car']}
                        vehicle="car"
                        {...sharedVehiclesProps}
                    />
                    <VehicleEmission
                        emission={this.emissions['bus']}
                        vehicle="bus"
                        {...sharedVehiclesProps}
                    />
                    <VehicleEmission
                        emission={this.emissions['train']}
                        vehicle="train"
                        {...sharedVehiclesProps}
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
