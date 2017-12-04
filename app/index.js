import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/components/App.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';

import './styles/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('render-app')); 