import React, { Component } from 'react';
import styles from './App.module.sass';

class App extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <h1 className={styles.MainTitle}>
                    CO<span className={styles.SubTitle}>dwa</span>
                </h1>
            </div>
        );
    }
}

export default App;
