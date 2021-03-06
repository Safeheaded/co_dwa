import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles/';
import { pink, cyan } from '@material-ui/core/colors/';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[500]
        },
        secondary: {
            main: cyan[700]
        }
    }
});

const app = (
    <MuiThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
