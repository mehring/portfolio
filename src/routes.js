import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';

import IndexPage from './components/index/IndexPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PortfolioPage from './components/portfolio/PortfolioPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage}/>
        <Route path="home" component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="portfolio" component={PortfolioPage}/>
    </Route>
);