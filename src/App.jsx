import React, { Component } from 'react';
import styles from './App.module.sass';
import Menu from './components/Menu/Menu';
import SimpleEmissionDisplay from './components/SimpleEmissionDisplay/SimpleEmissionDisplay';
import { Container } from '@material-ui/core';
import AboutSite from './components/AboutSite/AboutSite';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <AboutSite />
                <Container maxWidth="xl" className={styles.Container}>
                    <SimpleEmissionDisplay />
                </Container>
            </>
        );
    }
}

export default App;
