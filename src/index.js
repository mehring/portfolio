import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import initialState from './reducers/initialState';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/font-awesome-4.6.3/css/font-awesome.min.css';
import './styles/main.scss';

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);