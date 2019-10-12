import React, { Component } from 'react';
import styles from './App.module.sass';
import Menu from './components/Menu/Menu';
import VehicleEmission from './components/VehicleEmission/VehicleEmission';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className={styles.Container}>
                    {/* <h1 className={styles.MainTitle}>
                        CO<span className={styles.SubTitle}>dwa</span>
                    </h1> */}
                    <VehicleEmission vehicle="car" />
                    <VehicleEmission vehicle="bus" />
                </div>
            </>
        );
    }
}

export default App;
