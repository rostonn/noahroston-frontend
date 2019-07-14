import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import store from "./store/index";


const theme = createMuiTheme({
    palette: {
        primary: { main: indigo['500'] },
        secondary: { main: grey['50'] },
    },
    status: {
        danger: 'orange',
    },
    typography: {
        fontFamily: [
            'Lato'
        ]
    },
});


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer />
        </ThemeProvider>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
