import React, { Component } from 'react';
import styles from './App.module.sass';
import Menu from './components/Menu/Menu';
import SimpleEmissionDisplay from './components/SimpleEmissionDisplay/SimpleEmissionDisplay';
import { Container } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <Container className={styles.Container}>
                    <SimpleEmissionDisplay />
                </Container>
            </>
        );
    }
}

export default App;
