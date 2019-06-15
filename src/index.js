import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AsyncContainer from './AsyncContainer/AsyncContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import store from "./store/index";

ReactDOM.render(
    <Provider store={store}>
        <AsyncContainer />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
