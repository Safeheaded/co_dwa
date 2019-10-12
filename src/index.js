import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles/';
import { grey } from '@material-ui/core/colors/';
import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: grey
    }
});

const app = (
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
