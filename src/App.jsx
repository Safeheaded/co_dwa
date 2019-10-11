import React, { Component } from 'react';
import styles from './App.module.sass';
import Menu from './components/Menu/Menu';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className={styles.Container}>
                    <h1 className={styles.MainTitle}>
                        CO<span className={styles.SubTitle}>dwa</span>
                    </h1>
                </div>
            </>
        );
    }
}

export default App;
