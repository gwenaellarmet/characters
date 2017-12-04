import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/components/App.jsx';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import store from './store.jsx';
import './styles/main.scss';

import CharacterListComponent from './components/CharacterListComponent.jsx';
import CharacterEditComponent from './components/CharacterEditComponent.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={CharacterListComponent}></IndexRoute>
                <Route path="edit(/:id)" component={CharacterEditComponent}></Route>
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('render-app')); 