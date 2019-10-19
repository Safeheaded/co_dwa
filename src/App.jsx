import React, { Component } from 'react';
import styles from './App.module.sass';
import Menu from './components/Menu/Menu';
import SimpleEmissionDisplay from './components/SimpleEmissionDisplay/SimpleEmissionDisplay';
import EmissionDisplay from './components/EmissionDisplay/EmissionDisplay';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <Container maxWidth="lg" className={styles.Container}>
                    <Switch>
                        <Route path="/simple-display">
                            <SimpleEmissionDisplay />
                        </Route>
                        <Route path="/">
                            <EmissionDisplay />
                        </Route>
                    </Switch>
                </Container>
            </>
        );
    }
}

export default App;
